import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLaoding(true);
    axios
      .get(`https://dummyjson.com/${url}`)
      .then((res) => setData(res.data.products))
      .catch((error) => setError(error))
      .finally(() => setLaoding(false));
  }, []);

  return { loading, error, data };
};
