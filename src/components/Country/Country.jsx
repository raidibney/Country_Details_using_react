import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handlevisitedcountries,visitedflags}) => {
    console.log(country.name.common)
    console.log(handlevisitedcountries)
    const [visited , setVisited]= useState(false);
    const handleclicked =()=>{


        setVisited(visited?false:true);
        handlevisitedcountries(country);
    }
    return (
        <div className={`country ${visited ? 'country-visited': 'not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area>300000 ? '(Big Country)':'(Small Country)'}</p>
            <p>Capital:{country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <button onClick={ handleclicked}>
                {
                    visited? 'visited':'not visited'
                }
            </button>
            <button onClick={() => visitedflags(country.flags.png)}>
  Visited flag
</button>
        </div>
    );
};

export default Country;