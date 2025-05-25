const h = document.querySelector('#h');
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${y * 4 + 75}deg)
        rotateZ(${-x * 12 + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener('pointermove', base);

const tv = document.querySelector('.tv');
const overlay = document.getElementById('tv-game-overlay');
const closeBtn = document.getElementById('close-tv-game');
const gameFrame = document.getElementById('tv-game-frame');

const marioURL = "https://www.retrogames.cc/embed/41962-sriginal-sunset-wilds-title-card-sprites.html";

tv.addEventListener('click', () => {
    overlay.style.display = 'flex';
    gameFrame.src = marioURL;
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    gameFrame.src = "";
});
