const querystring = require('querystring');

let getGeolocation = async (arrayOfObjects) => {
    let urlStart = "https://maps.googleapis.com/maps/api/geocode/json?"
    let arrayOfReturnedGeolocations = [];
    let counter = 1;

    for (let object of arrayOfObjects) {

        let params = {
            address: `${object.Name}, ${object.City}`,
            region: "il",
            language: "he",
            key: process.env.REACT_APP_GOOGLE_KEY,
        }
        let queryString = querystring.stringify(params);
        let concat = `${urlStart}${queryString}`;

        const googleResponse = await fetch(concat)
        const data = await googleResponse.json();

        if (data.results.length > 0) {

            let newObj = {};
            newObj["lon"] = data.results[0].geometry.location.lng;
            newObj["lat"] = data.results[0].geometry.location.lat;
            newObj["address"] = params.address;
            newObj["id"] = counter;
            newObj["opens"] = object.FromHour;
            newObj["closes"] = object.ToHour;
            newObj["dateDonation"] = new Date(object.DateDonation);

            counter++;
            arrayOfReturnedGeolocations = [...arrayOfReturnedGeolocations, newObj]
        }
        else {
            console.error("error from Google API:", data.error_message)
        }
    }

    if (arrayOfReturnedGeolocations.length > 0) {
        return arrayOfReturnedGeolocations
    }
    else {
        console.error("Google API return no results, could be an error with API key");
    }
}

export default getGeolocation