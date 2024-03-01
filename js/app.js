const API_KEY = `d71fdc66ee140aa5b3c2eda6c863d406`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
const displayTemperature = data =>{
    const temperature = document.getElementById('temperature');
    console.log(data.main.temp);
    temperature.innerText = data.main.temp;
}
loadTemperature('dhaka');