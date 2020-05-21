const harmbuger = document.getElementById('harmbuger')
const navUl = document.getElementById('nav-ul')

harmbuger.addEventListener('click', ()=> {
     navUl.classList.toggle('show');  
});