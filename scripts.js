const players = [
    {
      id: 1,
      name: "name1",
      dead: true,
      img: ""
    },
    {
      id: 2,
  
      name: "name2",
      dead: false,
      img: ""
    },
    { id: 3, name: "name3", dead: false, img: "" },
    {
      id: 4,
      name: "name4",
      dead: false,
      img: ""
    },
    {
      id: 5,
      name: "name5",
      dead: false,
      img: ""
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
    if (players[i].dead === false) {
    html += `<div class="player alive" id='player${players[i].id}'>${
        players[i].name
    }</div>`;
    // html +=`<div class="circ">
    // <div class="sect">
    //   <h3>Sergi Virgili</h3>
    // </div>`
    } else {
    html += `<div class="player dead" id='player${players[i].id}'>${players[i].name}</div>`;
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
        }, 200);
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
    