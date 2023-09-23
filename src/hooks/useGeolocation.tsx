import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState<Record<string, number> | null>(
    null,
  );

  useEffect(() => {
    const success = (pos: GeolocationPosition) => {
      setGeolocation({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    };

    const error = (error: unknown) => {
      console.log("Error getting geolocation:", error);
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return geolocation;
};

export default useGeolocation;
