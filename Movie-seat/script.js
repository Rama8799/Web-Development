let container = document.querySelector('.container');
let movie = document.getElementById('movie');
let count = document.getElementById('count');
    let total = document.getElementById('total');
let price =+movie.value;
function updateCountValue(){
    let seats_selected = document.querySelectorAll('.row .seat.selected');
    let noOfSeatsSelected=seats_selected.length;
    count.innerText=noOfSeatsSelected;
    total.innerText=price*count;
}

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
  updateCountValue();
});

movie.addEventListener('change', e =>{
    let movieSelected=e.target.value;
  updateCountValue();
});