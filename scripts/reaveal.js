const submit2 = document.getElementById('submit2');
const submit = document.getElementById('submit');
const flag22 = document.getElementById('flag2');

const rightFourth = document.getElementById('right_fourth');
const leftFifth = document.getElementById('left_fifth');

const dataBox5 = document.getElementById('data_box5');
const dataBox4 = document.getElementById('data_box4');
const dataBox2 = document.getElementById('data_box2');
const dataBox3 = document.getElementById('data_box3');

flag22.addEventListener('click', () => {
    if (submit2.value === 'Odbierz Wczesny Dostęp') {
        submit2.style.minWidth = '150px';
        if (document.body.clientWidth <= 420) {
            submit.style.padding = '0 5px';
            submit.style.maxWidth = '160px';
            submit.style.minWidth = '150px';
            submit.style.transform = 'translateX(-45px)';

            submit2.style.padding = '0 5px';
            submit2.style.maxWidth = '160px'
            submit2.style.minWidth = '150px'
            submit2.style.transform = 'translateX(-50px)';
            
        }
    } else {
        submit2.style.minWidth = '105px'
        if (document.body.clientWidth <= 420) {
            submit.style.padding = '0 5px';
            submit.style.maxWidth = '139px'
            submit.style.minWidth = '120px'
            submit.style.transform = 'translateX(-30px)';
            
            submit2.style.padding = '0 5px';
            submit2.style.maxWidth = '139px'
            submit2.style.minWidth = '120px'
            submit2.style.transform = 'translateX(-30px)';
        }
    }
});
