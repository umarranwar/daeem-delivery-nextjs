"use client";
import React, { useRef, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];

const AutocompleteInput = ({ onSelect }) => {
  const autocompleteRef = useRef(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAvbj_IHZhiislshQVOq-YVXLNb0T7LgOQ',
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        autocompleteRef.current
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        onSelect(place); // Callback function to handle selected place
      });
    }
  }, [isLoaded, onSelect]);

  return (
    <input
      ref={autocompleteRef}
      placeholder="Enter a location"
      type="text"
      autoComplete="off"
    />
  );
};

export default AutocompleteInput;
