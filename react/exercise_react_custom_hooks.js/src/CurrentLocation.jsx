import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
  const { location, error, loading, getLocation } = useCurrentLocation();

  return (
    <div>
      <h1>Your Current Location</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      <button onClick={getLocation}>Get Current Location</button>
    </div>
  );
};