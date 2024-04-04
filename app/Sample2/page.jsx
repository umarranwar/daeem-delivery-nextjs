"use client";
import React, { useState, useEffect } from "react";
import storeData from "../data/storeData.json"; // Assuming you have imported your JSON data

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(21.611654); // Set initial latitude
  const [longitude, setLongitude] = useState(39.1596621); // Set initial longitude
  const [nearbyStores, setNearbyStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]); // State for filtered stores
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Filter nearby stores
    const nearby = storeData.filter((store) => {
      const distance = calculateDistance(
        latitude,
        longitude,
        store.lat,
        store.lon
      );
      return distance <= 50; // Filter stores within 50 kilometers (adjust as needed)
    });

    setNearbyStores(nearby);
    setLoading(false);
  }, [latitude, longitude]); // Run whenever latitude or longitude changes

  // Function to calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterStores(e.target.value);
  };

  // Function to filter stores based on search query
  const filterStores = (query) => {
    const filtered = nearbyStores.filter((store) =>
      store.storeName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStores(filtered);
  };

  return (
    <div>
      <h1>Nearby Stores</h1>
      <input
        type="text"
        placeholder="Search by store name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredStores.map((store) => (
            <li key={store.id}>
              <h2>{store.storeName}</h2>
              <img src={store.logo} alt={store.store} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationComponent;
