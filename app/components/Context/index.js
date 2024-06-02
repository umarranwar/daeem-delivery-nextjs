"use client";
import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

function GlobalState({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const [nearbyStores, setNearbyStores] = useState([]);
  const [nearbyCount, setNearbyCount] = useState(0); // Counter for nearby stores
  const [filteredStores, setFilteredStores] = useState([]); // State for filtered stores

  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
    setFilteredStores(e.target.value);
  }

  function handleSetFilteredStores(data) {
    setFilteredStores(data);
  }
  function handleSetNearbyStores(data) {
    setNearbyStores(data);
  }
  function handleFilterStores(query) {
    const filtered = nearbyStores.filter((store) =>
      store.storeName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStores(filtered);
  }

  function handleAddToCart(getCurrentItem) {
    let copyCartItems = [...cartItems];
    const indexOfCurrentItem = copyCartItems.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (indexOfCurrentItem === -1) {
      copyCartItems.push(getCurrentItem);
    } else {
      // Set the quantity directly without multiplication
      copyCartItems[indexOfCurrentItem] = {
        ...copyCartItems[indexOfCurrentItem],
        quantity: getCurrentItem.quantity,
      };
    }

    setCartItems(copyCartItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(copyCartItems));
    }
  }

  function removeFromCart(getCurrentId) {
    let copyCartItems = [...cartItems];
    const updatedCartItems = copyCartItems.filter(
      (item) => item.id !== getCurrentId
    );

    setCartItems(updatedCartItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  }

  function increaseQuantity(getCurrentId) {
    let copyCartItems = [...cartItems];
    const updatedCartItems = copyCartItems.map((item) => {
      if (item.id === getCurrentId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  }

  function decreaseQuantity(getCurrentId) {
    let copyCartItems = [...cartItems];
    const updatedCartItems = copyCartItems.map((item) => {
      if (item.id === getCurrentId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  }

  function toggleWishlistItem(getCurrentItem) {
    let copyWishlistItems = [...wishlistItems];
    const indexOfCurrentItem = copyWishlistItems.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (indexOfCurrentItem !== -1) {
      // If the item with the same ID is already in the wishlist, remove it
      copyWishlistItems.splice(indexOfCurrentItem, 1);
    } else {
      // Otherwise, add it to the wishlist
      copyWishlistItems.push(getCurrentItem);
    }

    setWishlistItems(copyWishlistItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlistItems", JSON.stringify(copyWishlistItems));
    }
  }

  function removeFromWishlist(getCurrentId) {
    let copyWishlistItems = [...wishlistItems];
    const updatedWishlistItems = copyWishlistItems.filter(
      (item) => item.id !== getCurrentId
    );

    setWishlistItems(updatedWishlistItems);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(updatedWishlistItems)
      );
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
      setWishlistItems(JSON.parse(localStorage.getItem("wishlistItems")) || []);
    }
  }, [setCartItems, setWishlistItems]);

  return (
    <Context.Provider
      value={{
        cartItems,
        handleAddToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        wishlistItems,
        toggleWishlistItem,
        removeFromWishlist,
        handleSetFilteredStores,
        filteredStores,
        handleSetNearbyStores,
        nearbyStores,
        handleFilterStores,
        handleSearchChange,
        searchQuery,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default GlobalState;
