let counter = document.getElementById('counter');

let count = 0;
let count2 = 0;
const sound = new Audio('sound.mp3');

function Pl() {
    count++;
    count2++;
    counter.innerHTML = count;
    if (count2 == 33) {
        sound.play();
        count2 = 0;
    }
    
}

function Ms() {
    count--;
    count2--;
    counter.innerHTML = count;
    if (count <= 0) {
        count = 0;
        count2 = 0;
        counter.innerHTML = count;
    }
}

function Rs() {
    count = 0;
    count2 = 0;
    counter.innerHTML = count;
}