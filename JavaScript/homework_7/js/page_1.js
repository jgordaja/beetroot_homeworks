const playList = [ 
    {

        author: "LED ZEPPELIN",

        song:"STAIRWAY TO HEAVEN"

    },

    {

        author: "QUEEN",

        song:"BOHEMIAN RHAPSODY"

    },

    {

        author: "LYNYRD SKYNYRD",

        song:"FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song:"SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song:"ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song:"BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song:"WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song:"ENTER SANDMAN"

    }

];

const olNode = document.querySelector('#playList');

playList.forEach( item => {
    let li = document.createElement('li');

    li.textContent = item.author + " - " + item.song;
    li.setAttribute('class', 'list-item');

    olNode.appendChild(li);
});