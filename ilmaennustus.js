fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.4&lon=24.7")
  .then(response => response.json())
  .then(data => {

    const timeSeries = data.properties.timeseries;

    for (let i = 0; i < 3; i++) {
      const entry = timeSeries[i];
      const time = entry.time;
      const airTemp = entry.data.instant.details.air_temperature;
      console.log(time + " " + airTemp);
    }

  });
