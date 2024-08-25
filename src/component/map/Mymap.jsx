import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-control-geocoder';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet/dist/images/marker-shadow.png';
import SearchBar from './SearchBar';

const OpenStreetMap = () => {
    const [map, setMap] = useState(null);
    const [mapReady, setMapReady] = useState(false);

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
                    const userLocation = L.latLng(position.coords.latitude, position.coords.longitude);
                    map.setView(userLocation);

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
                    const userMarker = L.marker(userLocation, { icon: redMarkerIcon }).addTo(map);
                    userMarker.bindPopup('Your Location').openPopup();
                    try {
                        // Fetch nearby restaurants using Overpass API
                        const restaurantResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=restaurant](around:5000,${position.coords.latitude},${position.coords.longitude});out;`);
                        const restaurantData = await restaurantResponse.json();

                        // Custom blue marker icon for restaurants
                        const blueMarkerIcon = L.icon({
                            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                            shadowSize: [41, 41]
                        });

                        // Add blue markers for each restaurant
                        restaurantData.elements.forEach(place => {
                            const restaurantLocation = L.latLng(place.lat, place.lon);
                            const distance = userLocation.distanceTo(restaurantLocation);
                            L.marker(restaurantLocation, { icon: blueMarkerIcon }).addTo(map)
                                .bindPopup(`<strong>${place.tags.name}</strong><br>Distance: ${distance.toFixed(2)} meters`);
                        });
                        // Fetch nearby hospitals using Overpass API
                        const hospitalResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=hospital](around:5000,${position.coords.latitude},${position.coords.longitude});out;`);
                        const hospitalData = await hospitalResponse.json();

                        // Custom green marker icon for hospitals
                        const greenMarkerIcon = L.icon({
                            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',

                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                            shadowSize: [41, 41]
                        });

                        // Add green markers for each hospital
                        hospitalData.elements.forEach(place => {
                            const hospitalLocation = L.latLng(place.lat, place.lon);
                            const distance = userLocation.distanceTo(hospitalLocation);
                            L.marker(hospitalLocation, { icon: greenMarkerIcon }).addTo(map)
                                .bindPopup(`<strong>${place.tags.name}</strong><br>Distance: ${distance.toFixed(2)} meters`);
                        });

                        // Fetch nearby libraries using Overpass API
                        const libraryResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=library](around:5000,${position.coords.latitude},${position.coords.longitude});out;`);
                        const libraryData = await libraryResponse.json();

                        // Custom voilet marker icon for libraries
                        const voiletMarkerIcon = L.icon({
                            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                            shadowSize: [41, 41]
                        });

                        // Add voilet markers for each library
                        libraryData.elements.forEach(place => {
                            const libraryLocation = L.latLng(place.lat, place.lon);
                            const distance = userLocation.distanceTo(libraryLocation);
                            L.marker(libraryLocation, { icon: voiletMarkerIcon }).addTo(map)
                                .bindPopup(`<strong>Library</strong><br>Distance: ${distance.toFixed(2)} meters`);
                        });

                        // Fetch nearby ATMs using Overpass API
                        const atmResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=atm](around:5000,${position.coords.latitude},${position.coords.longitude});out;`);
                        const atmData = await atmResponse.json();

                        // Custom orange marker icon for ATMs
                        const orangeMarkerIcon = L.icon({
                            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                            shadowSize: [41, 41]
                        });

                        // Add orange markers for each ATM
                        atmData.elements.forEach(place => {
                            const atmLocation = L.latLng(place.lat, place.lon);
                            const distance = userLocation.distanceTo(atmLocation);
                            L.marker(atmLocation, { icon: orangeMarkerIcon }).addTo(map)
                                .bindPopup(`<strong>ATM</strong><br>Distance: ${distance.toFixed(2)} meters`);
                        });

                        // Fetch nearby supermarkets using Overpass API
                        const supermarketResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node[shop=supermarket](around:5000,${position.coords.latitude},${position.coords.longitude});out;`);
                        const supermarketData = await supermarketResponse.json();

                        // Custom yellow marker icon for supermarkets
                        const yellowMarkerIcon = L.icon({
                            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                            shadowSize: [41, 41]
                        });

                        // Add yellow markers for each supermarket
                        supermarketData.elements.forEach(place => {
                            const supermarketLocation = L.latLng(place.lat, place.lon);
                            const distance = userLocation.distanceTo(supermarketLocation);
                            L.marker(supermarketLocation, { icon: yellowMarkerIcon }).addTo(map)
                                .bindPopup(`<strong>Supermarket</strong><br>Distance: ${distance.toFixed(2)} meters`);
                        });

                        // Fetch nearby parks using Overpass API
                        const parkResponse = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];(node[leisure=park](around:5000,${position.coords.latitude},${position.coords.longitude});way[leisure=park](around:5000,${position.coords.latitude},${position.coords.longitude});relation[leisure=park](around:5000,${position.coords.latitude},${position.coords.longitude}););out;`);
                        const parkData = await parkResponse.json();

                        // Add yellow markers for each park
                        parkData.elements.forEach(place => {
                            const parkLocation = L.latLng(place.lat, place.lon);
                            const distance = userLocation.distanceTo(parkLocation);
                            L.marker(parkLocation, { icon: yellowMarkerIcon }).addTo(map)
                                .bindPopup(`<strong>Park</strong><br>Distance: ${distance.toFixed(2)} meters`);
                        });




                    } catch (error) {
                        console.error('Error fetching nearby amenities:', error);
                    }
                });
            } else {
                console.error('Geolocation is not supported.');
            }
        }
    }, [map, mapReady]);

    return (
        <>
            {/* <SearchBar/> */}
            <div id="map" style={{ height: '600px', width: '80%', margin: '5% 10%', zIndex: 0 }}></div>
            <div><textarea></textarea></div>
        </>
    );
};

export default OpenStreetMap;


