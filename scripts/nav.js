const button_flag = document.getElementById('flag');
const language = document.getElementById('language');
const flag = document.getElementById('flag_iamge');

const originalTexts = {
    nav_link1: document.getElementById('link1').textContent,
    nav_link2: document.getElementById('link2').textContent,
    nav_link3: document.getElementById('link3').textContent,
    nav_link4: document.getElementById('link4').textContent,
    nav_but: document.getElementById('courses_button').textContent,

    first_b: document.getElementById('first_b').textContent,
    first_span1: document.getElementById('first_span1').textContent,
    first_span2: document.getElementById('first_span2').textContent,
    first_p: document.getElementById('first_p').textContent,
};







button_flag.addEventListener('click', () => {
    if (language.textContent == 'EN') {
        language.textContent = 'PL';
        flag.setAttribute('src', './images/flags/poland.png');
        document.getElementById('link1').textContent = 'Jak działa Learnd.it';
        document.getElementById('link2').textContent = 'Funkcjonalności';
        document.getElementById('link3').textContent = 'Zalety';
        document.getElementById('link4').textContent = 'Zespół';
        document.getElementById('courses_button').textContent = 'Nasza Oferta';


        document.getElementById('first_span1').textContent = 'Gotowy na nową erę nowoczesnej';
        document.getElementById('first_b').textContent = 'nauki online?';
        document.getElementById('first_span2').textContent = 'Sprawdź kim jesteśmy!';
        document.getElementById('first_p').textContent = 'Nasza platforma umożliwia uczestnictwo w wykładach live, dostępnych w atrakcyjnych cenach dzięki zastosowaniu modelu sharing economy. Dzięki temu uczniowie mogą zdobywać wiedzę taniej, a nauczyciele mają szansę na zwiększenie swoich zarobków, prowadząc zajęcia dla większej liczby uczniów jednocześnie.'
        document.getElementById('email').setAttribute("placeholder", "Twój adres email");
        document.getElementById('submit').setAttribute("value", 'Odbierz Wczesny Dostęp');



        
    } 
    
    else {
        language.textContent = 'EN';
        flag.setAttribute('src', './images/flags/uk.png');
        document.getElementById('link1').textContent = originalTexts.nav_link1;
        document.getElementById('link2').textContent = originalTexts.nav_link2;
        document.getElementById('link3').textContent = originalTexts.nav_link3;
        document.getElementById('link4').textContent = originalTexts.nav_link4;
        document.getElementById('courses_button').textContent = originalTexts.nav_but;


        document.getElementById('first_span1').textContent = originalTexts.first_span1;
        document.getElementById('first_b').textContent = originalTexts.first_b;
        document.getElementById('first_span2').textContent = originalTexts.first_span2;
        document.getElementById('first_p').textContent = originalTexts.first_p;
        document.getElementById('email').setAttribute("placeholder", "Your email address");
        document.getElementById('submit').setAttribute("value", 'Get Early Access');








    }
});








function toggleMenu() {
    const burger = document.getElementById('burger');
    const nav2 = document.getElementById('nav2');
    var offsetHeight = nav2.offsetHeight;
    console.log('offsetHeight:', offsetHeight);
    const navigation = document.getElementById('navigation');
    const isOpen = burger.classList.toggle('open');
    nav2.classList.toggle('open');
    navigation.style.transform = isOpen ? `translateY(-${offsetHeight/2}px)` : 'translateY(-130vh)';
    document.body.style.overflowY = isOpen ? 'hidden' : 'visible';
}



// function toggleMenu() {
//     const burger = document.getElementById('burger');
//     const nav2 = document.getElementById('nav2');
//     var offsetHeight = nav2.offsetHeight;
//     const navigation = document.getElementById('navigation');
//     const isOpen = burger.classList.toggle('open');
//     nav2.classList.toggle('open');
//     navigation.style.transform = isOpen ? 'translateY(-5vh)' : 'translateY(-130vh)';
//     document.body.style.overflowY = isOpen ? 'hidden' : 'visible';
// }