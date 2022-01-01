import React from 'react';
import css from './Result.module.css';
import { useState, useEffect } from 'react/cjs/react.development';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import NoResult from '../NoResult/NoResult';

function Result({
  data,
  setData,
  searchString,
  setSearchString,
  lastSearch,
  setLastSearch,
  show,
  setShow,
}) {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let today = `${month}/${day}/${year}`;
  const [icon, setIcon] = useState('');
  function getIcon() {
    const url = `http://openweathermap.org/img/wn/${data.weather['0'].icon}@2x.png`;
    fetch(url)
      .then((res) => {
        setIcon(res.url);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        return;
      });
  }
  useEffect(() => {
    if (data.length !== 0) {
      getIcon();
    }
  }, [data]);
  function loadWeather() {
    //   getIcon();
    if (data.length === 0) {
      return <NoResult />;
    }
    if (data.length !== 0) {
      return (
        <div className={css.page}>
          <div className={css.container}>
            <p>{today}</p>
            <div className={css.title}>
              <img src={icon} alt={data.weather['0'].description} />
              <h1>{data.name}</h1>
            </div>
            <div className={css.conditions}>
              <h3>Conditions:</h3>
              <p>{data.weather['0'].main}</p>
            </div>
            <div className={css.currentTemp}>
              <h3>Current Temp:</h3>
              <p>{data.main.temp}°F</p>
            </div>
            <div className={css.feelsLike}>
              <h3>Feels Like:</h3>
              <p>{data.main.feels_like}°F</p>
            </div>
            <div className={css.tempHigh}>
              <h3>Temp High:</h3>
              <p>{data.main.temp_max}°F</p>
            </div>
            <div className={css.tempLow}>
              <h3>Temp Low:</h3>
              <p>{data.main.temp_min}°F</p>
            </div>
            <div className={css.humidity}>
              <h3>Humidity:</h3>
              <p>{data.main.humidity}%</p>
            </div>
          </div>
          {/* <h5>5-day Forecast</h5> */}
        </div>
      );
    }
  }
  return <div className={css.result_container}>{loadWeather()}</div>;
}

export default Result;
