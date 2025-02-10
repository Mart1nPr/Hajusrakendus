fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.4&lon=24.7")
  .then(response => response.json())
  .then(data => {
    const currentTime = data.properties.timeseries[0];
    const airTemp = currentTime.data.instant.details.air_temperature;
    console.log(currentTime.time + " " + airTemp + "C");
  });
