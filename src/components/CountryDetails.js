import { useParams } from 'react-router-dom'
import countriesArray from '../countries.json'


function CountyDetails (props) {

const { countryCode } =useParams()
console.log(countryCode)

const foundCountry = countriesArray.find((singleCountry) => {  
    return singleCountry.alpha3Code === countryCode
  });


    return <p>country details page</p>
}

export default CountyDetails;