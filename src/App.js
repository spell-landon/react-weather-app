// stylesheet
import './App.css';
// components
import Header from './components/Header/Header';
import NoResult from './components/NoResult/NoResult';
import Result from './components/Result/Result';
// dependencies
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const [show, setShow] = useState(false);
    // useEffect(() => {
    //   fetch(
    //     `http://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=${searchOptions.key}`
    //   )
    //     .then((res) => res.json())
    //     .then((res) => {
    //       setData(res);
    //       console.log(res);
    //       setLastSearch(searchString);
    //       setSearchString('');
    //     })
    //     .catch((err) => {
    //       console.error('Something went wrong...', err);
    //     })
    //     .finally(() => {
    //       return;
    //     });
    // }, []);

  const searchOptions = {
    key: process.env.REACT_APP_WEATHER_KEY,
    api: `http://api.openweathermap.org/data/2.5/weather?q=${searchString}&units=imperial&appid=`,
  };


  function getWeather() {
    const url = `${searchOptions.api}${searchOptions.key}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
        setLastSearch(searchString);
        setSearchString('');
      })
      .catch((err) => {
        console.error('Something went wrong...', err);
      })
      .finally(() => {
        return;
      });
  }
  function handleChange(e) {
    setSearchString(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getWeather(searchString);
    setShow(true);
  }



  return (
    <div className='App'>
      <header>
        <Header
          data={data}
          setData={setData}
          searchString={searchString}
          setSearchString={setSearchString}
          lastSearch={lastSearch}
          setLastSearch={setLastSearch}
          show={show}
          setShow={setShow}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </header>
      <main>
        {/* <Routes>
          <Route index path='/' element={<NoResult />} />
          <Route
            path={`/${data.name}`}
            element={
              <Result
                data={data}
                setData={setData}
                searchString={searchString}
                setSearchString={setSearchString}
                lastSearch={lastSearch}
                setLastSearch={setLastSearch}
                show={show}
                setShow={setShow}
              />
            }
          />
        </Routes> */}
        <Result
          data={data}
          setData={setData}
          searchString={searchString}
          setSearchString={setSearchString}
          lastSearch={lastSearch}
          setLastSearch={setLastSearch}
          show={show}
          setShow={setShow}
        />
      </main>
    </div>
  );
}

export default App;
