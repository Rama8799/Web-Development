total_cases = document.getElementById("total_cases");
today_cases = document.getElementById("today_cases");
today_deaths = document.getElementById("today_deaths");
today_deaths = document.getElementById("today_deaths");
total_recovered = document.getElementById("total_recovered");
today_recovered = document.getElementById("today_recovered");
active_cases = document.getElementById("active_cases");
critical_cases = document.getElementById("critical_cases");
country = document.getElementById("country");
find = document.getElementById("btn-search");
header = document.getElementById("header");

country.addEventListener('change', () => {
    fetch(`https://corona.lmao.ninja/v2/countries/${country.value}?yesterday&strict&query%20`)
        .then(res => res.json())
        .then(data => {
            header.innerText=`COVID TRACKER - ${country.value}`
            total_cases.innerHTML = `Total Cases : ${data.cases}`;
            today_cases.innerHTML = `New Cases : ${data.todayCases}`;
            total_deaths.innerHTML = `Total Deaths : ${data.deaths}`;
            today_deaths.innerHTML = `New Deaths : ${data.todayDeaths}`;
            total_recovered.innerHTML = `Total Recovered : ${data.recovered}`;
            today_recovered.innerHTML = `Newly Recovered : ${data.todayRecovered}`;
            active_cases.innerHTML = `Active Cases : ${data.active}`;
            critical_cases.innerHTML = `Critical Cases : ${data.critical}`;
        });
});