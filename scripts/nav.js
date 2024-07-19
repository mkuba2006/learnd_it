const button_flag = document.getElementById('flag');
const language = document.getElementById('language');
const flag = document.getElementById('flag_iamge');

button_flag.addEventListener('click', ()=>{
    if(language.textContent == 'EN'){
        language.textContent = 'PL';
        flag.setAttribute('src', './images/flags/poland.png');
    } else{
        language.textContent = 'EN';
        flag.setAttribute('src', './images/flags/uk.png');
    }
})



function toggleMenu() {
    const burger = document.getElementById('burger');
    const nav2 = document.getElementById('nav2');
    const navigation = document.getElementById('navigation');

    const isOpen = burger.classList.toggle('open');
    nav2.classList.toggle('open');

    if (isOpen) {
        navigation.style.transform = 'translateY(-5vh)';
        document.body.style.overflowY = 'hidden';
    } else {
        navigation.style.transform = 'translateY(-130vh)';
        document.body.style.overflowY = 'visible';
    }
}

