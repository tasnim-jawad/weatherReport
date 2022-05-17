
document.getElementById('search').addEventListener('click',function(){
    getCityNmae=()=>{
        return document.getElementById('inputCityName').value;
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ getCityNmae() +'&appid=3bbcb5f78928df1ef98f84e9c6b2be01&units=metric')
        .then(response => response.json())
        .then(json => getWeather(json))
        .catch(error => alert('city name is not currect'))

    getWeather = weathers =>{
        let getTemp = weathers.main.temp;
        let cityName = weathers.name;
        let weatherDescription = weathers.weather
        for (let i = 0; i < weatherDescription.length; i++) {
            const element = weatherDescription[i];
            document.getElementById('discription').innerText = element.description
        }
        
        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = getTemp;
        

    }
})



