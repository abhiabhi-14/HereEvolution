import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-control-geocoder';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet/dist/images/marker-shadow.png';
import './Mymap1index.css';

const OpenStreetMap = ({ amenity = 'hospital' }) => {
    const [map, setMap] = useState(null);
    const [mapReady, setMapReady] = useState(false);
    const [around, setAround] = useState(5); // Default radius in kilometers
    const [userLocation, setUserLocation] = useState(null);
    const [nearestAmenity, setNearestAmenity] = useState(null);
    const [routingControl, setRoutingControl] = useState(null);

    useEffect(() => {
        // Initialize the map once when the component mounts
        const mapInstance = L.map('map').setView([0, 0], 13); // Default view
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance);

        setMap(mapInstance);
        setMapReady(true);

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, []);

    useEffect(() => {
        if (mapReady && map) {
            // Check if geolocation is supported
            if ('geolocation' in navigator) {
                // Get the user's location once the map is initialized
                navigator.geolocation.getCurrentPosition(async function (position) {
                    const location = L.latLng(position.coords.latitude, position.coords.longitude);
                    setUserLocation(location);
                    map.setView(location);

                    // Custom red marker icon for user location
                    const redMarkerIcon = L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png', // Corrected URL
                        shadowSize: [41, 41]
                    });

                    // Add user's marker
                    const userMarker = L.marker(location, { icon: redMarkerIcon }).addTo(map);
                    userMarker.bindPopup('Your Location').openPopup();
                    try {
                        // Fetch nearby amenities using Overpass API
                        const amenityResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=${amenity}](around:${around * 1000},${position.coords.latitude},${position.coords.longitude});out;`);
                        const amenityData = await amenityResponse.json();

                        // Custom blue marker icon for amenities
                        const blueMarkerIcon = L.icon({
                            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                            shadowSize: [41, 41]
                        });

                        // Remove existing markers before adding new ones
                        map.eachLayer(layer => {
                            if (layer instanceof L.Marker && layer !== userMarker) {
                                map.removeLayer(layer);
                            }
                        });

                        // Add blue markers for each amenity
                        let nearestDistance = Infinity;
                        let nearestMarker = null;

                        const amenities = amenityData.elements.map(place => {
                            const amenityLocation = L.latLng(place.lat, place.lon);
                            const distance = location.distanceTo(amenityLocation);

                            if (distance < nearestDistance) {
                                nearestDistance = distance;
                                nearestMarker = {
                                    location: amenityLocation,
                                    name: place.tags.name
                                };
                            }

                            return {
                                location: amenityLocation,
                                name: place.tags.name
                            };
                        });

                        amenities.forEach(place => {
                            const distance = location.distanceTo(place.location);
                            L.marker(place.location, { icon: blueMarkerIcon }).addTo(map)
                                .bindPopup(`${place.name}Distance: ${distance.toFixed(2)} meters`);
                        });

                        setNearestAmenity(nearestMarker);

                    } catch (error) {
                        console.error('Error fetching nearby amenities:', error);
                    }
                });
            } else {
                console.error('Geolocation is not supported.');
            }
        }
    }, [map, mapReady, amenity, around]);

    useEffect(() => {
        if (nearestAmenity && userLocation && map) {
            // Add routing control for the nearest amenity
            if (!routingControl) {
                const newRoutingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(userLocation.lat, userLocation.lng),
                        nearestAmenity.location
                    ],
                    routeWhileDragging: true
                }).addTo(map);
                setRoutingControl(newRoutingControl);
            } else {
                routingControl.setWaypoints([
                    L.latLng(userLocation.lat, userLocation.lng),
                    nearestAmenity.location
                ]);
            }
        }
    }, [nearestAmenity, userLocation, map, routingControl]);

    const handleRadiusChange = (event) => {
        setAround(parseFloat(event.target.value));
    };

    return (
        <>
            <div id="map" style={{ height: '600px', width: '80%', margin: '100px auto', zIndex: 0 }}></div>
            <div style={{ margin: '20px auto', textAlign: 'center' }}>
                <label htmlFor="radius" style={{ marginRight: '10px' }}>Set Radius (km): </label>
                <input
                    type="number"
                    id="radius"
                    step="0.1"
                    value={around}
                    onChange={handleRadiusChange}
                    style={{
                        padding: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        width: '60px'
                    }}
                />
            </div>
        </>
    );
};

export default OpenStreetMap;