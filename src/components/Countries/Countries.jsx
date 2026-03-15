import { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriespromise }) => {

  const [visitedcountries, setVisitedcountries] = useState([]);
  const [visitedflags, setVisitedflags] = useState([]);

  const handlevisitedcountries = (country) => {
    console.log('clicked', country);
    const newvisitedcountries = [...visitedcountries, country];
    setVisitedcountries(newvisitedcountries);
  }

  // flag adding function
  const handleVisitedflags = (flag) => {
    const newvisitedflags = [...visitedflags, flag];
    setVisitedflags(newvisitedflags);
  }

  const countriesData = use(countriespromise);
  const countries = countriesData?.countries || [];

  console.log(countries);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>hello from country {countries.length}</h1>
      <h2>Total country visited : {visitedcountries.length}</h2>
       <h4>total flags visited:{visitedflags.length}</h4>
      <div className='countries'>
        {
          countries.map(country => <Country
            key={country.cca3}
            country={country}
            handlevisitedcountries={handlevisitedcountries}
            visitedflags={handleVisitedflags}
          >
          </Country>)
        }
      </div>
      
     <div>
  {
    visitedflags.map((flag, index) => (
      <img key={index} src={flag} alt="flag" width="80px" />
    ))
  }
</div>
    </div>
  );
};

export default Countries;