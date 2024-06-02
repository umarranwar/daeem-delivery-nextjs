// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { useLoadScript } from "@react-google-maps/api";

// const libraries = ["places"];

// const PlaceAutocomplete = () => {
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const autocompleteRef = useRef(null);
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "YOUR_API_KEY", // Replace with your Google Maps API key
//     libraries,
//   });

//   useEffect(() => {
//     if (isLoaded) {
//       const autocomplete = new window.google.maps.places.Autocomplete(
//         autocompleteRef.current
//       );
//       autocomplete.addListener("place_changed", () => {
//         const place = autocomplete.getPlace();
//         setSelectedPlace(place); // Set the selected place
//         handleSelect(place); // Callback function to handle selected place
//       });
//     }
//   }, [isLoaded]);

//   const handleSelect = (place) => {
//     console.log("Selected place:", place);

//     if (place.geometry && place.geometry.location) {
//       const lat = place.geometry.location.lat();
//       const lng = place.geometry.location.lng();

//       console.log("Latitude:", lat);
//       console.log("Longitude:", lng);
//     }
//   };

//   return (
//     <div>
//       <input
//         ref={autocompleteRef}
//         placeholder="Enter a location"
//         type="text"
//         autoComplete="off"
//       />
//       {selectedPlace && (
//         <div>
//           <p>Latitude: {selectedPlace.geometry.location.lat()}</p>
//           <p>Longitude: {selectedPlace.geometry.location.lng()}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlaceAutocomplete;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

export default function page() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const autocompleteRef = useRef(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAvbj_IHZhiislshQVOq-YVXLNb0T7LgOQ", // Replace with your Google Maps API key
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        autocompleteRef.current
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        setSelectedPlace(place); // Set the selected place
        handleSelect(place); // Callback function to handle selected place
      });
    }
  }, [isLoaded]);

  const handleSelect = (place) => {
    console.log("Selected place:", place);

    if (place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      console.log("Latitude:", lat);
      console.log("Longitude:", lng);
    }
  };

  return (
    <div>
      <input
        ref={autocompleteRef}
        placeholder="Enter a location"
        type="text"
        autoComplete="off"
      />
      {selectedPlace && (
        <div>
          <p>Latitude: {selectedPlace.geometry.location.lat()}</p>
          <p>Longitude: {selectedPlace.geometry.location.lng()}</p>
        </div>
      )}
    </div>
  );
}
