let listData = [
    {
        number: 1,
        name: 'АВРАМЕНКО Ольга Вікторівна',
        birthDate: '30.06.1981',
    },
    {
        number: 2,
        name: 'АЛХІМОВ Арсеній Євгенійович',
        birthDate: '15.03.1992',
    },
    {
        number: 3,
        name: 'АМБРУСЕВИЧ Олександр Антонович',
        birthDate: '22.02.1964',
    },
    {
        number: 10,
        name: 'БАБАЄВ Рустам Аріф Огли',
        birthDate: '18.10.1999',
    },
    {
        number: 22,
        name: 'ВОЛИНСЬКИЙ Сергій Ярославович',
        birthDate: '31.01.1992',
    },
    {
        number: 39,
        name: 'ГУСТАВССОН Матіас',
        birthDate: '03.06.1975',
    },
    {
        number: 47,
        name: 'ДІАНОВ Михайло Олександрович',
        birthDate: '01.05.1980',
    },
    {
        number: 144,
        name: 'ПРАВДОЛЮБОВ Іван Сергійович',
        birthDate: '02.02.1999',
    },
    {
        number: 171,
        name: 'СОВІНСЬКИЙ Сергій Євгенович',
        birthDate: '18.09.1972',
    },
    {
        number: 185,
        name: 'ФІЛІППОВА Олена Олександрівна',
        birthDate: '24.05.1976',
    },
    {
        number: 195,
        name: 'ЧЕРЕШНЯ Сергій Олександрович',
        birthDate: '23.11.1991',
    },
    {
        number: 213,
        name: 'ЯРЕМКО Олег Ігорович',
        birthDate: '10.06.1986',
    },
    {
        number: 215,
        name: 'ЯЦЮК Олександр Миколайович',
        birthDate: '24.04.1993',
    },

];

let sortField = 'number';
let order = 'asc';

const table = document.querySelector('.table tbody');

const [...fields] = document.querySelectorAll('.table th');

function renderData() {
    listData.forEach(item => {
        const tr = document.createElement('tr');

        for (const key in item) {
            const td = document.createElement('td');
            td.textContent = item[key];
            tr.appendChild(td);
        } 

        table.appendChild(tr);
    });
}

function clearTable() {
    table.innerHTML = '';
};

function sortHelper(sortByField) {
    switch (sortByField) {
        case 'number':
            return (a, b) => a[sortByField] > b[sortByField] ? 1 : -1; 
        // birthDate мав би конвертуватися в дату і вже потім сортуватися, але тут беру його як рядок
        // але в даному випадку він потрібен хоча б для того щоб при сортуіанні по ньому 
        // "перемішати рядки" та перевіряти сортування по іншим полям
        case 'birthDate':
        case 'name': 
            return (a, b) => a[sortByField].toLowerCase() > b[sortByField].toLowerCase() ? 1 : -1; 
    } 
}

fields.forEach(item => {
    item.addEventListener('click', function (event) {
        // console.log(event.target);
        // console.log(item.dataset.sort);
        const field = item.dataset.sort;
        listData.sort(sortHelper(field)); 
        clearTable();
        renderData(); 
    });
});

renderData(); 