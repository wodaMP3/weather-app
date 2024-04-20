
// eslint-disable-next-line react/prop-types
const WeatherIcon = ({ weatherCode }) => {

  const getWeatherIcon = (weatherCode) => {
    console.log('code', weatherCode)
    switch (weatherCode) {
      case 800:
        return 'wi-day-sunny'; // Ясно
      case 801:
      case 802:
        return 'wi-day-cloudy'; // Облачно
      case 803:
      case 804:
        return 'wi-cloudy'; // Пасмурно
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
        return 'wi-rain'; // Дождь
        case 741:
            return 'wi-fog'; // Туман
      default:
        return 'wi-day-sunny';
    }
  };

  return (
    <div className="weather-icon">
      <i className={`wi ${getWeatherIcon(weatherCode)}`}></i>
    </div>
  );
  
};


export default WeatherIcon;
