/* 🎵 MUSIC – autoplay after first touch */
const bgm = document.getElementById("bgm");
bgm.volume = 0;

function fadeInMusic() {
    bgm.play();
    let v = 0;
    const fade = setInterval(() => {
        v += 0.02;
        if (v >= 0.4) {
            bgm.volume = 0.4;
            clearInterval(fade);
        } else {
            bgm.volume = v;
        }
    }, 200);
}

document.body.addEventListener("click", fadeInMusic, { once: true });


/* ✨ TYPEWRITER TEXT */
const message =
"Hey Vaishuuu 🙂\n\n\
Ye koi letter nahi hai.\n\
Bas ek chhota sa pal.\n\n\
Tumhari ek baat hamesha achi lagti hai —\n\
tum bina koshish kiye bhi\n\
logon ko safe feel karwa deti ho.\n\n\
Isliye ye moment,\n\
tumhare liye yahin chhod diya.\n\n\
Jab bhi kabhi life thodi loud lage,\n\
yahan thoda sa calm mil jaye 💫";

let i = 0;
const speed = 55;
const textEl = document.getElementById("text");

(function typeWriter() {
    if (i < message.length) {
        textEl.textContent += message.charAt(i++);
        setTimeout(typeWriter, speed);
    }
})();

/* 💛 HIDDEN NAME (heart tap 5 times) */
let taps = 0;
heart.addEventListener("click", () => {
    taps++;
    if (taps === 5) {
        alert("For you, Vaishuuu 💛");
        taps = 0;
    }
});

/* 💌 SECRET LINE – MULTI LEVEL */

// 2 sec long press
let pressTimer;
document.body.addEventListener("touchstart", () => {
    pressTimer = setTimeout(() => {
        alert(
            "Vaishuuu, tumhara hona\n" +
            "kabhi loud nahi hota,\n" +
            "par hamesha kaafi hota hai 💛"
        );
    }, 2000);
});

document.body.addEventListener("touchend", () => {
    clearTimeout(pressTimer);
});

// 4 sec long press (deeper secret)
document.body.addEventListener("touchstart", () => {
    pressTimer = setTimeout(() => {
        alert(
            "Kuch log yaadein nahi dete,\n" +
            "wo khud yaad ban jaate hain.\n" +
            "Tum unme se ho 🌙"
        );
    }, 4000);
});

// Heart 10 taps = deepest secret
let heartTaps = 0;
heart.addEventListener("click", () => {
    heartTaps++;
    if (heartTaps === 10) {
        alert(
            "Agar kabhi tum khud ko kam samjho,\n" +
            "to yaad rakhna —\n" +
            "kisi ke liye tum already enough ho.\n\n" +
            "— Aryan"
        );
        heartTaps = 0;
    }
});


/* ⏭️ SCREENS */
function nextScreen() {
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");

    setTimeout(() => {
        screen2.classList.add("hidden");
        screen3.classList.remove("hidden");

        const d = new Date();
        date.textContent = "Created on " + d.toDateString();
    }, 6000);
}

/* 🌌 STARS + 🌠 SHOOTING STAR */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let stars = Array.from({ length: 130 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4,
    s: Math.random() * 0.25
}));

let shootingStar = null;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";

    stars.forEach(s => {
        s.y += s.s;
        if (s.y > canvas.height) s.y = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
    });

    if (Math.random() < 0.002) {
        shootingStar = {
            x: Math.random() * canvas.width,
            y: 0,
            vx: 6,
            vy: 6
        };
    }

    if (shootingStar) {
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - 60, shootingStar.y - 60);
        ctx.strokeStyle = "#fff";
        ctx.stroke();

        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;

        if (shootingStar.y > canvas.height) shootingStar = null;
    }

    requestAnimationFrame(animate);
}
animate();

