import Cloudy from './icons/cloudySun.svg' 
import Rainy from './icons/rain.svg';
import Sunny from './icons/sun.svg';


const WeatherIcon = ({ weahterCode }) => {

    const getWeatherIcon = (weahterCode) => {
        switch (weahterCode) {
            case 800:
                return Sunny; // Ясно
            case 801:
            case 802:
                return Cloudy; // Облачно
            case 803:
            case 804:
                return Cloudy; // Пасмурно
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
                return Rainy; // Дождь
            default:
                return Sunny;
        }
    }
}

export default WeatherIcon;