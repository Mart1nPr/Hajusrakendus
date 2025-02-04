weather = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.4&lon=24.7"

fetch(weather)
    .then(response =>{
        console.log(response)
    });
