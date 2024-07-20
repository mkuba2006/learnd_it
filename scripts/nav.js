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

    second_h1: document.getElementById('second_h1').textContent,
    second_h2: document.getElementById('second_h2').textContent,
    second_el1_h3: document.getElementById('second_el1_h3').textContent,
    text1: document.getElementById('text1').textContent,
    second_el2_h3: document.getElementById('second_el2_h3').textContent,
    text2: document.getElementById('text2').textContent,
    second_el3_h3: document.getElementById('second_el3_h3').textContent,
    text3: document.getElementById('text3').textContent,
    second_el4_h3: document.getElementById('second_el4_h3').textContent,
    text4: document.getElementById('text4').textContent,

    third_description: document.getElementById('third_description').textContent,
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

        
        document.getElementById('second_h1').textContent = 'Jak działa Learnd.it';
        document.getElementById('second_h2').textContent = 'Z Learnd.it możesz wybrać rodzaj zajęć, które Cię interesują – indywidualne sesje, lekcje grupowe czy interaktywne wykłady na żywo. Następnie wybierz nauczyciela z dostępnych opcji i zacznij zdobywać potrzebną wiedzę.';
        document.getElementById('second_el1_h3').textContent = 'Wybierz rodzaj zajęć';
        document.getElementById('text1').textContent = 'Zdecyduj, czy wolisz sesje indywidualne, zajęcia grupowe, czy interaktywne wykłady na żywo.';
        document.getElementById('second_el2_h3').textContent = 'Znajdź wymarzonego Nauczyciela';
        document.getElementById('text2').textContent = 'Przejrzyj listę doświadczonych nauczycieli. Wybierz tego, który najlepiej odpowiada Twoim preferencjom i celom edukacyjnym, aby jak najlepiej wykorzystać swoje zajęcia.';
        document.getElementById('second_el3_h3').textContent = 'Zaplanuj swoje zajęcia w szybki sposób';
        document.getElementById('text3').textContent = 'Zaplanuj swoje sesje nauki kilkoma kliknięciami. Nasza intuicyjna platforma sprawia, że łatwo zarezerwujesz zajęcia w dogodnych dla Ciebie terminach.';
        document.getElementById('second_el4_h3').textContent = 'Korzystaj ze zweryfikowanych źródeł';
        document.getElementById('text4').textContent = 'Zdobądź wiedzę od najlepszych tutorów, korzystając ze zweryfikowanych i niezawodnych źródeł. Zwiększ swoje doświadczenia edukacyjne dzięki zaufanym i skutecznym materiałom.';

        document.getElementById('third_description').textContent ='Kluczowe Funkcjonalności';


        
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


        document.getElementById('second_h1').textContent = originalTexts.second_h1;
        document.getElementById('second_h2').textContent = originalTexts.second_h2;
        document.getElementById('second_el1_h3').textContent = originalTexts.second_el1_h3;
        document.getElementById('text1').textContent = originalTexts.text1; 
        document.getElementById('second_el2_h3').textContent = originalTexts.second_el2_h3;
        document.getElementById('text2').textContent = originalTexts.text2; 
        document.getElementById('second_el3_h3').textContent = originalTexts.second_el3_h3;
        document.getElementById('text3').textContent = originalTexts.text3; 
        document.getElementById('second_el4_h3').textContent = originalTexts.second_el4_h3; 
        document.getElementById('text4').textContent = originalTexts.text4; 
        
        document.getElementById('third_description').textContent = originalTexts.third_description; 



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