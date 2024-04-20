import './List.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

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
                <Card.Content>
                    <Card.Header>{weatherData.name}</Card.Header>
                    <p className='temp' style={{ color: textColor(weatherData.main.temp)}}>Temperature: {weatherData.main.temp}&deg;C</p>
                    <p className='desc'>Weather: {weatherData.weather[0].main}</p>
                    <p className='humidity'>Humidity: {weatherData.main.humidity} %</p>
                    <div className='flex'><p>Day: {moment().format('dddd')}</p></div>
                    <p className='date'>Date: {moment().format('LL')}</p>
                </Card.Content>
            )}
        </Card>
    );
}

export default List;
