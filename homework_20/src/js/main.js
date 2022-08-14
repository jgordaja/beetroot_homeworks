const cards = document.querySelectorAll('.flip-card-inner');

window.setInterval( function() { 
    let index = Math.floor((Math.random() * cards.length-1) + 1);
    // console.log(index);

    cards[index].classList.add('is-active');

    setTimeout( function() {
        cards[index].classList.remove('is-active');
    }, 2000);

}, 2000);