const querystring = require('querystring');

// Example urls from MapBox are: "/geocoding/v5/{endpoint}/{search_text}.json"; or "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianJkNjU2IiwiYSI6ImNrYmh4azU5bDA5dnYycm81OHVqN3BzeHoifQ.U_d4TWgxve_kqekKbQGORg"


// Create URL
let urlStart = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
let params = {
    country: "il",
    access_token: process.env.REACT_APP_MAPBOX_PUBLIC,
    limit: 1
}
let locationWords = "Tel Aviv"
let queryString = querystring.stringify(params);
let concat = `${urlStart}${encodeURI(locationWords)}.json?${queryString}`

// Make API call
export async function fetchCoords() {

    const mapBoxResponse = await fetch(concat)
    const data = await mapBoxResponse.json();
    let apiResponseObj = data.features[0].center;
    let returnObject = {}
    returnObject['lon'] = apiResponseObj[0];
    returnObject['lat'] = apiResponseObj[1];

    return returnObject;
}

// Dummy data for early development
export let dummyLocationsObject = [
    { locationId: 1, lat: 32.710, lon: 34.920 },
    { locationId: 2, lat: 32.720, lon: 34.930 },
    { locationId: 3, lat: 32.730, lon: 34.920 },
    { locationId: 4, lat: 32.740, lon: 34.940 },
    { locationId: 5, lat: 32.750, lon: 34.970 },
    { locationId: 6, lat: 32.760, lon: 34.960 },
    { locationId: 7, lat: 32.770, lon: 34.950 },
    { locationId: 8, lat: 32.780, lon: 34.980 },
    { locationId: 9, lat: 32.790, lon: 34.990 },
    { locationId: 10, lat: 32.800, lon: 34.999 }
]
