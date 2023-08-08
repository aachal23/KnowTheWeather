const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5e506f8b68mshd8cd9307bc5eed5p15287ejsn03c4f04ced30",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather =(city)=>{
    
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
).then((response) => response.json())
.then((response) => {
    console.log(response)
    cityName.innerHTML=city
    cloud_pct.innerHTML=response.cloud_pct
    temp.innerHTML=response.temp
    temp2.innerHTML=response.temp
    feels_like.innerHTML=response.feels_like
    humidity.innerHTML=response.humidity
    humidity2.innerHTML=response.humidity
    min_temp.innerHTML=response.min_temp
    max_temp.innerHTML=response.max_temp 
    wind_speed.innerHTML=response.wind_speed 
    wind_speed2.innerHTML=response.wind_speed 
    wind_degrees.innerHTML=response.wind_degrees
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
  
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then(response => {console.log(response)
        cloud_pctsh.innerHTML=response.cloud_pct
    tempsh.innerHTML=response.temp
    feelssh_like.innerHTML=response.feels_like
    humiditysh.innerHTML=response.humidity
    min_tempsh.innerHTML=response.min_temp
    max_tempsh.innerHTML=response.max_temp 
    wind_speedsh.innerHTML=response.wind_speed 
    wind_degreessh.innerHTML=response.wind_degrees
    sunrisesh.innerHTML=response.sunrise
    sunsetsh.innerHTML=response.sunset })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then(response => {console.log(response)
        cloud_pctb.innerHTML=response.cloud_pct
    tempb.innerHTML=response.temp
    feels_likeb.innerHTML=response.feels_like
    humidityb.innerHTML=response.humidity
    min_tempb.innerHTML=response.min_temp
    max_tempb.innerHTML=response.max_temp 
    wind_speedb.innerHTML=response.wind_speed 
    wind_degreesb.innerHTML=response.wind_degrees
    sunriseb.innerHTML=response.sunrise
    sunsetb.innerHTML=response.sunset })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {console.log(response)
        cloud_pctm.innerHTML=response.cloud_pct
    tempm.innerHTML=response.temp
    feels_likem.innerHTML=response.feels_like
    humiditym.innerHTML=response.humidity
    min_tempm.innerHTML=response.min_temp
    max_tempm.innerHTML=response.max_temp 
    wind_speedm.innerHTML=response.wind_speed 
    wind_degreesm.innerHTML=response.wind_degrees
    sunrisem.innerHTML=response.sunrise
    sunsetm.innerHTML=response.sunset })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {console.log(response)
        cloud_pctk.innerHTML=response.cloud_pct
    tempk.innerHTML=response.temp
    feels_likek.innerHTML=response.feels_like
    humidityk.innerHTML=response.humidity
    min_tempk.innerHTML=response.min_temp
    max_tempk.innerHTML=response.max_temp 
    wind_speedk.innerHTML=response.wind_speed 
    wind_degreesk.innerHTML=response.wind_degrees
    sunrisek.innerHTML=response.sunrise
    sunsetk.innerHTML=response.sunset })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then(response => {console.log(response)
        cloud_pctl.innerHTML=response.cloud_pct
    templ.innerHTML=response.temp
    feels_likel.innerHTML=response.feels_like
    humidityl.innerHTML=response.humidity
    min_templ.innerHTML=response.min_temp
    max_templ.innerHTML=response.max_temp 
    wind_speedl.innerHTML=response.wind_speed 
    wind_degreesl.innerHTML=response.wind_degrees
    sunrisel.innerHTML=response.sunrise
    sunsetl.innerHTML=response.sunset })
	.catch(err => console.error(err));