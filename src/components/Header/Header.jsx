import React from 'react';
import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



function Header({
  data,
  setData,
  searchString,
  setSearchString,
  lastSearch,
  setLastSearch,
  show,
  setShow,
  handleChange,
  handleSubmit,
  cityName,
}) {


  return (
    <div className={css.container}>
      <nav className={css.navigation}>
        <h1 className={css.title}>
          <Link to='/' className={css.link}>ReactWeather</Link>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            id='search'
            className={css.search}
            placeholder='Search City Name...'
            onChange={handleChange}
            value={searchString}
          />

<input type='submit' value='Search' className={css.search_btn} />
        </form>
      </nav>
    </div>
  );
}

export default Header;
