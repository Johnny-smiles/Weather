var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city")

var cityContainerEl = document.querySelector("#city-container")
var citySearchTerm = document.querySelector("#city-search-term")


var getCityWeather = function(city){

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" +city + 
    "&appid=83bac62a5eb36f0fc473f0447198bc15&units=imperial";

    fetch(apiUrl)
    .then(function(response) {
         // request was successful
         if (response.ok){       
            response.json().then(function(data){ 
                displayStats(data, city);           
                console.log(data);
            });
        } else {
            alert("Error: " + response.statusText);
        }
        
        })   

}

var displayStats = function(data, city) {
    var cityName = city;
citySearchTerm.textContent = cityName;
var cityTemp = document.createElement("p")
cityTemp.textContent = "Temp = " + data.main.temp + " F ";

 var cityHumidity = document.createElement("p")
 cityHumidity.textContent = "Humidity = " + data.main.humidity + " % ";

 var cityWindSpeed = document.createElement("p")
 cityWindSpeed.textContent = "Wind Speed = " + data.wind.speed + " MPH ";

 cityContainerEl.appendChild(cityTemp);
cityContainerEl.appendChild(cityHumidity);
cityContainerEl.appendChild(cityWindSpeed);
}

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event)

var cityName = nameInputEl.value.trim();
console.log(cityName);

if(cityName) {
    getCityWeather(cityName);
    nameInputEl.value = "";
}else {
    alert("Please enter City Name")
}
}



cityFormEl.addEventListener("submit", formSubmitHandler);