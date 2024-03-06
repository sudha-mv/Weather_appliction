import React, { useState } from 'react'
import "../style/Api.css"
import { FaLocationDot, FaTemperatureFull } from "react-icons/fa6";

const Api =()=> {
  let api = {
    key: "3fe6b9cac86c2c5841d2296c624ebd3a",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  let [search, setSearch] = useState("");
  let [weather , setWeather] =useState({})

  function locsearch(){
    fetch(`${api.base}?q=${search} &appid=${api.key}`)
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
      setWeather(data)
    })
  }
  return (
    <div className='main'>
      <section >
        <input
          type="text"
          name="name"
          placeholder='search location'
          onChange={e => setSearch(e.target.value)}
        ></input>
       
        <button onClick={locsearch}>search</button>
      </section>
      <section>
        {
        (weather.main !==undefined) ? (
          <div>
            <h2><FaLocationDot/>{weather.name}</h2>
            <h2><FaTemperatureFull/>{weather.main.temp }</h2>
          </div>
        ) : (
            <div>
              <h1>data not found</h1>
              </div>
        )
}
      </section>

    </div>
  );
}

export default Api
