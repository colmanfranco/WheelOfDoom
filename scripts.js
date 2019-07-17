//ARRAY PLAYER OBJECTS
const players = [
    {
         id: 1,
         name:"Alexandro",
         dead: false
     },
     {
         id: 2,
         name:"Amau",
         dead: false
     },
     {
         id: 3,
         name:"Camilo",
         dead: false
     },
     {
         id: 4,
         name:"Carlos",
         dead: false
     },
     {
         id: 5,
         name:"Delfina",
         dead: false
     },
     {
         id: 6,
         name:"Enric",
         dead: false
     },
     {
         id: 7,
         name:"Erik",
         dead: false
     },
     {
         id: 8,
         name:"Ferran",
         dead: false
     },
     {
         id: 9,
         name:"Franco",
         dead: false
     },
     {
         id: 10,
         name:"Janina",
         dead: false
     },
     {
         id: 11,
         name:"Jason",
         dead: false
     },
     {
         id: 12,
         name:"Kavan",
         dead: false
     },
     {
         id: 13,
         name:"Manuela",
         dead: false
     },
     {
         id: 14,
         name:"Nathalia",
         dead: false
     },
     {
         id: 15,
         name:"Nellay",
         dead: false
     },
     {
         id: 16,
         name:"Noelia",
         dead: false
     },
     {
         id: 17,
         name:"Nuria",
         dead: false
     },
     {
         id: 18,
         name:"Raul",
         dead: false
     },
     {
         id: 19,
         name:"Sergi",
         dead: false
     },
     {
         id: 20,
         name:"Shuangjie",
         dead: false
     },
     {
         id: 21,
         name:"Solomon",
         dead: false
     },
     {
         id: 22,
         name:"Unai",
         dead: false
     },
     {
         id: 23,
         name:"Andres",
         dead: false
     },
     {
         id: 24,
         name:"Thierry",
         dead: false
     }
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

        if (!players[number].dead&&state.run) {
            state.randomNumber = number;
            console.log(state.randomNumber)
            changeStylePlayer()
        }
        }, 200);
    
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
    printWheel()   
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
    let text = 'kill '+ players[state.randomNumber].name+' number'+ state.randomNumber
    alert(text)
    stop();
    players[state.randomNumber].dead=true;
    printWheel();
}
    