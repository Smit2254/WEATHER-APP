const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7b9728ad45mshdaffa35c2d96414p14bdd5jsn94fbde24891e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {

	const getweather = async (city)=>{

		cityName.innerHTML = response.city
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);

	
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset


}} catch (error) {
	console.error(error);
}

  Submit.addEventListener("click", (e)=>{
	e.preventDefault ()
	getweather(city.value)
  })

  getweather="Delhi"