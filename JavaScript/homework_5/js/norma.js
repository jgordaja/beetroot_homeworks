// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
// Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let timeObject = {
    seconds: 0,
    minutes: 21, 
    hours: 0,
    // секунд в добі, для переходу через 24 години
    SECONDS_IN_DAY: 86400, // 24:00:00 
    // метод для виведення часу на екран
    printTime() { 
        const seconds = this.seconds < 10 ? '0'+this.seconds : this.seconds;
        const minutes = this.minutes < 10 ? '0'+this.minutes : this.minutes;
        const hours = this.hours < 10 ? '0'+this.hours : this.hours;

        console.log(`Час: ${hours}:${minutes}:${seconds}`);
    },
    // переводимо весь час в секунди
    allTimeInSeconds()  {
        return this.seconds + this.minutes * 60 + this.hours * 3600;
    },
    // перерахунок часу через секунди
    changeTime(allTime) {
        let newAllTime;
        
        // перехід через добу / кілька діб
        if (allTime > this.SECONDS_IN_DAY) {
            const countDays = Math.trunc(allTime / this.SECONDS_IN_DAY);
            newAllTime = allTime - this.SECONDS_IN_DAY * countDays;
        } else {
            newAllTime = allTime;
        }

        if (newAllTime >= 3600) {
            this.hours = Math.trunc(newAllTime / 3600); 
            this.minutes = Math.trunc((newAllTime - this.hours * 3600) / 60); 
            this.seconds = newAllTime - this.hours * 3600 - this.minutes * 60;
        } else if (newAllTime >= 60 && newAllTime < 3600) { 
            this.minutes = Math.trunc(newAllTime / 60); 
            this.seconds = newAllTime - this.minutes * 60; 
        } else if (newAllTime < 60) {
            this.seconds = newAllTime; 
        }
    },
    // зміна часу на передану кількість секунд
    addSeconds(seconds) {
        let allTime = this.allTimeInSeconds();

        allTime += seconds;

        this.changeTime(allTime);
    },
    // зміна часу на передану кількість хвилин
    addMinutes(minutes) {
        let allTime = this.allTimeInSeconds();

        allTime += minutes * 60;

        this.changeTime(allTime);
    },
    // зміна часу на передану кількість годин
    addHours(hours) {
        let allTime = this.allTimeInSeconds();

        allTime += hours * 3600;

        this.changeTime(allTime);
    },
};

// початковий час 00:21:00

// timeObject.addHours(25); // + 25год
// timeObject.addHours(3); // + 3год
// timeObject.addHours(23); // +23год
// timeObject.addMinutes(75); // + 1год 15хв
// timeObject.addMinutes(32); // + 32хв
// timeObject.addSeconds(90182); // + 1доба 1год 3хв 2с
// timeObject.addSeconds(86402); // + 1доба 2сек
timeObject.addSeconds(12090); //  + 3год 21хв 30с

timeObject.printTime();