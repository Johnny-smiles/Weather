var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city")

var cityContainerEl = document.querySelector("#city-container")
var citySearchTerm = document.querySelector("#city-search-term")


var getCityWeather = function(city){

    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" +city + 
    "&appid=83bac62a5eb36f0fc473f0447198bc15";

    fetch(apiUrl)
    .then(function(response) {
         // request was successful
         if (response.ok){       
            response.json().then(function(data){ 
                displayStats(data.items, city);           
                console.log(data);
            });
        } else {
            alert("Error: " + response.statusText);
        }
        
        })   

}

var displayStats = function() {
    var cityName = city.name;
citySearchTerm.textContent = cityName;

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