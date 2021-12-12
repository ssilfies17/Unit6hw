console.log("hello");

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=bf2aa965b83be96842d2dc9c58880f7c';
  
    fetch(requestUrl) 
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data); 
        
        var cityDetails= [data.main.temp, data.wind.speed, data.main.humidity,];
        var cardHeader = document.querySelector(".card-header");
        var cityTemp = document.querySelector("#temp");
        var cityWind = document.querySelector("#windSpeed");
        var cityHumidity = document.querySelector("#humidity");
        var cityUV = document.querySelector("#uvIndex");
      
        console.log(cityDetails);

        cardHeader.append(data.name);
        cityTemp.append("   "+ cityDetails[0]);
        cityWind.append("   " + cityDetails[1]);
        cityHumidity.append("   " + cityDetails[2]);
        cityUV.append("   " + cityDetails[3]);
        
    })   
}



getApi();

