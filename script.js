// ============================================================
// PARTICULAS
// ============================================================

const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = canvas.clientWidth;

    canvas.height = canvas.clientHeight;

}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


// ============================================================
// CREAR PARTICULAS
// ============================================================

const particles = [];

const colores = [
    "#ffffff",
    "#ffd700",
    "#ff8ac5",
    "#fff2a6"
];


for (let i = 0; i < 130; i++) {

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        radius:
            Math.random() * 3 + 1,

        speed:
            Math.random() * 0.8 + 0.2,

        color:
            colores[
                Math.floor(
                    Math.random()
                    * colores.length
                )
            ],

        alpha:
            Math.random()

    });

}


// ============================================================
// ANIMAR PARTICULAS
// ============================================================

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.y -=
                particle.speed;


            particle.alpha +=
                (Math.random() - 0.5)
                * 0.08;


            if (particle.alpha < 0.2) {

                particle.alpha = 0.2;

            }


            if (particle.alpha > 1) {

                particle.alpha = 1;

            }


            if (particle.y < -10) {

                particle.y =
                    canvas.height + 10;

                particle.x =
                    Math.random()
                    * canvas.width;

            }


            ctx.beginPath();


            ctx.globalAlpha =
                particle.alpha;


            ctx.fillStyle =
                particle.color;


            ctx.shadowBlur = 10;

            ctx.shadowColor =
                particle.color;


            ctx.arc(

                particle.x,

                particle.y,

                particle.radius,

                0,

                Math.PI * 2

            );


            ctx.fill();

        }
    );


    ctx.globalAlpha = 1;

    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();


// ============================================================
// EXPLOSIONES DE PARTICULAS
// ============================================================

function explosion(x, y) {

    for (let i = 0; i < 35; i++) {

        const angle =
            Math.random()
            * Math.PI
            * 2;

        const speed =
            Math.random()
            * 3 + 1;


        particles.push({

            x: x,

            y: y,

            radius:
                Math.random()
                * 3 + 1,

            speed:
                speed,

            color:
                colores[
                    Math.floor(
                        Math.random()
                        * colores.length
                    )
                ],

            alpha: 1

        });

    }

}


// ============================================================
// EXPLOSIONES AUTOMATICAS
// ============================================================

setInterval(() => {

    explosion(

        Math.random()
        * canvas.width,

        Math.random()
        * canvas.height
        * 0.7

    );

}, 1700);


// ============================================================
// ANIMACION DEL TEXTO
// ============================================================

const birthdayText =
    document.querySelector(
        ".birthday-text"
    );


let scale = 1;

let growing = true;


function animateText() {

    if (growing) {

        scale += 0.0008;

        if (scale >= 1.04) {

            growing = false;

        }

    } else {

        scale -= 0.0008;

        if (scale <= 1) {

            growing = true;

        }

    }


    birthdayText.style.transform =
        `scale(${scale})`;


    requestAnimationFrame(
        animateText
    );

}


animateText();


// ============================================================
// CAMBIAR TEXTO
// ============================================================

const mensajes = [

    ["Happy Birthday", "my Love!"],

    ["Happy Birthday", "mi Amor! ❤️"],

    ["Feliz Cumpleaños", "mi Amor! 💕"]

];


let mensajeActual = 0;

setInterval(() => {

    mensajeActual++;

    if (
        mensajeActual
        >= mensajes.length
    ) {

        mensajeActual = 0;

    }


    const spans =
        birthdayText
        .querySelectorAll("span");


    spans[0].textContent =
        mensajes[
            mensajeActual
        ][0];


    spans[1].textContent =
        mensajes[
            mensajeActual
        ][1];


}, 3500);


// ============================================================
// PANTALLA FINAL
// ============================================================

// El video original termina aproximadamente
// después de 17 segundos.
//
// Si quieres que termine automáticamente,
// descomenta el siguiente bloque.

/*

setTimeout(() => {

    document.getElementById(
        "finalScreen"
    ).style.display = "flex";

}, 17000);

*/