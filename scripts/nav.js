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
    first_span1: document.getElementById('first_span1').innerHTML,
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
    third_h2_1: document.getElementById('third_h2_1').textContent,
    third_h2_2: document.getElementById('third_h2_2').textContent,
    third_h2_3: document.getElementById('third_h2_3').textContent,
    third_h2_4: document.getElementById('third_h2_4').textContent,
    third_p_1: document.getElementById('third_p_1').textContent,
    third_p_2: document.getElementById('third_p_2').textContent,
    third_p_3: document.getElementById('third_p_3').textContent,
    third_p_4: document.getElementById('third_p_4').textContent,
    four_h1: document.getElementById('four_h1').textContent,
    four_h2: document.getElementById('four_h2').innerHTML,
    student : document.getElementById('student').textContent,
    student_h2_1: document.getElementById('student_h2_1').textContent,
    student_h2_2: document.getElementById('student_h2_2').textContent,
    student_h2_3: document.getElementById('student_h2_3').textContent,
    student_p_1: document.getElementById('student_p_1').textContent,
    student_p_2: document.getElementById('student_p_2').textContent,
    student_p_3: document.getElementById('student_p_3').textContent,
    tutor_h2_1: document.getElementById('tutor_h2_1').textContent,
    tutor_h2_2: document.getElementById('tutor_h2_2').textContent,
    tutor_h2_3: document.getElementById('tutor_h2_3').textContent,
    tutor_p_1: document.getElementById('tutor_p_1').textContent,
    tutor_p_2: document.getElementById('tutor_p_2').textContent,
    tutor_p_3: document.getElementById('tutor_p_3').textContent,
    topic_h1: document.getElementById('topic_h1').textContent,
    topic_p: document.getElementById('topic_p').textContent,
    item_h2_1: document.getElementById('item_h2_1').textContent,
    item_p_1: document.getElementById('item_p_1').textContent,
    item_h2_2: document.getElementById('item_h2_2').textContent,
    item_p_2: document.getElementById('item_p_2').textContent,
    item_h2_3: document.getElementById('item_h2_3').textContent,
    item_p_3: document.getElementById('item_p_3').textContent,
    item_h2_4: document.getElementById('item_h2_4').textContent,
    item_p_4: document.getElementById('item_p_4').textContent,
    item_h2_5: document.getElementById('item_h2_5').textContent,
    item_p_5: document.getElementById('item_p_5').textContent,
    item_h2_6: document.getElementById('item_h2_6').textContent,
    item_p_6: document.getElementById('item_p_6').textContent,
    item_h3: document.getElementById('item_h3').textContent,
    six_h1: document.getElementById('six_h1').textContent,
    seven_h1: document.getElementById('seven_h1').textContent,
    left_first_1: document.getElementById('left_first_1').textContent,
    left_first_2: document.getElementById('left_first_2').textContent,
    third_span_1: document.getElementById('third_span_1').textContent,
    third_span_2: document.getElementById('third_span_2').textContent,
    fifth_span_x: document.getElementById('fifth_span_x').textContent,
    fifth_span_1: document.getElementById('fifth_span_1').textContent,
    fifth_span_x2: document.getElementById('fifth_span_x2').textContent,

    six_span_x: document.getElementById('six_span_x').textContent,
    six_span_x2:  document.getElementById('six_span_x2').textContent,

    fifth_span_2: document.getElementById('fifth_span_2').textContent,
    second_span_1: document.getElementById('second_span_1').textContent,
    fourth_span_1: document.getElementById('fourth_span_1').textContent,
    fourth_span_2: document.getElementById('fourth_span_2').textContent,
    eight_h1: document.getElementById('eight_h1').textContent,
    footer_h1: document.getElementById('footer_h1').textContent,
    bottom_h3: document.getElementById('bottom_h3').textContent,
    column1_h3: document.getElementById('column1_h3').textContent,
    column1_a1: document.getElementById('column1_a1').textContent,
    column1_a2: document.getElementById('column1_a2').textContent,
    column1_a3: document.getElementById('column1_a3').textContent,
    column2_h3: document.getElementById('column2_h3').textContent,
    column2_a1: document.getElementById('column2_a1').textContent,
    column2_a2: document.getElementById('column2_a2').textContent,
    column2_a3: document.getElementById('column2_a3').textContent,
    column3_h3: document.getElementById('column3_h3').textContent,
    copyright: document.getElementById('copyright').textContent,
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
        document.getElementById('third_h2_1').textContent ='Lekcje indywidualne';
        document.getElementById('third_h2_2').textContent = 'Spersonalizowane wyszukiwania';
        
        document.getElementById('third_h2_3').textContent = 'Wykłady LIVE';
        document.getElementById('third_h2_4').textContent = 'Rynek zasobów';
        document.getElementById('third_p_1').textContent = 'od 50 PLN za 60 min';
        document.getElementById('third_p_2').textContent = 'przy użyciu asystenta AI';
        document.getElementById('third_p_3').textContent = 'od 1 PLN za 60 min';
        document.getElementById('third_p_4').textContent = 'Oryginalne zasoby edukacyjne';
        document.getElementById('four_h1').textContent ='Wybierz Swoją Ścieżkę';
        document.getElementById('four_h2').textContent = 'Z Learnd.it masz elastyczność kształtowania swojej edukacyjnej drogi. Jako uczeń, wybierz spośród różnych formatów zajęć, które najlepiej odpowiadają Twojemu stylowi nauki. Jeśli jesteś ekspertem w swojej dziedzinie, dołącz do nas jako nauczyciel, aby dzielić się swoją wiedzą, inspirować innych i zarabiać. Wykorzystaj okazję, by uczyć się lub nauczać w sposób, który odpowiada Twoim celom.';
        document.getElementById('student').textContent = 'Uczeń';
        document.getElementById('student_h2_1').textContent = 'Odkrywaj dopasowaną naukę';
        document.getElementById('student_h2_2').textContent = 'Skontaktuj się z ekspertami';
        document.getElementById('student_h2_3').textContent = 'Korzystaj z wysokiej jakości materiałów';
        document.getElementById('student_p_1').textContent = 'Znajdź zajęcia dopasowane do Twoich potrzeb i zainteresowań dzięki spersonalizowanym rekomendacjom.';
        document.getElementById('student_p_2').textContent = 'Nawiąż kontakt z wykwalifikowanymi nauczycielami, którzy oferują wsparcie i pomoc w osiągnięciu sukcesu.';
        document.getElementById('student_p_3').textContent = 'Korzystaj ze zweryfikowanych materiałów edukacyjnych, aby wzmocnić swoje zrozumienie i opanowanie tematów.';
        document.getElementById('tutor_h2_1').textContent = 'Dziel się doświadczeniem'; 
        document.getElementById('tutor_h2_2').textContent = 'Elastyczny grafik'; 
        document.getElementById('tutor_h2_3').textContent = 'Rozwijaj swoje zasięgi'; 
        document.getElementById('tutor_p_1').textContent = 'Dołącz do naszej społeczności edukatorów i twórz angażujące zajęcia, aby inspirować uczniów.'; 
        document.getElementById('tutor_p_2').textContent = 'Łatwo zarządzaj swoim harmonogramem nauczania i dostosuj go do swoich zobowiązań.'; 
        document.getElementById('tutor_p_3').textContent = 'Nawiązuj kontakt z uczniami na całym świecie i zwiększaj swój wpływ dzięki narzędziom naszej platformy.'; 
        document.getElementById('topic_h1').textContent ='Główne Zalety';
        document.getElementById('topic_p').textContent ='Poznaj wyjątkowe cechy i korzyści, które oferujemy, aby uczynić Twoje doświadczenie edukacyjne wyjątkowym i dostosowanym do Twoich potrzeb.';
        document.getElementById('item_h2_1').textContent ='Przystępne ceny';
        document.getElementById('item_p_1').textContent ='Ciesz się wysokiej jakości edukacją w niskiej cenie.';
        document.getElementById('item_h2_2').textContent ='Elastyczna nauka';
        document.getElementById('item_p_2').textContent ='Sam decyduj; kiedy i jak się uczyć.';
        document.getElementById('item_h2_3').textContent ='Sami eksperci';
        document.getElementById('item_p_3').textContent ='Zdobywaj wiedzę od zweryfikowanych tutorów.';
        document.getElementById('item_h2_4').textContent ='Szybki system rezerwacji';
        document.getElementById('item_p_4').textContent ='Zaplanuj swoje zajęcia szybko i wygodnie.';
        document.getElementById('item_h2_5').textContent ='Ucz się gdzie tylko zapragniesz';
        document.getElementById('item_p_5').textContent ='Dostęp do zajęć z dowolnego miejsca.';
        document.getElementById('item_h2_6').textContent ='Przyjazny interfejs';
        document.getElementById('item_p_6').textContent ='Łatwo poruszaj się po naszej intuicyjnej platformie.';
        document.getElementById('item_h3').textContent ='Rozpocznij swoją edukacyjną podróż!';
        document.getElementById('six_h1').textContent = 'Zespół';
        document.getElementById('seven_h1').textContent = 'Nasza Historia';
        document.getElementById('left_first_1').textContent = '1 miejsce';
        document.getElementById('left_first_2').textContent = 'w regionalnych eliminacjach Econverse CUP 2023 w Gdańsku';
        document.getElementById('third_span_1').textContent = 'Wywiad dla Polskiego Radia “Czwórka” w';
        document.getElementById('third_span_2').textContent = 'Warszawie';
        document.getElementById('fifth_span_x').textContent = 'Zawarcie Jakuba Strzemiecznego jako założyciela';
        document.getElementById('fifth_span_1').textContent = 'Learnd.it';
        document.getElementById('fifth_span_x2').textContent = 'w miesięczniku “My Company Polska” pod tytułem';
        document.getElementById('six_span_x').textContent = 'Udział Jakuba Strzemiecznego w';
        document.getElementById('six_span_x2').textContent = 'w roli prelegenta reprezentującego';



        document.getElementById('fifth_span_2').textContent = '“Liderzy Nowej Generacji”';
        document.getElementById('second_span_1').textContent = '2 miejsce w Polsce w Wielkim Finale Econverse CUP, program mentoringowy - ';
        document.getElementById('fourth_span_1').textContent = 'Udział Jakuba Strzemiecznego w Pomorskiej konferencji jako prelegenta oraz eksperta reprezentującego';
        document.getElementById('fourth_span_2').textContent = 'Learnd.it';
        document.getElementById('eight_h1').textContent = 'Masz pytanie? Napisz do nas!';
        document.getElementById('footer_h1').textContent = 'Już wkrótce na AppStore...';
        document.getElementById('bottom_h3').textContent = '"Dążymy do ekonomicznej i technologicznej dostępności edukacji dla uczniów i studentów na całym świecie."';
        document.getElementById('email2').setAttribute("placeholder", "Twój adres email");
        document.getElementById('submit2').setAttribute("value", 'Odbierz Wczesny Dostęp');
        document.getElementById('column1_h3').textContent = 'O Nas';
        document.getElementById('column1_a1').textContent = 'Jak działa Learnd.it';
        document.getElementById('column1_a2').textContent = 'Kluczowe Funkcjonalności';
        document.getElementById('column1_a3').textContent = 'Główne Zalety';
        document.getElementById('column2_h3').textContent = 'Firma';
        document.getElementById('column2_a1').textContent = 'Poznaj nasz Zespół';
        document.getElementById('column2_a2').textContent = 'Nasza Historia';
        document.getElementById('column2_a3').textContent = 'Polityka prywatności';
        document.getElementById('column3_h3').textContent = 'Kontakt';
        document.getElementById('copyright').textContent = '© 2024 Learnd.it. Wszelkie prawa zastrzeżone';
    } 
    
    else {
        language.textContent = 'EN';
        flag.setAttribute('src', './images/flags/uk.png');
        document.getElementById('link1').textContent = originalTexts.nav_link1;
        document.getElementById('link2').textContent = originalTexts.nav_link2;
        document.getElementById('link3').textContent = originalTexts.nav_link3;
        document.getElementById('link4').textContent = originalTexts.nav_link4;
        document.getElementById('courses_button').textContent = originalTexts.nav_but;
        document.getElementById('first_span1').innerHTML = originalTexts.first_span1;
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
        document.getElementById('third_h2_1').textContent = originalTexts.third_h2_1; 
        document.getElementById('third_h2_2').textContent = originalTexts.third_h2_2; 
        document.getElementById('third_h2_3').textContent = originalTexts.third_h2_3; 
        document.getElementById('third_h2_4').textContent = originalTexts.third_h2_4; 
        document.getElementById('third_p_1').textContent = originalTexts.third_p_1;  
        document.getElementById('third_p_2').textContent = originalTexts.third_p_2; 
        document.getElementById('third_p_3').textContent = originalTexts.third_p_3;  
        document.getElementById('third_p_4').textContent = originalTexts.third_p_4; 
        document.getElementById('four_h1').textContent = originalTexts.four_h1; 
        document.getElementById('four_h2').innerHTML = originalTexts.four_h2; 
        document.getElementById('student').textContent = originalTexts.student;
        document.getElementById('student_h2_1').textContent = originalTexts.student_h2_1;
        document.getElementById('student_h2_2').textContent = originalTexts.student_h2_2;
        document.getElementById('student_h2_3').textContent = originalTexts.student_h2_3;
        document.getElementById('student_p_1').textContent = originalTexts.student_p_1;
        document.getElementById('student_p_2').textContent = originalTexts.student_p_2;
        document.getElementById('student_p_3').textContent = originalTexts.student_p_3;
        document.getElementById('tutor_h2_1').textContent = originalTexts.tutor_h2_1;
        document.getElementById('tutor_h2_2').textContent = originalTexts.tutor_h2_2;
        document.getElementById('tutor_h2_3').textContent = originalTexts.tutor_h2_3;
        document.getElementById('tutor_p_1').textContent = originalTexts.tutor_p_1;
        document.getElementById('tutor_p_2').textContent = originalTexts.tutor_p_2;
        document.getElementById('tutor_p_3').textContent = originalTexts.tutor_p_3;
        document.getElementById('topic_h1').textContent = originalTexts.topic_h1;
        document.getElementById('topic_p').textContent = originalTexts.topic_p;
        document.getElementById('item_h2_1').textContent = originalTexts.item_h2_1;
        document.getElementById('item_p_1').textContent = originalTexts.item_p_1;
        document.getElementById('item_h2_2').textContent = originalTexts.item_h2_2;
        document.getElementById('item_p_2').textContent = originalTexts.item_p_2;
        document.getElementById('item_h2_3').textContent = originalTexts.item_h2_3;
        document.getElementById('item_p_3').textContent = originalTexts.item_p_3;
        document.getElementById('item_h2_4').textContent = originalTexts.item_h2_4;
        document.getElementById('item_p_4').textContent = originalTexts.item_p_4;
        document.getElementById('item_h2_5').textContent = originalTexts.item_h2_5;
        document.getElementById('item_p_5').textContent = originalTexts.item_p_5;
        document.getElementById('item_h2_6').textContent = originalTexts.item_h2_6;
        document.getElementById('item_p_6').textContent = originalTexts.item_p_6;
        document.getElementById('item_h3').textContent = originalTexts.item_h3;
        document.getElementById('six_h1').textContent = originalTexts.six_h1;
        document.getElementById('seven_h1').textContent = originalTexts.seven_h1;
        document.getElementById('left_first_1').textContent = originalTexts.left_first_1;
        document.getElementById('left_first_2').textContent = originalTexts.left_first_2;
        document.getElementById('third_span_1').textContent = originalTexts.third_span_1;
        document.getElementById('third_span_2').textContent = originalTexts.third_span_2;
        document.getElementById('fifth_span_x').textContent = originalTexts.fifth_span_x;
        document.getElementById('fifth_span_1').textContent = originalTexts.fifth_span_1;
        document.getElementById('fifth_span_x2').textContent = originalTexts.fifth_span_x2;

        document.getElementById('six_span_x').textContent = originalTexts.six_span_x;
        document.getElementById('six_span_x2').textContent = originalTexts.six_span_x2;

        document.getElementById('fifth_span_2').textContent = originalTexts.fifth_span_2;
        document.getElementById('second_span_1').textContent = originalTexts.second_span_1;
        document.getElementById('fourth_span_1').textContent = originalTexts.fourth_span_1;
        document.getElementById('fourth_span_2').textContent = originalTexts.fourth_span_2;
        document.getElementById('eight_h1').textContent = originalTexts.eight_h1;
        document.getElementById('footer_h1').textContent = originalTexts.footer_h1;
        document.getElementById('bottom_h3').textContent =  originalTexts.bottom_h3;
        document.getElementById('email2').setAttribute("placeholder", "Your email address");
        document.getElementById('submit2').setAttribute("value", 'Get Early Access');
        document.getElementById('column1_h3').textContent = originalTexts.column1_h3;
        document.getElementById('column1_a1').textContent = originalTexts.column1_a1;
        document.getElementById('column1_a2').textContent = originalTexts.column1_a2;
        document.getElementById('column1_a3').textContent = originalTexts.column1_a3;
        document.getElementById('column2_h3').textContent = originalTexts.column2_h3;
        document.getElementById('column2_a1').textContent = originalTexts.column2_a1;
        document.getElementById('column2_a2').textContent = originalTexts.column2_a2;
        document.getElementById('column2_a3').textContent = originalTexts.column2_a3;
        document.getElementById('column3_h3').textContent = originalTexts.column3_h3;
        document.getElementById('copyright').textContent = originalTexts.copyright;
    }
});




function toggleMenu() {
    const burger = document.getElementById('burger');
    const nav2 = document.getElementById('nav2');
    var offsetHeight = nav2.offsetHeight;
    const navigation = document.getElementById('navigation');
    const isOpen = burger.classList.toggle('open');
    nav2.classList.toggle('open');
    navigation.style.transform = isOpen ? `translateY(-${offsetHeight/2}px)` : 'translateY(-130vh)';
    document.body.style.overflowY = isOpen ? 'hidden' : 'visible';
}
