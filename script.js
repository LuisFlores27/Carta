document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.querySelector(".heart-container");
    const textElement = document.createElement("h2");
    textElement.textContent = "Para el amor de mi vida 💌:";
    textElement.style.textAlign = "center";
    textElement.style.fontSize = "2em";
    textElement.style.color = "white";
    heartContainer.prepend(textElement);
    drawHeart();
});

function drawHeart() {
    const canvas = document.getElementById("heartCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    canvas.style.marginTop = "-100px";
    ctx.lineWidth = 3;
    
    let t = 0;
    function animateHeart() {
        t += 0.01;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        for (let i = 0; i < t * Math.PI * 2; i += 0.01) {
            let x = 200 + 100 * Math.pow(Math.sin(i), 3);
            let y = 200 - 60 * Math.cos(i) + 25 * Math.cos(2 * i) + 12 * Math.cos(3 * i) + 6 * Math.cos(4 * i);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        if (t < 1) {
            requestAnimationFrame(animateHeart);
        } else {
            fillHeartGradually();
        }
    }
    animateHeart();
}

function fillHeartGradually() {
    const canvas = document.getElementById("heartCanvas");
    const ctx = canvas.getContext("2d");
    let fillT = 0;

    function animateFill() {
        fillT += 0.010; 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawHeartPath(ctx); 

        ctx.fillStyle = "#ff0000"; 
        ctx.globalCompositeOperation = "source-over"; 

        ctx.beginPath();
        for (let i = 0; i < fillT * Math.PI * 2; i += 0.01) {
            let x = 200 + 100 * Math.pow(Math.sin(i), 3);
            let y = 200 - 60 * Math.cos(i) + 25 * Math.cos(2 * i) + 12 * Math.cos(3 * i) + 6 * Math.cos(4 * i);
            ctx.lineTo(x, y);
        }
        ctx.lineTo(200, 200); 
        ctx.fill();

        if (fillT < 1) {
            requestAnimationFrame(animateFill); 
        }
    }

    animateFill();
}

function drawHeartPath(ctx) {
    let t = 1;
    ctx.beginPath();
    for (let i = 0; i < t * Math.PI * 2; i += 0.01) {
        let x = 200 + 100 * Math.pow(Math.sin(i), 3);
        let y = 200 - 60 * Math.cos(i) + 25 * Math.cos(2 * i) + 12 * Math.cos(3 * i) + 6 * Math.cos(4 * i);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const whyNoText = document.getElementById("whyNo");

let yesSize = 1;
let noSize = 1;

let noButtonClickCount = 0; 
const messages = [
    "¿Por qué le das no? ¿No me amas?",
    "¿A poco si gordisss?",
    "Te estas pasando eh esperancitaaa",
    "¿Tienes a otro acaso?",
    "Te vas a quedar conmigo quieras o no jijiji"
];  

noButton.addEventListener("click", function() {
    noSize -= 0.2;
    yesSize += 0.3;
    noButton.style.transform = `scale(${Math.max(noSize, 0)})`;
    yesButton.style.transform = `scale(${yesSize})`;

    if (noButtonClickCount < messages.length) {
        whyNoText.textContent = messages[noButtonClickCount]; 
        whyNoText.classList.remove("hidden");  
        noButtonClickCount++;  
    }

    if (noSize <= 0) {
        noButton.style.display = "none";
    }
});

yesButton.addEventListener("click", function() {
    yesButton.textContent = "Por supuesto que vamos a estar juntos toda la vida bby jijiji 😚😉";
    yesButton.style.backgroundColor = "#28a745";  
    noButton.disabled = true; 
    noButton.style.cursor = "not-allowed";
    noButton.style.opacity = "0.5"; 

    yesSize = 1;
    noSize = 1;
    yesButton.style.transform = `scale(${yesSize})`;
    noButton.style.transform = `scale(${noSize})`;

    whyNoText.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function() {
    const numParticles = 30; // Número de partículas
    for (let i = 0; i < numParticles; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 8 + 3}s`; // Variar duración
        particle.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio
        document.body.appendChild(particle);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const photo = document.querySelector(".photo");
    setTimeout(() => {
        photo.classList.add("show");
    }, 500); // Retraso de 0.5 segundos antes de que aparezca
});

document.addEventListener("DOMContentLoaded", () => {
    const photo = document.querySelector(".photo");

    photo.addEventListener("click", (event) => {
        // Crear un elemento de corazón
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Posicionar el corazón donde se hizo clic
        let x = event.clientX;
        let y = event.clientY;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Agregar el corazón al body
        document.body.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 1500);
    });
});
