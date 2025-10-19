import { useEffect, useState } from "react";

import { setupCache } from 'axios-cache-interceptor';
import axios from 'axios';

const API_KEY = "cur_live_Y1a6Rk39CYILaX2ixEHYlW5zRmNVCovqNbJZryIi";
const apiLink = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=PLN`;

// Konfigurujemy instancję axios z cache'em raz na zewnątrz hooka, by nie tworzyć przy każdym renderze
const axiosInstance = setupCache(axios);

export const useExchangeRates = () => {
    const [rates, setRates] = useState({
        state: "loading",
        data: null,
        error: null,
    });

    useEffect(() => {
        const fetchWithCache = async () => {
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