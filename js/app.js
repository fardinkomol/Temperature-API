const API_KEY = `d71fdc66ee140aa5b3c2eda6c863d406`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
const displayTemperature = data =>{
    // const temperature = document.getElementById('temperature');
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data);
    console.log(data.weather[0].main);
    // console.log(data.main.temp);
    // temperature.innerText = data.main.temp;
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // Set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');