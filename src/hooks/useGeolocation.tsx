import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState<Record<string, number> | null>(
    null
  );

  useEffect(() => {
    const success = (pos: GeolocationPosition) => {
      console.log(pos, "postiton");
      setGeolocation({
        lat: pos.coords.latitude,
        lon: pos.coords.latitude,
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
