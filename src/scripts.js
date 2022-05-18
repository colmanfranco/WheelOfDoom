//ARRAY PLAYER OBJECTS
const teamMembers = [
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
  
 //Import from json coders to teamMembers array
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
    teamMembers.map((member) => {
        if (member.dead) {
            html += memberComponentConstructor(member, 'dead');
        } else {
        html += memberComponentConstructor(member, 'alive');
        }

    })
    wheel.innerHTML = html;
}

<<<<<<< HEAD
function constructString(member, state) {
    return `<div class='player ${state}' id='member-${member.id}'>
=======
function memberComponentConstructor(member, state) {
    return `<div class='player ${state}' id='player${member.id}'>
>>>>>>> 63e916f18707e3ce161a36edebb00ab0e9e0f006
            ${member.name}
        </div>`
}

function play() {
    state.run = true;
    randomNumber();
}

function randomNumber() {
    setInterval( () => {
        const index = getMemberIndex();
        if (!teamMembers[index].dead && state.run) {
            state.randomNumber = index;
            setCookie('name', teamMembers[index].name, 30)
            changeStylePlayer();
        }
    }, 300);
}

function getMemberIndex() {
    return Math.floor(Math.random() * teamMembers.length);
}

function changeStylePlayer() {
    let player = `member-${state.randomNumber+1}`;
    let playerDOM = document.getElementById(player);
    setInterval( function () {
        playerDOM.classList.toggle("player-selected")    
    }, 500)
}

function stop() {
    state.run = false;
}

function kill() {
    const text = teamMembers[state.randomNumber].name;
    alert(text)
    stop();
    changeMemberState();
    printWheel();
}

function changeMemberState() {
    teamMembers[state.randomNumber].dead=true;
}

function reset() {
    teamMembers.map((member) => { member.dead = false; })
    printWheel();
}

function setCookie(name, value, expiringDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expiringDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}