import './List.css';

const List = ({ weatherData }) => {
    return (
        <div className='list'>
            {weatherData && (
                <div>
                    <h2 className='headerList'>{weatherData.name}</h2>
                    <p className='temp'>Temperature: {weatherData.main.temp}</p>
                    <p className='desc'>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default List;
