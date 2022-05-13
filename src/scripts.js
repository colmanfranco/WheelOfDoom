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
  
//State aplication
const state = {
    randomNumber: "",
    randomPlayerId: "player"+randomNumber+1,
    run: false
};

//RENDER INIT WHEEL
printWheel();

//Import from json coders to players array
function codersImport() {}

//Print the wheel in DOM
function printWheel() {

    let wheel = document.getElementById("wheel");

    //ADD HTML IN ITERATION
    let html = ``;

    for (let i = 0; i < players.length; i++) {
        
        if (players[i].dead === false) {
        html += `
            <div class="player alive" id='player${players[i].id}'>
                ${players[i].name}
            </div>`;
        
        } else {
        html += `
            <div class="player dead" id='player${players[i].id}'>
                ${players[i].name}
            </div>`;
        }
    }
    //INJECT HTML
    wheel.innerHTML = html;
}



//Change selected player randomly in state
function randomNumber() {
        setInterval( function () {
        let number = Math.floor(Math.random() * players.length);

        if (!players[number].dead && state.run) {
            state.randomNumber = number;
            changeStylePlayer()
        }
    }, 500);
}

function play() {
    state.run = true;
    randomNumber();
}

function stop(){
    state.run = false;
}

//Reset all in players array
function reset() {
    for (let i = 0; i < players.length; i++) {
        players[i].dead = false;
    }
    printWheel();
}

//Change css player selected
function changeStylePlayer() {
    let player = `player${state.randomNumber+1}`;
    let playersDOM = document.getElementsByClassName('alive')
    console.log(playersDOM)
    let playerDOM = document.getElementById(player);
    playerDOM.classList.toggle("player-selected")
    console.log('playerid:' + player)
}

//Kill
function kill() {
    let text = players[state.randomNumber].name;
    alert(text)
    stop();
    players[state.randomNumber].dead=true;
    printWheel();
}
    