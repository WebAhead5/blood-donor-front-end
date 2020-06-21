const querystring = require('querystring');

// Example urls from Google are: https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBM3rGm854oa_UAkDLZzGFZO5dcFPucQc8


// Dummy Data:
let faridObject = [{
    "DateDonation": "2020-06-18T00:00:00",
    "FromHour": "16:00",
    "ToHour": "19:30",
    "Name": "מתנס ירוחם",
    "City": "ירוחם",
    "Street": "",
    "NumHouse": "",
    "AccountType": ""
}]

let jdObject = [
    {
    "DateDonation": "2020-06-18T00:00:00",
    "FromHour": "16:00",
    "ToHour": "19:30",
    "Name": "מתנס ירוחם",
    "City": "ירוחם",
    "Street": "",
    "NumHouse": "",
    "AccountType": ""
},
{
    "DateDonation": "2020-06-18T00:00:00",
    "FromHour": "16:00",
    "ToHour": "19:30",
    "Name": "Italian hospital",
    "City": "Haifa",
    "Street": "",
    "NumHouse": "",
    "AccountType": ""
},
{
    "DateDonation": "2020-06-18T00:00:00",
    "FromHour": "16:00",
    "ToHour": "19:30",
    "Name": "German Colony",
    "City": "Haifa",
    "Street": "",
    "NumHouse": "",
    "AccountType": ""
}
];


let getGeolocation = async (arrayOfObjects) => {
    let urlStart = "https://maps.googleapis.com/maps/api/geocode/json?"
    let arrayOfReturnedGeolocations = [];
    let counter = 1;

    await arrayOfObjects.forEach(async object =>{
        let params = {
            address: `${object.Name}, ${object.City}`,
            region: "il",
            language: "he",
            key: process.env.REACT_APP_GOOGLE_KEY,
        }
        let queryString = querystring.stringify(params);
        let concat = `${urlStart}${queryString}`;
        console.log("fetching from url:", concat);

        const googleResponse = await fetch(concat)
        const data = await googleResponse.json();

        console.log("inside forEach",data);
        console.log("inside forEach",data.results[0].geometry.location);

        let newObj = {};
        newObj["lon"] = data.results[0].geometry.location.lng;
        newObj["lat"] = data.results[0].geometry.location.lat;
        newObj["address"] = params.address;
        newObj["id"] = counter;

        counter++;
        
        arrayOfReturnedGeolocations.push(newObj)
        
    })

    console.log("arrayOfReturnedGeolocations", arrayOfReturnedGeolocations);  
    return arrayOfReturnedGeolocations
}

export default getGeolocation
