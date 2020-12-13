import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const dataArray = await res.json();
      setData(dataArray);
    };

    fetchData();
  }, [url]);

  return data;
};




