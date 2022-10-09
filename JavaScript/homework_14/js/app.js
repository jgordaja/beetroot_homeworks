// Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
    /**
     * Constructor
     * 
     * @param {number} radius 
     */
    constructor(radius) {
        this.radius = radius;
    } 

    get radius() {
        return this._radius;
    }

    /**
     * Get diameter
     */
    get diameter() {
        return this._radius * 2;
    }

    /**
     * Set radius
     * 
     * @param {number} radius 
     */
    set radius(value) {
        this._radius = value;
    }

    /**
     * Method for calculating the area of a circle
     * 
     * @returns {number}
     */
    area() {
        return (Math.PI * this._radius ** 2).toFixed(2);
    }

    /**
     * Method for calculating the length of a circle
     * 
     * @returns {number}
     */
    length() {
        return (2 * Math.PI * this._radius).toFixed(2);
    }
}

const circle = new Circle(5);

console.log('Радіус кола =', circle.radius);

circle.radius = 10;

console.log('Радіус кола =', circle.radius);

console.log('Площа кола =', circle.area());

console.log('Довжина кола =', circle.length());

// Завдання 2

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; 
// текст виводиться до тих пір, поки в маркері є чорнило; 
// один не пробільний символ — це 0,5% чорнил у маркері).

// Реалізуй клас, що описує маркер, який можна перезаправляти. 
// Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.

class OfficeMarker {
    /**
     * Constructor
     * 
     * @param {string} color 
     * @param {number} inkInPercent 
     */
    constructor(color, inkInPercent) {
        this.color = color;
        this.inkInPercent = inkInPercent;
    }

    /**
     * Getter inkInPercent
     */
    get inkInPercent() {
        return this._inkInPercent;
    }

    /**
     * Set inkInPercent
     */
    set inkInPercent(value) {
        this._inkInPercent = value;
    }

    /**
     * Method draw marker
     * 
     * @param {string} str 
     * @returns 
     */
    draw(str) {
        if (this.inkInPercent <= 0.5 || !str) {
            return;
        }

        const inputStr = str;
        
        const inputStrToArr = inputStr.split(''); 

        let outputArr = [];
        let i = 0; 

        while (this.inkInPercent >= 0.5 && i !== inputStrToArr.length) {
            if (inputStrToArr[i] !== ' ') {
                this.inkInPercent -= 0.5;
            } 

            outputArr.push(inputStrToArr[i]);
            i++; 
        }

        const outputString = outputArr.join(''); 

        const p = document.createElement('p');
        p.innerText = outputString;
        p.style.color = this.color;
        document.body.appendChild(p);
    }
}

const marker = new OfficeMarker('#fa25c5', 15);
console.log('Канцелярський маркер: ', marker);
marker.draw('Реалізуй клас, що описує канцелярський маркер.');
console.log('Відсоток чорнил, що залишився  =', marker.inkInPercent);

class RefillableMarker extends OfficeMarker {
    /**
     * 
     * @param  {...any} args
     */
    constructor(...args) {
        super(...args);
    }
    /**
     * Marker refill method up to 100% 
     */
    refuel() {
        this.inkInPercent = 100;
    }
}

const refillableMarker = new RefillableMarker('#c5fa25', 5);
console.log(refillableMarker);
refillableMarker.draw('Реалізуй клас, що описує канцелярський маркер.');
console.log('Відсоток чорнил, що залишився  =', refillableMarker.inkInPercent);

refillableMarker.refuel();
console.log(refillableMarker);
refillableMarker.draw('Реалізуй клас, що описує канцелярський маркер.');
console.log('Відсоток чорнил, що залишився  =', refillableMarker.inkInPercent);
console.log(refillableMarker);

// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. 
// Масив працівників необхідно передавати через конструктор, 
// а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml (). 

class Employee { 
     /**
     * Constructor
     * 
     * @param {string} lastName 
     * @param {string} firstName 
     * @param {string} birthDate 
     * @param {string} position 
     */
    constructor(lastName, firstName, birthDate, position) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.position = position;
    }
}

const employee1 = new Employee('Kurus', 'Ann', '29.04.1985', 'manager');
const employee2 = new Employee('Bordyuk', 'Olga', '15.09.2000', 'kashier'); 
const employee3 = new Employee('Sommer', 'John', '1.06.1995', 'director'); 
const employee4 = new Employee('Zagorulko', 'Vlad', '8.03.2002', 'kashier');

bankEmployees = [employee1, employee2, employee3, employee4]; 

class EmpTable {
    /**
     * Constructor
     * 
     * @param {array} arrayEmployees 
     */
    constructor(arrayEmployees = []) {
        this.arrayEmployees = [...arrayEmployees];
    }

    /**
     * Write table of the employees
     */
    getHtml() {
        const table = document.createElement('table'); 
        const thead = document.createElement('thead');
        const tr = document.createElement('tr'); 

        for (const key in this.arrayEmployees[0]) {
            tr.innerHTML += `<th>${key}</th>`;
        } 

        thead.appendChild(tr); 
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        this.arrayEmployees.forEach(item => {
            const tr = document.createElement('tr');
            
            for (const key in item) { 
                const td = document.createElement('td');
                td.textContent = item[key];
                tr.appendChild(td);
            }

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        document.body.appendChild(table);
    }
}

const empTable = new EmpTable(bankEmployees);
empTable.getHtml();