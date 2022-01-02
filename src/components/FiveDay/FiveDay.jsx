import React from 'react';
import css from './FiveDay.module.css'
import { useState, useEffect } from 'react';

function FiveDay({ searchOptions, searchString, lastSearch, data }) {
  const [fiveData, setFiveData] = useState('');
  function getFive() {
    const url = `api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${searchOptions.key}`;
    console.log(url);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${searchOptions}`
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
  useEffect(() => {
    if (data.length !== 0) {
      getFive();
    }
  }, []);
  return <div className={css.five_page}>
      <h1>FiveDay Data</h1>
  </div>;
}

export default FiveDay;
