const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

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
    for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
    }
});

canvas.addEventListener('mousemove', function (event) { 
    mouse.x = event.x;
    mouse.y = event.y;
   // drawCircle();
});

//function drawCircle() {
////let radius = Math.round(Math.random() * 50);
//    let radius = 50;
//    ctx.fillStyle = 'red';
//    ctx.strokeStyle = 'white';
//    ctx.lineWidth = 5;
//    ctx.beginPath();
//    ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
//    ctx.fill();
//    ctx.stroke();
//}

function drawRect () {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 3;
    let rectX = 200;
    let rectY = 200;
    ctx.beginPath();
    ctx.rect(mouse.x-(rectX/2), mouse.y-(rectY/2), rectX, rectY);
    ctx.fill();
    ctx.stroke();
}

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 6 - 3;
        this.speedY = Math.random() * 6 - 3;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        let radius = 95;
        ctx.fillStyle = 'yellow';
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    
    }

}



function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   // drawCircle();
    handleParticles();
    requestAnimationFrame(animate);
}

//drawCircle();
animate();