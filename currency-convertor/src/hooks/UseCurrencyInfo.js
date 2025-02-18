import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        axios
            .get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(response => {
                if (response.data && response.data[currency]) {
                    setData(response.data[currency]);
                } else {
                    setData({});
                }
            })
            .catch(error => {
                console.error("Error fetching currency data:", error);
                setData({}); // Ensure empty object on error to prevent crashes
            });

    }, [currency]);

    return data;
}
