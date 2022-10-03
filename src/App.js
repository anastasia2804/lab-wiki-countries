import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountyDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import countriesArray from './countries.json'


function App() {

  const [countries] = useState(countriesArray)
  
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Routes>
          <Route path="/:countryCode/country-details" element={<CountyDetails />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
