const querystring = require('querystring');

// Example urls from MapBox are: "/geocoding/v5/{endpoint}/{search_text}.json"; or "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianJkNjU2IiwiYSI6ImNrYmh4azU5bDA5dnYycm81OHVqN3BzeHoifQ.U_d4TWgxve_kqekKbQGORg"

// Dummy Data:
let faridObject = {
    "DateDonation": "2020-06-18T00:00:00",
    "FromHour": "16:00",
    "ToHour": "19:30",
    "Name": "מתנס ירוחם",
    "City": "ירוחם",
    "Street": "",
    "NumHouse": "",
    "AccountType": ""
}

//   מתנס ירוחם
// param might be necessary: language: "he"


// Create URL
let urlStart = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
let params = {
    country: "il",
    access_token: process.env.REACT_APP_MAPBOX_PUBLIC,
    limit: 1
}
let locationWords = "Tel Aviv"
let queryString = querystring.stringify(params);
let concat = `${urlStart}${encodeURI(`${faridObject["Name"]}`)}.json?${queryString}`

// Make API call
export async function fetchCoords() {
    console.log("fetching from url:", concat);
    

    const mapBoxResponse = await fetch(concat)
    const data = await mapBoxResponse.json();
    let apiResponseObj = data.features[0];
    let returnObject = {}
    returnObject['locationId'] = 3
    returnObject['lat'] = 32.73;
    returnObject['lon'] = 34.91;
    // returnObject['lat'] = apiResponseObj.center[1];
    // returnObject['lon'] = apiResponseObj.center[0];
    // returnObject['place name'] = apiResponseObj.place_name; 
    // returnObject['restOfObj'] = data.features[0]
    console.log("apiResponse,",apiResponseObj);
    

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
