console.log("hello");

var austin = document.querySelector("#city1");
var chicago = document.querySelector("#city2");
var newYork = document.querySelector("#city3");
var orlando = document.querySelector("#city4");
var LA = document.querySelector("#city5");
var seattle = document.querySelector("#city6");
var denver = document.querySelector("#city7");
var atlanta = document.querySelector("#city8");
var searchButton = document.querySelector("#searchButton");
var inputData = document.querySelector("#input");

searchButton.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", inputData.value);
  getApi();
})

austin.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", "Austin");
  getApi();
})


chicago.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", "Chicago");
  getApi();
})

newYork.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", "New York");
  getApi();
})

orlando.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", "Orlando");
  getApi();
})

LA.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", "Los Angeles");
  getApi();
})

seattle.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", "Seattle");
  getApi();
})

denver.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", "Denver");
  getApi();
})

atlanta.addEventListener("click", function () {
  localStorage.clear(); 
  localStorage.setItem("userSearch", "Atlanta");
  getApi();
})

function getApi() {
  var input = localStorage.getItem("userSearch");
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + input + '&units=imperial&appid=bf2aa965b83be96842d2dc9c58880f7c';
  
    fetch(requestUrl) 
      .then(function (response) {
        return response.json();
        
      })
      .then(function (data) {
        console.clear();
        console.log(data); 
        
        var cityDetails= [data.list[0].main.temp, data.list[0].wind.speed, data.list[0].main.humidity,];
        var cardHeader = document.querySelector(".card-header");
        var cityTemp = document.querySelector("#temp");
        var cityWind = document.querySelector("#windSpeed");
        var cityHumidity = document.querySelector("#humidity");

        console.log(cityDetails);
        
        cityHumidity.innerHTML = "Humidty:" + "";
        cityWind.innerHTML = "Wind Speed:" + "";
        cityTemp.innerHTML = "Temperature:" + "";
        cardHeader.innerHTML = "";

        cardHeader.append(data.city.name);
        cityTemp.append("   "+ cityDetails[0] + " Degrees Farenheit"); 
        cityWind.append("   " + cityDetails[1] + " MPH");
        cityHumidity.append("   " + cityDetails[2] + " %");
        
        
        var lat = data.city.coord.lat;
        var lon = data.city.coord.lon;
        
        console.log(lat); console.log(lon);
        
        localStorage.setItem("lat", lat);
        localStorage.setItem("lon", lon);

        getApi2();
        getApi3();
      })  
      
}    
    
    
function getApi2 () {
  var lat = localStorage.getItem("lat");
  var lon = localStorage.getItem("lon");   
  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=bf2aa965b83be96842d2dc9c58880f7c';
    
    fetch(requestUrl) 
      .then(function (response) {
        return response.json();
      })
      .then(function (data) { 
        console.log(data);

        var UVI = data.current.uvi;
        var UV = document.querySelector("#uvIndex");

        UV.innerHTML = "UV:" + "";

        UV.append(" " + UVI);
      })
}   


function getApi3 () {
  var lat = localStorage.getItem("lat");
  var lon = localStorage.getItem("lon");   
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=bf2aa965b83be96842d2dc9c58880f7c';
    fetch(requestUrl) 
      .then(function (response) {
        return response.json();
      })
      .then(function (data) { 
        console.log(data);

        var day1Icon = document.querySelector("#day1icon");
        var day1Temp = document.querySelector("#day1temp");
        var day1Wind = document.querySelector("#day1wind");
        var day1Humidity = document.querySelector("#day1humidity");

        var day2Icon = document.querySelector("#day2icon");
        var day2Temp = document.querySelector("#day2temp");
        var day2Wind = document.querySelector("#day2wind");
        var day2Humidity = document.querySelector("#day2humidity");

        var day3Icon = document.querySelector("#day3icon");
        var day3Temp = document.querySelector("#day3temp");
        var day3Wind = document.querySelector("#day3wind");
        var day3Humidity = document.querySelector("#day3humidity");

        var day4Icon = document.querySelector("#day4icon");
        var day4Temp = document.querySelector("#day4temp");
        var day4Wind = document.querySelector("#day4wind");
        var day4Humidity = document.querySelector("#day4humidity");

        var day5Icon = document.querySelector("#day5icon");
        var day5Temp = document.querySelector("#day5temp");
        var day5Wind = document.querySelector("#day5wind");
        var day5Humidity = document.querySelector("#day5humidity");

        
        var tempData = data.list[0].main.temp;
        var windData = data.list[0].wind.speed;
        var humidityData = data.list[0].main.temp;

        day1Temp.innerHTML = "Temp:" + " ";
        day1Wind.innerHTML = "Wind:" + " ";
        day1Humidity.innerHTML = "Humidity:" + " ";

        day1Temp.append(tempData);
        day1Wind.append(windData);
        day1Humidity.append(humidityData);

        var tempData = data.list[8].main.temp;
        var windData = data.list[8].wind.speed;
        var humidityData = data.list[8].main.temp;

        day2Temp.innerHTML = "Temp:" + " ";
        day2Wind.innerHTML = "Wind:" + " ";
        day2Humidity.innerHTML = "Humidity:" + " ";

        day2Temp.append(tempData);
        day2Wind.append(windData);
        day2Humidity.append(humidityData);

        var tempData = data.list[16].main.temp;
        var windData = data.list[16].wind.speed;
        var humidityData = data.list[16].main.temp;

        day3Temp.innerHTML = "Temp:" + " ";
        day3Wind.innerHTML = "Wind:" + " ";
        day3Humidity.innerHTML = "Humidity:" + " ";

        day3Temp.append(tempData);
        day3Wind.append(windData);
        day3Humidity.append(humidityData);

        var tempData = data.list[24].main.temp;
        var windData = data.list[24].wind.speed;
        var humidityData = data.list[24].main.temp;

        day4Temp.innerHTML = "Temp:" + " ";
        day4Wind.innerHTML = "Wind:" + " ";
        day4Humidity.innerHTML = "Humidity:" + " ";

        day4Temp.append(tempData);
        day4Wind.append(windData);
        day4Humidity.append(humidityData);

        var tempData = data.list[32].main.temp;
        var windData = data.list[32].wind.speed;
        var humidityData = data.list[32].main.temp;

        day5Temp.innerHTML = "Temp:" + " ";
        day5Wind.innerHTML = "Wind:" + " ";
        day5Humidity.innerHTML = "Humidity:" + " ";

        day5Temp.append(tempData);
        day5Wind.append(windData);
        day5Humidity.append(humidityData);
        
      })
}   

