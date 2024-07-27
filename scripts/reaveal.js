const submit2 = document.getElementById('submit2');
const flag22 = document.getElementById('flag2');

flag22.addEventListener('click', () => {
    if (submit2.value === 'Odbierz Wczesny Dostęp') {
        submit2.style.transform = 'translateX(-100px)';
        console.log(submit2.value);
    }else{
        submit2.style.transform = 'translateX(-80px)';
        submit2.style.padding = ' 0 5px'
    }
});
