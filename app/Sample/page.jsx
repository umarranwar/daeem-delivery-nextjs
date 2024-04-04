"use client";
import React, { useState, useEffect } from 'react';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const apiKey = 'AIzaSyAvbj_IHZhiislshQVOq-YVXLNb0T7LgOQ'; // Replace 'YOUR_API_KEY' with your actual API key

  useEffect(() => {
    // Check if Geolocation is supported by the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // Success callback
        async (position) => {
          const { latitude, longitude } = position.coords;

          setLatitude(latitude);
          setLongitude(longitude);

          // Call reverse geocoding API to get address from coordinates
          const encodedLatitude = encodeURIComponent(latitude);
          const encodedLongitude = encodeURIComponent(longitude);
          const reverseGeocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${encodedLatitude},${encodedLongitude}&key=${apiKey}`;
          
          try {
            const response = await fetch(reverseGeocodingUrl);
            const data = await response.json();
            if (data.status === 'OK' && data.results.length > 0) {
              setAddress(data.results[0].formatted_address);
            } else {
              setAddress('Address not found');
            }
          } catch (error) {
            console.error('Error fetching address:', error);
            setAddress('Error fetching address');
          } finally {
            setLoading(false);
          }
        },
        // Error callback
        (error) => {
          console.error('Error getting location:', error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      <h1>Current Location</h1>
      {latitude && longitude ? (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          {loading ? (
            <p>Loading address...</p>
          ) : (
            <p>Address: {address}</p>
          )}
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
