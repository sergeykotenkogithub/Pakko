const iconMenu = document.querySelector('.menu_icon')
const menuBody = document.querySelector('.header_menu');
const tarifText = document.querySelector('.tarif__text');
if(iconMenu){    
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');    
        menuBody.classList.toggle('_active');
        tarifText.classList.toggle('_active');
    });
}