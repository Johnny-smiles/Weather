var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#city")


var getCityWeather = function(city){

    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" +city + 
    "&appid=83bac62a5eb36f0fc473f0447198bc15";

    fetch(apiUrl)
    .then(function(response) {
         // request was successful
         if (response.ok){       
            response.json().then(function(data){            
                console.log(data);
            });
        } else {
            alert("Error: " + response.statusText);
        }
        })   

}

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event)

var cityName = nameInputEl.nodeValue.trim();
console.log(cityName);

if(cityName) {
    getCityWeather(cityName);
    nameInputEl.value = "";
}else {
    alert("Please enter City Name")
}
}

cityFormEl.addEventListener("submit", formSubmitHandler);