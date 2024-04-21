import Header from "./components/Header/Header";
import './styles/globals.css'
import WeatherApp from "../WeatherApp/WeatherApp";
import 'semantic-ui-css/semantic.min.css'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <WeatherApp />
        </div>
    );
}

export default App;