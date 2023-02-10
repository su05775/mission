const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const icons2 = document.querySelector('.navbar_toobleBtn2');
toggleBtn.addEventListener('click',()=>{
   toggleBtn.classList.toggle('active');
    menu.classList.toggle('active');
   icons.classList.toggle('active');
   icons2.classList.toggle('active');
});

icons2.addEventListener('click',()=>{
   toggleBtn.classList.toggle('active');
   menu.classList.toggle('active');
   icons.classList.toggle('active');
   icons2.classList.toggle('active');
});
