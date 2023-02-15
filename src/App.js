import React, { useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [city, setCity] = useState('');
  const [isReady, setReady] = useState('');

  React.useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=Metric&APIkey=2cf4011d957f2128e1c0340018c61fc6')
      .then(result => result.json())
      .then(jsonresult => {
        setTemp(jsonresult.main.temp);
        setCity(jsonresult.name);
        setDesc(jsonresult.weather[0].main);
        setIcon(jsonresult.weather[0].icon);
        setReady(true);
      })
      .catch(err => console.error(err))
  }, []);

  if (isReady) {
    return (
      <div className="App">
        <h3>Город: {city}</h3>
        <p>Температура: {temp} °C</p>
        <p>Описание: {desc}</p>
        <img src={'http://openweathermap.org/img/wn/'+icon+'@2x.png'}
        alt="Weather icon" />
      </div>
    );
  }
  else {
    return <div>Loading...</div>
  }


}

export default App;
