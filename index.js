const closebtn = document.querySelector('#close');
const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');


menu.addEventListener('click',()=>{
  sidebar.style.display = 'flex';
});

closebtn.addEventListener('click',()=>{
    sidebar.style.display = 'none';
});
