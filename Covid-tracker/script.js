cases = document.getElementById("cases");
deaths = document.getElementById("deaths");
recovered = document.getElementById("recovered");
active_cases = document.getElementById("active_cases");
critical_cases = document.getElementById("critical_cases");
country = document.getElementById("country");
find = document.getElementById("btn-search");
header = document.getElementById("header");

country.addEventListener('change', () => {
    fetch(`https://corona.lmao.ninja/v2/countries/${country.value}?yesterday&strict&query%20`)
        .then(res => res.json())
        .then(data => {
            header.innerHTML=`COVID TRACKER <span>${country.value}<span>`;
            cases.innerHTML = `Cases : ${data.cases} <i class="fas fa-arrow-up fa-sm red"></i> <span class="today">${data.todayCases}</span>`;
            deaths.innerHTML = `Deaths : ${data.deaths} <i class="fas fa-arrow-up fa-sm red"></i> <span class="today">${data.todayDeaths}</span>`;
            recovered.innerHTML = `Recovered : ${data.recovered} <i class="fas fa-arrow-up fa-sm green"></i> <span class="today">${data.todayRecovered}</span>`;
            active_cases.innerHTML = `Active Cases : ${data.active}`;
            critical_cases.innerHTML = `Critical Cases : ${data.critical}`;
        });
});