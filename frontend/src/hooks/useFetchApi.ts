import { useState } from 'react';
import axios from 'axios';

async function useFetchApi(url: string) {
   const [loading, setLoading] = useState<boolean>(false);
   const [fetched, setFetched] = useState<boolean>(false);
   const [data, setData] = useState();

   setLoading(true);
   const res = await axios.get(`http://localhost:5000/api${url}`, {
      headers: {
         Accept: 'application/json',
      },
   });
   setData(res.data);
   setFetched(true);
   setLoading(false);

   return { loading, fetched, data, setData };
}

export default useFetchApi;
