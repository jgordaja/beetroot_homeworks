//Створити HTML-сторінку з блоком тексту в рамці. 
// Реалізувати можливість змінювати розмір блоку, 
// якщо затиснути мишку в правому нижньому 
// кутку і тягнути її далі.

const div = document.querySelector('.border');
const span = document.querySelector('.angle');

let x0;
let y0;
let x;
let y;
let diffX = 0;
let diffY = 0;

// взяти стилі елемента
const computedStyle = getComputedStyle(div);
// let computedWidth = computedStyle.width;
// let computedHeight = computedStyle.height;
// console.log(computedWidth);
// console.log(computedHeight); 

// обчислити ширину та висоту
let width = parseInt(computedStyle.width);
let height = parseInt(computedStyle.height);
// console.log(width);
// console.log(height); 

function mouseDown(event) {
	// console.log(event);
	// console.log(event.target);
	// початкові координати натискання мишки
	x0 = event.x;
	y0 = event.y;
	// console.log(x0);
	// console.log(y0);

	document.addEventListener('mousemove', mouseMove);
}

function mouseMove(event) {
	x = event.x;
	y = event.y;
	// console.log(x);
	// console.log(y);

	// обчислюємо різницю
	diffX = x - x0;
	diffY = y - y0;
	// console.log(diffX);
	// console.log(diffY); 

	// додаємо різницю по х та у до ширини та висоти елемента
	div.style.width = width + diffY + 'px';
	div.style.height = height + diffX + 'px';
}

// запускати прослуховувач події при натискані на span.angle
span.addEventListener('mousedown', mouseDown); 

document.addEventListener('mouseup', function () {
	// console.log('mouseup'); 
	// при відпускані кнопки миші зупинити прослуховувач події mousemove в документі
	document.removeEventListener('mousemove', mouseMove);
});
