import { useState, useCallback } from "react";

const useHtttp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(true);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return {loading, request, error, clearError};
};

export default useHtttp;
