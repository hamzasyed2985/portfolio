import React, { useState, useEffect } from 'react';

const styles = {
    
    card: 'bg-[#d7fbff] shadow-md rounded-lg p-6 max-w-sm w-full',
    heading: 'text-2xl font-bold mb-4 text-[#0096bd]',
    weatherInfo: 'text-md font-semibold mb-2',
    temperature: 'text-4xl font-bold mb-1 text-[#0096bd]',
    icon: 'w-16 h-16',
    input: 'p-2 border border-gray-300 rounded mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out',
    button: 'bg-[#0096bd] text-white p-2 rounded w-full hover:bg-[#00586e] focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out',
};

const apiKey = "2d059fa45d3364cfd3aeb273fc15bba4";

const Weather = () => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("Karachi");
    const [citiesList, setCitiesList] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    const load = () => {
        fetch('/worldcities.csv')//Files in public directory can be accessed directly.
            .then(response => response.text())
            .then(responseText => {
                
                const newTextArray = responseText.replace(/\r/g, '').split('\n');
                setCitiesList([...citiesList, ...newTextArray]);
            });
    };

    async function fetchData() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=metric&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error("Couldn't fetch data");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => { fetchData(); load(); }, [])

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setCity(inputValue);
        if (inputValue.length > 2) {
            const filtered = citiesList.filter(cityname =>
                cityname.toLowerCase().startsWith(inputValue.toLowerCase())
            )
            setFilteredCities(filtered);
        } else {
            setFilteredCities([]);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }
    console.log(citiesList)
    return (
        <div >
            {data ? (
                <div className={styles.card}>
                    <h1 className={styles.heading}>Weather in {data.name}, {data.sys.country}</h1>
                    <div className="flex items-center">
                        <img
                            className={styles.icon}
                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                            alt={data.weather[0].description}
                        />
                        <div>
                            <p className={styles.temperature}>{data.main.temp}°C</p>
                        </div>
                    </div>

                    <h2 className={styles.weatherInfo}>{data.weather[0].main}</h2>
                    <p className={styles.weatherInfo}>{data.weather[0].description.toUpperCase()}</p>
                    <p className={styles.weatherInfo}>Feels Like: {data.main.feels_like}°C</p>
                    <p className={styles.weatherInfo}>Humidity: {data.main.humidity}%</p>
                    <p className={styles.weatherInfo}>Wind Speed: {data.wind.speed} m/s</p>
                    <input list='cities' className={styles.input} type="text" onChange={handleInput} />
                    <datalist id="cities">
                        {filteredCities.map((cityname, index) => (
                            <option key={index} value={cityname}>{cityname}</option>
                        ))}
                    </datalist>
                    <button className={styles.button} type='submit' onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Weather;
