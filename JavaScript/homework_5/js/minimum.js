// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const car = {
    manufacturer: 'Якийсь виробник',
    model: 'БТР',
    graduationYear: 2000,
    averageSpeed: 120.5,
    volumeFuelTank: 3.5,
    averageFuelConsumption: 2.5,
    drivers: ['Залужний'],
    showCar: function() {
        for (const key in this) { 
            if (key != 'showCar' && key != 'addDriver' && key != 'isDriver') {
                console.log(key, ' : ', this[key]);
            }
        } 
    },
    addDriver: function(value) {
        this.drivers.push(value);
    },
    isDriver: function(value) { 
        for (let i = 0; i < this.drivers.length; i++) { 
            if (value === this.drivers[i]) { 
                return true
            }
        }

        return false
    },
    calculationTimeAndAmountFuel: function(distance) {
        let time = distance / this.averageSpeed; 

        if (time > 4) {
            const countStop = Math.trunc(time / 4);
            time += countStop;
        }

        const fuelConsumption  = this.averageFuelConsumption / 100 * distance;

        return {time, fuelConsumption}
    }
};

car.showCar(); 
car.addDriver('ЗСУ');
car.showCar(); 
let driver = car.isDriver('Залужний');
console.log(driver);
driver = car.isDriver('ЗСУ');
console.log(driver);

let res = car.calculationTimeAndAmountFuel(1500);
console.log('Час', (res.time).toFixed(2), 'год');
console.log('Кількість палива', (res.fuelConsumption).toFixed(2), 'л');