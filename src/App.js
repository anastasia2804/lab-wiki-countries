import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountyDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />}/>
        <Route path="/:id/country-details" element={<CountyDetails />}/>
      </Routes>

      
      
    </div>
  );
}

export default App;
