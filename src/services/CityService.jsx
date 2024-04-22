import axios from "axios";
const cityApiKey = import.meta.env.VITE_CITY_API_KEY;
const VITE_CITY_BASE_URL = 'https://api.api-ninjas.com/v1/city?name=';

const fetchCityData = async (city) => {
    try {
        const response = await axios.get(VITE_CITY_BASE_URL, {
            params: {
                query: city,
            },
            headers: {'X-Api-Key': cityApiKey}
        });
        return response.data;
    } catch (error) {
        console.log('failed to fetch cities data:', error)
        return null;
    }
    
}

export default fetchCityData;