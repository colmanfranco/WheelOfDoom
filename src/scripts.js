//ARRAY PLAYER OBJECTS
const players = [
    {
         id: 1,
         name:"Ceci",
         dead: false
     },
     {
         id: 2,
         name:"Lau",
         dead: false
     },
     {
         id: 3,
         name:"Gerard",
         dead: false
     },
     {
         id: 4,
         name:"Sergi",
         dead: false
     },
     {
         id: 5,
         name:"Emma",
         dead: false
     },
     {
         id: 6,
         name:"Alvaro",
         dead: false
     },
     {
         id: 7,
         name:"Susan",
         dead: false
     },
     {
         id: 8,
         name:"Josu",
         dead: false
     },
     {
         id: 9,
         name:"Franco",
         dead: false
     },
     {
         id: 10,
         name:"Feyi",
         dead: false
     },
     {
         id: 11,
         name:"Ezequiel",
         dead: false
     },
     {
         id: 11,
         name:"Vessy",
         dead: false
     },
 ];
  
 //Import from json coders to players array
function codersImport() {}

//State aplication
const state = {
    randomNumber: "",
    randomPlayerId: "player"+randomNumber+1,
    run: false
};


printWheel();

function printWheel() {
    const wheel = document.getElementById("wheel");
    let html = ``;
    players.map((member) => {
        if (member.dead) {
            html += memberComponentConstructor(member, 'dead');
        } else {
        html += memberComponentConstructor(member, 'alive');
        }

    })
    wheel.innerHTML = html;
}

function memberComponentConstructor(member, state) {
    return `<div class='player ${state}' id='player${member.id}'>
            ${member.name}
        </div>`
}

//Change selected player randomly in state
function randomNumber() {
    setInterval( function () {
        const index = Math.floor(Math.random() * players.length);
        if (!players[index].dead && state.run) {
            state.randomNumber = index;
            changeStylePlayer();
        }
    }, 250);
}

function changeStylePlayer() {
    let player = `player${state.randomNumber+1}`;
    let playerDOM = document.getElementById(player);
    playerDOM.classList.toggle("player-selected")
}

function play() {
    state.run = true;
    randomNumber();
}

function stop(){
    state.run = false;
}

function kill() {
    let text = players[state.randomNumber].name;
    alert(text)
    stop();
    players[state.randomNumber].dead=true;
    printWheel();
}

function reset() {
    for (let i = 0; i < players.length; i++) {
        players[i].dead = false;
    }
    printWheel();
}
    