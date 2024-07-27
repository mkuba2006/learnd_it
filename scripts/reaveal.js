const submit2 = document.getElementById('submit2');
const flag22 = document.getElementById('flag2');


const rightFourth = document.getElementById('right_fourth');
const leftfifth = document.getElementById('left_fifth');

const dataBox5 = document.getElementById('data_box5');
const dataBox4 = document.getElementById('data_box4');
const dataBox2 = document.getElementById('data_box2');
const dataBox3 = document.getElementById('data_box3');

flag22.addEventListener('click', () => {
    if (submit2.value === 'Odbierz Wczesny Dostęp') {
        submit2.style.transform = 'translateX(-100px)';


        rightFourth.style.transform = 'translate(-30px, 353px)';
        leftfifth.style.transform = 'translate(30px, 400px)';

        dataBox5.style.transform = 'translate(-30px, 370px)';
        dataBox2.style.transform = 'translate(30px, 127px)';
        dataBox4.style.transform = 'translate(30px, 330px)';
        dataBox3.style.transform = 'translate(-30px, 277px)';
    }
    
    
    else {
        submit2.style.transform = 'translateX(-80px)';
        submit2.style.padding = '0 5px';

    
        rightFourth.style.transform = 'translate(-30px, 373px)';
        leftfifth.style.transform = 'translate(30px, 416px)';


        dataBox5.style.transform = 'translate(-30px, 404px)';
        dataBox2.style.transform = 'translate(30px, 138px)';
        dataBox4.style.transform = 'translate(30px, 363px)';
        dataBox3.style.transform = 'translate(-30px, 285px)';
    }
});
