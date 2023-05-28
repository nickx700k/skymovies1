import async from "async";
import React, { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [populer, setPopuler] = useState(null);
  const [now, setNow] = useState(null);
  const [top, setTop] = useState(null);
  const [up, setUp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const respose = await fetch(api);
        if (!respose.ok) {
          throw new Error(respose.statusText);
        }
        const result = await respose.json();
        setLoading(false);
        setPopuler(result.results);
        setNow(result.results);
        setTop(result.results);
        setUp(result.results);
        setError(null);
      } catch (err) {
        if (err) {
          setError("The Fetch Aborted");
        } else {
          setLoading(false);
          setError("The Fetch Is Failed");
        }
      }
    };
    fetchData();
  }, [api]);

  return { populer, top, up, now, loading, error };
};
