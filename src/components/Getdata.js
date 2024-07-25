import React from 'react';
import './Getdata.css';

const Getdata = ({ data }) => {
    if (!data || !data.location || !data.current) {
        return null;
    }

    const { location, current } = data;

    return (
        <div className="container">
            <div className="data_div">
                <div className="grid-container">
                    <div className="left-column">
                        <h3>Weather Information for {location.name}, {location.region}, {location.country}</h3>
                        <p>Date & Time: {location.localtime || 'N/A'}</p>
                        <p>Temperature: {current.temp_c}°C ({current.temp_f}°F)</p>
                        <p>Condition: {current.condition.text}</p>
                        <p>Wind: {current.wind_kph} kph ({current.wind_mph} mph) {current.wind_dir}</p>
                        <p>Humidity: {current.humidity}%</p>
                    </div>
                    <div className="right-column">
                        <p>Pressure: {current.pressure_mb} mb ({current.pressure_in} in)</p>
                        <p>Precipitation: {current.precip_mm} mm ({current.precip_in} in)</p>
                        <p>Visibility: {current.vis_km} km ({current.vis_miles} miles)</p>
                        <p>UV Index: {current.uv}</p>
                        <p>Feels Like: {current.feelslike_c}°C ({current.feelslike_f}°F)</p>
                        <p>Wind Chill: {current.windchill_c}°C ({current.windchill_f}°F)</p>
                        <p>Heat Index: {current.heatindex_c}°C ({current.heatindex_f}°F)</p>
                        <p>Dew Point: {current.dewpoint_c}°C ({current.dewpoint_f}°F)</p>
                        <p>Gust: {current.gust_kph} kph ({current.gust_mph} mph)</p>
                        <img src={`http:${current.condition.icon}`} alt={current.condition.text} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Getdata;