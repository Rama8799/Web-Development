total_cases = document.getElementById("total_cases");
today_cases = document.getElementById("today_cases");
today_deaths = document.getElementById("today_deaths");
today_deaths = document.getElementById("today_deaths");

window.addEventListener('load', () => {
    fetch("https://corona.lmao.ninja/v2/countries/India?yesterday&strict&query%20")
        .then(res => res.json())
        .then(data => {
            const totalCases = data.cases;
            const todayCases = data.todayCases;
            const totalDeaths = data.deaths;
            const todayDeaths = data.todayDeaths;
            total_cases.innerHTML = `Total Cases : ${totalCases}`;
            today_cases.innerHTML = `Today Cases : ${todayCases}`;
            total_deaths.innerHTML = `Total Deaths : ${totalDeaths}`;
            today_deaths.innerHTML = `Today Deaths : ${todayDeaths}`;
            //console.log(totalCases);
        });
});