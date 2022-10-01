$(document).ready(function() {
    
    $('#burger').click(function() {
        // відкрити/закрити меню
        $('#menu').toggleClass('active');
        // змінити бургер на Х і навпаки
        $('#burger').toggleClass('is-active');
        // зафіксувати body щоб не скролився коли визвано меню
        $('body').toggleClass('lock');
    })

    // якщо нажато пункт меню
    $('.menu__item').click(function() {
        // переходимо кудись або ще якийсь код
        // your code...
        // закрити відкрите меню
        $('#menu').toggleClass('active');
        // змінити Х на бургер
        $('#burger').toggleClass('is-active');
        // прибрати lock-клас у body
        $('body').toggleClass('lock');
    })
});