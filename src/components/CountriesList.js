import { Link } from 'react-router-dom';
import countriesArray from '../countries.json';

function CountriesList (props) {

    console.log(props)


    return (
        <div className="col-5">
            <div className="list-group">
            {props.countries.map((singleCountry) => {
                return (
                    <Link to={`${singleCountry.alpha3Code}/country-details`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${singleCountry.alpha2Code.toLowerCase()}.png`} alt={singleCountry.name.official} />
                    <p class="list-group-item list-group-item-action">{singleCountry.name.official}</p>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default CountriesList;