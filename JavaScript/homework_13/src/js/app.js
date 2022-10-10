// API key
// f58102b523f2a9d67a2febfa0a89182d

// м. Чортків Тернопільської області

// {
//     "id": 710400,
//     "name": "Chortkiv",
//     "state": "",
//     "country": "UA",
//     "coord": {
//         "lon": 25.79804,
//         "lat": 49.01709
//     }
// } 

const url = 'https://api.openweathermap.org/data/2.5/weather?id=710400&lang=ua&appid=f58102b523f2a9d67a2febfa0a89182d'; 

// 2 hours
const TIME = 2 * 60 * 60;

let weatherResponse;

const weatherNode = document.getElementById('weather');

function getWeather() {
    axios.get(url)
    .then(function (response) { 
        saveResponseFromRequest(response.data); 
    });
} 

function saveResponseFromRequest(data) {
    weatherResponse = JSON.stringify(data);
    
    outputResponseToNode(weatherResponse); 

    window.localStorage.setItem('weatherResponse', weatherResponse);
    document.cookie = `weather=true; max-age=${TIME}`;
}

function outputResponseToNode(value) {
    weatherNode.innerText = value;
}

function getWeatherFromStorage() {
    return window.localStorage.getItem('weatherResponse');
}

function removeWeatherFromStorage() {
    window.localStorage.removeItem('weatherResponse');
}

function start() {
    const cookie = document.cookie;
    const cookieWeater = cookie.indexOf('weather'); 

    if (cookieWeater === -1) { 
        getWeather(); 
    } else {
        outputResponseToNode(getWeatherFromStorage());
    }
}

start();