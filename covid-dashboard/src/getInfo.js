// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export async function getInfo(url) {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const useData = async () => {
//       // const res = await fetch(url);
//       // const info = await res.json();
//       // const info = await axios.get(url);

//       axios.get(url).then(
//         info => setData(info)
//     )
//     };
//     useData();
//   }, [url]);
//   console.log('data', data)
//   return data
// }

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




