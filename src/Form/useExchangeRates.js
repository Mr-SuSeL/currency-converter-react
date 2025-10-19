import { useEffect, useState } from "react";

import { setupCache } from 'axios-cache-interceptor';
import axios from 'axios';

const apiLink = "https://api.exchangerate-api.com/v4/latest/PLN";

// Konfigurujemy instancję axios z cache'em raz na zewnątrz hooka, by nie tworzyć przy każdym renderze
const axiosInstance = setupCache(axios);

export const useExchangeRates = () => {
    const [rates, setRates] = useState({
        state: "loading",
        data: null,
        error: null,
    });

    useEffect(() => {
        async function fetchWithCache() {
            try {
                // Pobieramy dane z API używając cache
                const response = await axiosInstance.get(apiLink);
                setRates({
                    state: "loaded",
                    data: response.data,
                    error: null,
                });
            } catch (error) {
                setRates({
                    state: "error",
                    data: null,
                    error: error,
                });
            }
        }

        fetchWithCache();
    }, []);

    return rates;

}