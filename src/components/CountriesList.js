import { Link } from 'react-router-dom';
import countriesArray from '../countries.json'

function CountriesList () {


    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                   
                    {countriesArray.map((singleCountry) => {
                        return (
                            <Link to={`${singleCountry.alpha3Code}/country-details`}>
                            <p class="list-group-item list-group-item-action">{singleCountry.name.official}</p>
                            </Link>
                        )
                    })}
                  
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CountriesList;