const submit2 = document.getElementById('submit2');
const flag22 = document.getElementById('flag2');
const rightFourth = document.getElementById('right_fourth');
const dataBox5 = document.getElementById('data_box5');

flag22.addEventListener('click', () => {
    if (submit2.value === 'Odbierz Wczesny Dostęp') {
        submit2.style.transform = 'translateX(-100px)';


        rightFourth.style.transform = 'translate(-30px, 353px)';
        dataBox5.style.transform = 'translate(-30px, 370px)';
    }
    
    
    else {
        submit2.style.transform = 'translateX(-80px)';
        submit2.style.padding = '0 5px';

        

        rightFourth.style.transform = 'translate(-30px, 373px)';
        dataBox5.style.transform = 'translate(-30px, 404px)';
    }
});
