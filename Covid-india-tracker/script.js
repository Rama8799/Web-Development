cases = document.getElementById("cases");
deaths = document.getElementById("deaths");
recovered = document.getElementById("recovered");
active_cases = document.getElementById("active_cases");
critical_cases = document.getElementById("critical_cases");
cases_today = document.getElementById("cases_today");
deaths_today = document.getElementById("deaths_today");
recovered_today = document.getElementById("recovered_today");
active_cases_today = document.getElementById("active_cases_today");
critical_cases_today = document.getElementById("critical_cases_today");
//country = document.getElementById("country");
theme_toggler = document.getElementById("btn-toggle");
header = document.getElementById("header");

window.addEventListener('load', () => {
    fetch(`https://api.covid19india.org/data.json`)
        .then(res => res.json())
        .then(data => {
            var len = data["cases_time_series"].length;
            var yesterday = data["cases_time_series"][len-1];
            var day_before_yesterday = data["cases_time_series"][len-2];
            var cases_difference = yesterday["dailyconfirmed"] - day_before_yesterday["dailyconfirmed"];
           var deaths_difference = yesterday["dailydeceased"] - day_before_yesterday["dailydeceased"];
           var recovered_difference = yesterday["dailyrecovered"] - day_before_yesterday["dailyrecovered"];
           console.log(data["statewise"][32]);
           var casesClass = cases_difference>0 ? "red fa-arrow-up" : "green fa-arrow-down";
           var deathsClass = deaths_difference>0 ? "red fa-arrow-up" : "green fa-arrow-down";
           var recoveredClass = recovered_difference>0 ? "green fa-arrow-up" : "red fa-arrow-down";
           //console.log(casesClass,deathsClass,recoveredClass);
            cases.innerHTML=`Cases : ${yesterday["totalconfirmed"]} <i class="fas fa-arrow-up red"></i> <span class="yesterdayCases">${yesterday["dailyconfirmed"]}</span> <i class="fas ${casesClass} fa-xs"></i> <span class="casesDiff">${Math.abs(cases_difference)}</span>`;
            
            deaths.innerHTML=`Deaths : ${yesterday["totaldeceased"]}  <i class="fas fa-arrow-up red"></i> <span class="yesterdayCases">${yesterday["dailydeceased"]}</span> <i class="fas ${deathsClass} fa-xs"></i> <span class="casesDiff">${Math.abs(deaths_difference)}</span>`;
            
            recovered.innerHTML=`Recovered : ${yesterday["totalrecovered"]}  <i class="fas fa-arrow-up green"></i> <span class="yesterdayCases">${yesterday["dailyrecovered"]}</span> <i class="fas ${recoveredClass} fa-xs"></i> <span class="casesDiff">${Math.abs(recovered_difference)}</span>`;
        });
});

window.addEventListener('load', () => {
    fetch(`https://corona.lmao.ninja/v2/countries/India?yesterday&strict&query%20`)
        .then(res => res.json())
        .then(data => {
            active_cases.innerHTML=`Active : ${data.active}`;
            critical_cases.innerHTML=`Critical : ${data.critical}`;
        });
});

window.addEventListener('load', () => {
    fetch(`https://corona.lmao.ninja/v2/countries/India?yesterday&strict&query%20`)
        .then(res => res.json())
        .then(data => {
            cases_today.innerHTML = `New Cases : ${data.todayCases}`;
            deaths_today.innerHTML = `New Deaths : ${data.todayDeaths}`;
            recovered_today.innerHTML = `Newly Recovered : ${data.todayRecovered}`;
            active_cases_today.innerHTML = `Active Cases : ${data.active}`;
            critical_cases_today.innerHTML = `Critical Cases : ${data.critical}`;
        });
});

theme_toggler.addEventListener('click', () => {
    console.log(1);
    document.body.classList.toggle('dark');
    theme_toggler.classList.toggle('dark');
});