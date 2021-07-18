input = document.getElementById("input");
btn_search = document.getElementById("btn-search");
output = document.getElementById("output-container");

btn_search.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`http://api.weatherstack.com/current?access_key=37d02942ab9ab4cc8aa73874157190b7&query=${input.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        output.innerHTML = "";
        var temp = document.createElement('p');
        temp.classList.add('temp');
        temp.innerHTML=`<span class="span">Temperature : ${data.current.temperature}<sup>o</sup>C</span>`;
        output.appendChild(temp);

        var weather = document.createElement('p');
        weather.classList.add('weather');
        weather.innerHTML=`<span class="span">Weather : ${data.current["weather_descriptions"]}</span>`;
        output.appendChild(weather);

        var weather_img = document.createElement('img');
        weather_img.classList.add('weather-img');
        weather_img.setAttribute('src', `${data.current["weather_icons"]}`);
        output.appendChild(weather_img);

        var current_direction = data.current.wind_dir;
        var direction = {
            'N' : "arrow-circle-up",
            'S' : "arrow-circle-down",
            'E' : "arrow-circle-right",
            'W' : "arrow-circle-left"
        }
        console.log(current_direction);
        var wind = document.createElement('p');
        wind.classList.add('wind');
        wind.innerHTML = `<span>Wind : <i class="fas fa-${direction[current_direction]}"></i> ${data.current.wind_speed}Kmph</span>`;
        output.appendChild(wind);
        console.log(wind);        
        });
});