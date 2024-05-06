let btn = document.querySelector('.burgerbtn');
let menu = document.querySelector('.burger_navigation');
let openImg = 'img/plus1.png';
let closeImg = 'img/burger.png';
menu.style.display = 'none';
btn.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else{
        menu.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (btn.src.endsWith(closeImg)) {
        btn.src = openImg;
    } else {
        btn.src = closeImg;
    }
});