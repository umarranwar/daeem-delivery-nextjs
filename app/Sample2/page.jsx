"use client";
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const response = await fetch('/api/getRestaurants');
    const data = await response.json();
    setRestaurants(data);
  };

  const handleAddRestaurant = async () => {
    await fetch('/api/addRestaurant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        location,
      }),
    });
    setName('');
    setLocation('');
    fetchRestaurants(); // Refresh the list after adding a restaurant
  };

  return (
    <div>
      <h1>Add a Restaurant</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleAddRestaurant}>Add Restaurant</button>

      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
