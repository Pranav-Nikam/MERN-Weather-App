import React, { useState } from 'react';
import './Form.css'; // Import CSS for Form component styling
import Getdata from './Getdata'; // Assuming Getdata component is correctly implemented
import Alert from './Alert';
import Spinner from './Spinner';

const Form = () => {
    const [CityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);
    const [ShowSpinner, SetSpinner] = useState(false);

    const handleCityNameChange = (event) => {
        setCityName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = `http://api.weatherapi.com/v1/current.json?key=84bf3ee7d1cc43828cd80506240707&q=${CityName}&aqi=no`;

        try {
            SetSpinner(true);
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
                setError(false);
            } else {
                setError(true);
                setWeatherData(null);
                var utterance = new SpeechSynthesisUtterance("Please! Enter Valid Location.");
                window.speechSynthesis.speak(utterance);
            }
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
            setError(true);
            setWeatherData(null);
        }
        finally {
            SetSpinner(false);
            setTimeout(function () {
                setError(false);
            }, 5000);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="weather-form" style={{ border: '2px solid black', padding: '15px', borderRadius: '20px', marginTop: '15px' }}>
                <div className="mb-3">
                    <label htmlFor="inputCity" className="form-label">Enter Location :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder='eg.Pune'
                        value={CityName}
                        onChange={handleCityNameChange}
                    />
                </div>
                <button type="submit" className="btn btn-outline-dark">Submit</button>
            </form>

            {ShowSpinner && <Spinner />}
            {error && <Alert />}
            {weatherData && !error && <Getdata data={weatherData} />}
        </div>
    );
};

export default Form;
