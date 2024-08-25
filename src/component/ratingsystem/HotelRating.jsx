import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ratingSysIndex.css';
import img from '../ratingsystem/hotel.jpg';
// import blueMarkerIconUrl from '../bluemarkeicon.jpg'; // Import the blue marker icon

const LeafletMap = () => {
    useEffect(() => {
        const map = L.map('mapid').setView([28.3591, 75.5882], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const coords = [[28.3613,75.5853],[28.3612,75.5855],[28.3648,75.5883],[28.3655,75.5895]];
        const dish = ["Biryani","Idli","Shake","Pizza"];

        // Define the blue marker icon
        const blueMarkerIcon = L.icon({
            iconUrl: blueMarkerIconUrl,
            iconSize: [25, 41], // Adjust the size as needed
            iconAnchor: [12, 41], // Adjust the anchor point if necessary
            popupAnchor: [1, -34] // Adjust the popup anchor if necessary
        });

        coords.forEach((coord, index) => {
            const popupContent = <h4>Dishes : ${dish[index]}</h4>;
            L.marker(coord, { icon: blueMarkerIcon }) // Use the blue marker icon
                .addTo(map)
                .bindPopup(popupContent);
        });

        return () => {
            map.remove();
        };
    }, []); // Empty dependency array to run effect only once

    return (
        <div>
            <h1>Restaurants</h1>
            <div className="hotel-container">
                <div className="hotels">
                    <div id="apart1">
                        <img src={img} alt="hotel1"/>
                        <h2>Mr Idli</h2>
                        <p>5 star</p>
                    </div>
                    <div id="apart2">
                        <img src={img} alt="hotel2"/>
                        <h2>Mr Idli2</h2>
                        <p>4.5 star</p>                
                    </div>
                    <div id="apart3">
                        <img src={img} alt="hotel3"/>
                        <h2>Mr Idli3</h2>
                        <p>4 star</p>
                    </div>
                    <div id="apart4">
                        <img src={img} alt="hotel4"/>
                        <h2>Mr Idli04</h2>
                        <p>3 star</p>
                    </div>
                    <div id="apart5">
                        <img src={img} alt="hotel5"/>
                        <h2>Mr Idli05</h2>
                        <p>4.8 star</p>
                    </div>
                    <div id="apart6">
                        <img src={img} alt="hotel6"/>
                        <h2>Mr Idli06</h2>
                        <p>2 star</p>
                    </div>
                </div>
                <div className="map" id="mapid"></div>
            </div>
        </div>
    );
};

export default LeafletMap;