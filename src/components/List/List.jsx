/* eslint-disable react/prop-types */
import 'weather-icons/css/weather-icons.min.css';

import './List.css';
import moment from 'moment';
import { Card } from 'semantic-ui-react';
import WeatherIcon from '../WeatherIcons/WeatherIcons';

const List = ({ weatherData }) => {
    
    const textColor = (num) =>  {
        let color
        switch (true) {
            case num > 15:
                color = 'red';
                break;
            case num >0:
                color = '#F9C262';
                break;
            case num <= 0:
                color = 'blue';
                break;
                default:
                    color = 'black';
            }
            return color;
    }

    return (
        <Card className='list'>
            {weatherData && (
                <div className='content'>
                    <div className='h-header'>
                        <h1 className='list-header'>{weatherData.name}</h1>
                    </div>
                    <p className='temp' style={{ color: textColor(weatherData.main.temp)}}>{Math.round(weatherData.main.temp)}&deg;C</p>
                    <p className='desc'>{weatherData.weather[0].main}</p>
                    <p className='humidity'>Humidity: {weatherData.main.humidity} %</p>
                    <div className='flex'><p>{moment().format('dddd')}</p></div>
                    <p className='date'>{moment().format('LL')}</p>
                    <WeatherIcon weatherCode={weatherData.weather[0].id} />
                </div>
            )}
        </Card>
    );
}

export default List;
