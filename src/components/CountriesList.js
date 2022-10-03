import { Link } from 'react-router-dom';
import countriesArray from '../countries.json'

function CountriesList (props) {

    console.log(props)


    return (
        <div className="col-5">
            <div className="list-group">
            
            {props.countries.map((singleCountry) => {
                return (
                    <Link to={`${singleCountry.alpha3Code}/country-details`}>
                    <p class="list-group-item list-group-item-action">{singleCountry.name.official}</p>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default CountriesList;