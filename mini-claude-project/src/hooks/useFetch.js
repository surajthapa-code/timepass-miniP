import { useEffect, useState } from "react";

function useFetch({ url, intlState }) {
  const [data, setData] = useState(intlState);
  const [isErr, setIsErr] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch(url);
        const dataset = await res.json();
        setData(dataset);
        setIsErr(false);
        setIsLoading(false);
      } catch {
        setIsErr(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchdata();
  }, [url]);
  return { data, isErr, isLoading };
}

export default useFetch;
