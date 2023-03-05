const API_KEY = `ec96cafe2d7746d6763842491d517486`;

const loadTemperature = city  => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
}

loadTemperature('dhaka');