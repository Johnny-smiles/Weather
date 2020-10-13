// var elements to id html containers
var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city")
 
// var containers to hold imput html data
var cityContainerEl = document.querySelector("#city-container")
var citySearchTerm = document.querySelector("#city-search-term")

// var container to populate with city search data and fetch api
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
            //error handler
        } else {
            alert("Error: " + response.statusText);
        }
        
        })   

}

// passing response data to html
var displayStats = function(data, city) {
   // displaying in html city name that was search 
    var cityName = city;
citySearchTerm.textContent = cityName;

// displaying in html temp for city searched
var cityTemp = document.createElement("p")
cityTemp.textContent = "Temp = " + data.main.temp + " F ";

// displaying in html humidity for city searched
 var cityHumidity = document.createElement("p")
 cityHumidity.textContent = "Humidity = " + data.main.humidity + " % ";

 // displaying in html wind speed for city searched
 var cityWindSpeed = document.createElement("p")
 cityWindSpeed.textContent = "Wind Speed = " + data.wind.speed + " MPH ";

// appending returned data placed in html to city card. 
 cityContainerEl.appendChild(cityTemp);
cityContainerEl.appendChild(cityHumidity);
cityContainerEl.appendChild(cityWindSpeed);
}

//prevented refresh of browser
var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event)

// Var holding city name that was given
var cityName = nameInputEl.value.trim();
console.log(cityName);

if(cityName) {
    getCityWeather(cityName);
    nameInputEl.value = "";
// handling invalid city names
}else {
    alert("Please enter City Name")
}
}


// event listener to call formSubmitHandler to start the process. 
cityFormEl.addEventListener("submit", formSubmitHandler);