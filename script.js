console.log("hello");

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=bf2aa965b83be96842d2dc9c58880f7c';
  
    fetch(requestUrl) 
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data); 
    })

    var weatherblock = document.createElement('p')

    weatherblock.append(requestUrl);
    
}



getApi();

