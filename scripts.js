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
    number: "",
    run: false
};

//RENDER INIT WHEEL
printWheel();

//Import from json coders to players array
function codersImport() {}

//Print the wheel in DOM
function printWheel() {
let wheel = document.getElementById("wheel");

let html = ``;

for (let i = 0; i < players.length; i++) {
    let division = 360/players.length;
    let deg = i*division;
    if (players[i].dead === false) {
    // html += `<div class="player alive" id='player${players[i].id}'>${
    //     players[i].name
    // }</div>`;
    html +=`
    <div class="sect" style="transform: rotate(-${deg}deg); z-index: ${i}" id='player${players[i].id}>
      <h3 >${players[i].name}</h3>
    </div>`
    } else {
        html +=`
    <div class="sect" style="transform: rotate(-${deg}deg);" id='player${players[i].id}>
      <h3>${players[i].name}</h3>
    </div>`
    // html += `<div class="player dead" id='player${players[i].id}'>${players[i].name}</div>`;
     }
    
}
wheel.innerHTML = html;
}



//Change selected player randomly in state
function randomNumber() {
    if (state.run){
        setInterval( function () {
        let number = Math.floor(Math.random() * players.length);

        if (!players[number].dead&&state.run) {
            state.number = number;
            console.log(state.number)
            changeStylePlayer()
        }
        }, 1000);
    }
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
        console.log(i)
    }
    printWheel()   
}

//Change css player selected
function changeStylePlayer() {
    let player = `player${state.number+1}`;
    let playersDOM = document.getElementsByClassName('alive')
    console.log(playersDOM)
    let playerDOM = document.getElementById(player);
    playerDOM.classList.toggle("player-selected")
    console.log('playerid:' + player)
}

//Kill
function kill() {
    let text = 'kill '+ players[state.number].name+' number'+ state.number
    alert(text)
    stop();
    players[state.number].dead=true;
    printWheel();
}
    