let particles = [];
let maxParticles = 1200;

function setup() {
    createCanvas(1200, 650);
    colorMode(HSB, 360, 100, 100, 100);
    background(0);
}

function draw() {
    noStroke();
    fill(0, 0, 0, 10);
    rect(0, 0, width, height);

    if (particles.length < maxParticles) {
        for (let i = 0; i < 15; i++) {
            particles.push(createParticle());
        }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];

        let n = noise(p.x * 0.002, p.y * 0.002, frameCount * 0.03) * TWO_PI * 2;
        let swirlX = cos(n) * 0.2;
        let swirlY = sin(n) * 0.2;
        p.vx += swirlX;
        p.vy += swirlY;

        //air drag
        p.vx *= 0.99;
        p.vy *= 0.99;

        //move particle
        p.x += p.vx;
        p.y += p.vy;

        //fade
        p.alpha -= 0.9;
        p.size *= 0.990;

        noStroke();
        fill(p.hue, p.sat, p.brightness, p.alpha);
        ellipse(p.x, p.y, p.size);

        //removeee but maybe change this
        if (p.alpha <= 0 || p.size <= 0.5) {
            particles.splice(i, 1);
        }
    }
}

function createParticle() {
    let x = random(width);
    let y = random(height);

    let angle = random(TWO_PI);
    let speed = random(0.5, 2);
    let vx = cos(angle) * speed;
    let vy = sin(angle) * speed;

    return {
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        size: random(4, 10),
        alpha: random(50, 90),
        hue: random(300, 330),
        sat: random(50, 80),
        brightness: random(80, 100)
    };
}
