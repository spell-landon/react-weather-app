import React from 'react';
import css from './FiveDay.module.css';
import { useState, useEffect } from 'react';
import NoResult from '../NoResult/NoResult';

function FiveDay({ searchOptions, searchString, lastSearch, data }) {
  const [fiveData, setFiveData] = useState('');
  const options = {
    key: process.env.REACT_APP_WEATHER_KEY,
  };

  function getFive() {
    const url = `api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${searchOptions.key}`;
    console.log(url);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${options.key}`
    )
      .then((res) => res.json())
      .then((res) => {
        setFiveData(res);
        console.log(fiveData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        return;
      });
    console.log(data);
  }
  function fiveDayInfo() {
    return (
      <div className={css.five_page}>
        <h1>FiveDay Data</h1>
        <p>{fiveData}</p>
      </div>
    );
  }
  useEffect(() => {
    if (data.length === 0) {
      return <NoResult />;
    }
  }, []);
  return <div>{fiveDayInfo()}</div>;
}

export default FiveDay;
