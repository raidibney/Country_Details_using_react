import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country.name.common)

    const handleclicked =()=>{
        console.log('clicked')
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area>300000 ? '(Big Country)':'(Small Country)'}</p>
            <p>Capital:{country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <button onClick={ handleclicked}>Not Visited</button>
        </div>
    );
};

export default Country;