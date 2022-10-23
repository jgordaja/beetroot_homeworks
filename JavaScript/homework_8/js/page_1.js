let myText = "Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.";

const div = document.getElementById('div');
const textarea = document.getElementById('textarea');

div.textContent = myText;
textarea.value = myText;

document.addEventListener('keydown', function (event) { 
    if (event.code == 'KeyE' && event.ctrlKey) { 
        event.preventDefault(); 
        div.classList.toggle('display-none');
        textarea.classList.toggle('display-none');
    }  
});

document.addEventListener('keydown', function (event) { 
    if (event.code == 'KeyS' && event.ctrlKey) { 
        event.preventDefault(); 
        myText = textarea.value; 
        div.textContent = myText;
        div.classList.toggle('display-none');
        textarea.classList.toggle('display-none'); 
    }    
});