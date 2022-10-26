const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCircle();
});

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});

canvas.addEventListener('mousemove', function (event) { 
    mouse.x = event.x;
    mouse.y = event.y;
    drawRect();
});

function drawCircle() {
    let radius = Math.round(Math.random() * 200);
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

function drawRect () {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;
    let randX = Math.round(Math.random() * 100);
    let randY = Math.round(Math.random() * 100);
    ctx.beginPath();
    ctx.rect(mouse.x, mouse.y, 50, randY);
    ctx.fill();
    ctx.stroke();
}

drawCircle();