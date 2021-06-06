let c1 = document.getElementById('currency-one');
let a1 = document.getElementById('amount-one');
let c2 = document.getElementById('currency-two');
let a2 = document.getElementById('amount-two');
let r = document.getElementById('rate');

function calculate1(){
    let currency1=c1.nodeValue;
    let currency2=c2.nodeValue;
    //a2.value=a1.value*70;
    fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data =>{
        //console.log(data.rates['INR']);
        rates=data.rates[c2.value]/data.rates[c1.value];
        a2.value=a1.value*rates;
        r.innerText=`1 ${c1.value} = ${rates} ${c2.value}`
    });
}

c1.addEventListener('change',calculate1);
c2.addEventListener('change',calculate1);
a1.addEventListener('input',calculate1);
a2.addEventListener('input',calculate1);
