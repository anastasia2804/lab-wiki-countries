import { useParams } from 'react-router-dom'
import countriesArray from '../countries.json'


function CountyDetails (props) {

const { countryCode } = useParams()

const foundCountry = countriesArray.find((element) => {   
  return element.alpha3Code === countryCode;
});

    return (
      <div class="col-7">
      <h1>{foundCountry.name.official}</h1>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry.name.official} />
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              
              {foundCountry.borders.map((el) => {
                return (
                  <ul>
                    <li>{el}</li>
                  </ul>
                )
              })}
             
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}

export default CountyDetails;