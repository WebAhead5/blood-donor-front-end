const querystring = require('querystring');

// example https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY


let getUserGeolocation = async (arrayOfObjects) => {
    let urlStart = "https://www.googleapis.com/geolocation/v1/geolocate?"

    let params = {
        key: process.env.REACT_APP_GOOGLE_KEY
    }

    let queryString = querystring.stringify(params);
    let concat = `${urlStart}${queryString}`;
    console.log("fetching from url:", concat);

    const googleResponse = await fetch(concat, { method: 'POST' })
    const data = await googleResponse.json();

    console.log("get userGeoLocation data:", data);
    if(data.error){
        console.error("Error message from Google API call for user Geolocation: ", data.error.message);
        return {error: ""}
    }
    else return data
}

export default getUserGeolocation
