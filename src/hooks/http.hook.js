import { useState, useCallback } from "react";

const useHtttp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState("waiting");

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);
      setProcess('loading');

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
        setProcess('error');
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
    setProcess('loading');
  }, []);

  return { loading, request, error, clearError, process, setProcess};
};

export default useHtttp;
