import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://68dd3ea27cd1948060acf9af.mockapi.io/zon-uz/${url}`)
            .then((res) => setData(res.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url]);  

    return { loading, error, data };
};