import { useState } from "react";

export function useCurrentLocation() {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function getUserLocation() {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation(latitude, longitude)
      }, (error) => {
        setError(error)
      })
    } else {
      alert(`Access to user position denied`)
    }
  }


  return {
    userLocation,
    getLocation: getUserLocation,
    error,
    loading
  }
}
