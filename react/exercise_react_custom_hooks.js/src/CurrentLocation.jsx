import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
  const { userLocation, error, loading, getLocation } = useCurrentLocation();

  function showLocation () {
    getLocation()
  }

  return (
    <div>
      <div> {error && <h1>Error</h1>}</div>
      <div> {loading && <h1>Loading...</h1>}</div>

      <div>
        {userLocation && (
          <div>
            <button onClick={showLocation}>Show User Location</button>
            <h1>User Location:</h1>
            <p>User latitude: {userLocation.latitude}</p>
            <p>User longitude: {userLocation.longitude}</p>
          </div>
        )}
      </div>
    </div>
  );
}
