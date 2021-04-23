const form =document.getElementById('form');
const password =document.getElementById('password');
const password2 =document.getElementById('confirmPassword');
const username = document.getElementById('username');
const password_parent = password.parentElement;
const password2_parent = password2.parentElement;
form.addEventListener("submit",function(e){
  e.preventDefault();
  if(password.value !== password2.value){
    password_parent.className='form-details error';
    password2_parent.className='form-details error';
    const small=password2_parent.querySelector('small');
    small.innerText="Passwords don't match";
  }
  else{
    password_parent.className='form-details success';
    password2_parent.className='form-details success';
  }
  if(password.value.length < 4){
    password_parent.querySelector('small').innerText="Password must be atleast 4 characters";
  }
});