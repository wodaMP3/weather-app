import './List.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const List = ({ weatherData }) => {
    return (
        <Card className='list'>
            {weatherData && (
                <Card.Content>
                    <Card.Header className='header'>{weatherData.name}</Card.Header>
                    <p className='temp'>Temperature: {weatherData.main.temp}&deg;C</p>
                    <p className='desc'>Weather: {weatherData.weather[0].main}</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <div className='flex'><p>Day: {moment().format('dddd')}</p></div>
                    <p>Date: {moment().format('LL')}</p>
                </Card.Content>
            )}
        </Card>
    );
}

export default List;
