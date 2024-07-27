const submit2 = document.getElementById('submit2');
const flag22 = document.getElementById('flag2');

flag22.addEventListener('click', () => {
    if (submit2.value === 'Odbierz Wczesny Dostęp') {
        submit2.style.transform = 'translateX(-100px)';
        document.getElementById("right_fourth").style.transform= 'transform: translate(-30px, 353px);'
        document.getElementById("data_box5").style.transform= 'transform: translate(-30px, 380px);'
    }
    else{
        submit2.style.transform = 'translateX(-80px)';
        submit2.style.padding = ' 0 5px';
        document.getElementById("right_fourth").style.transform= 'transform: translate(-30px, 373px);'
        document.getElementById("data_box5").style.transform= 'transform: translate(-30px, 404px);'
    }
});
