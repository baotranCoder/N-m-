function UX() {
  bnner.classList.remove('AppleBanNer');
  bnner.style.opacy = '1.5s';
  bnner.classList.add('Banner');
}

function UI() {
  bnner.classList.add('AppleBanNer');
  bnner.classList.remove('Banner');
}

let dataIcon = document.getElementById('dataIcon');
let Icon = document.querySelector(".Icon");

let txt = document.querySelectorAll('h5, p, i, h1');
let bg = document.querySelectorAll('.AppleY, .tab, .item');

let bnner = document.querySelector('.AppleBanNer');

let ga = false;

Icon.addEventListener('click', function(){
  ga =! ga;
  
  txt.forEach(t => {
    t.style.color = ga ? '#fff' : '#222327';
    t.style.transition = 'color 2s ease';
  });
  
  bg.forEach(w => {
    w.style.background = ga ? '#222327' : 'white';
    w.style.transition = 'background 2s ease';
  });
  
    ga ? UX() : UI();
});

/*
**** (-_-) Tuyết rơi theo gió 
*/

const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

class Snowflake {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        
        this.y = Math.random() * canvas.height; 
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random();
    }

    update() {
        this.y += this.speed;
        this.x += this.wind + Math.sin(this.y * 0.01) * 0.5;

        if (this.y > canvas.height) {
            this.y = -this.radius; this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
    }
}

function initSnow(count = 200) {
    snowflakes = [];
    for (let i = 0; i < count; i++) {
        snowflakes.push(new Snowflake());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(flake => {
        flake.update();
        flake.draw();
    });

    requestAnimationFrame(animate);
}

initSnow(300);
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initSnow(300); 
});