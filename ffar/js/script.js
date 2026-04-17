/**
 *FFAR Final Project
 * Ashmitha Kanagiah
 * 
 * An abstract animation that engages magic. This visually pleasing work radiates magic.
 * The colors, the movement and the vagueness of it engages how I visualize magic. 
 * Magic can have different interpretation, for me it is something beautiful and ethereal.
 * Like how code can produce artworks that are really nice.
 *.
 */

"use strict";

let particles = [];
let totalParticles = 5000;

let scrollX = 0;
let glitchTimers = [];
let glitchDuration = 5;

let codeString = `









function setup() {
    createCanvas(2000, 1200);

    for (let i = 0; i < totalParticles; i++) {
        let x = random(width);
        let y = random(height);

        particles.push({
            x: x,
            y: y,
            startX: x,
            startY: y,
            speed: random(1, 2),
            seed: random(500)
        });
    }
}

function glitchChar(c) {
    let chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]();=+-*/";

    if (random() < 0.85) return c;

    let index = floor(random(chars.length));
    return chars[index];
}
    
function draw() {
   background(0);

    fill(255, 255, 255);
    noStroke();

    scrollX += 2;

    let spacing = 13;
    let lines = codeString.split("");

    for (let p of particles) {
        let n = noise(p.x * 0.003, p.y * 0.003, frameCount * 0.005);
        let angle = n * TWO_PI * 2;

        p.x += cos(angle) * p.speed;
        p.y += sin(angle) * p.speed;

        p.x += (p.startX - p.x) * 0.007;
        p.y += (p.startY - p.y) * 0.007;

        let sparkle = noise(p.seed + frameCount * 0.08);
        let size = map(sparkle, 0, 1, 0.6, 2);
        let alpha = map(sparkle, 0, 1, 40, 180);

        push();
        fill(255, min(alpha + 30, 255));
        noStroke();
        ellipse(p.x, p.y, size);
        pop();
    }
}

`;

function setup() {
    createCanvas(2000, 1200);

    textFont("Courier New");
    textSize(15);

    for (let i = 0; i < totalParticles; i++) {
        let x = random(width);
        let y = random(height);

        particles.push({
            x: x,
            y: y,
            startX: x,
            startY: y,
            speed: random(1, 2),
            seed: random(500)
        });
    }
}

function glitchChar(c) {
    let chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]();=+-*/";

    if (random() < 0.85) return c;

    let index = floor(random(chars.length));
    return chars[index];
}

function draw() {
    background(0);

    fill(255, 255, 255);
    noStroke();

    scrollX += 2;

    let spacing = 13;
    let lines = codeString.split("\n");

    for (let y = 0; y < height; y += spacing) {

        if (y / spacing >= lines.length) {
            continue;
        }

        let line = lines[y / spacing];
        let x = scrollX % width;

        let glitched = "";

        for (let i = 0; i < line.length; i++) {

            let original = line[i];

            if (!glitchTimers[i]) {
                glitchTimers[i] = 0;
            }

            if (glitchTimers[i] === 0 && random() < 0.02) {
                glitchTimers[i] = glitchDuration;
            }

            if (glitchTimers[i] > 0) {
                glitched += glitchChar(original);
                glitchTimers[i]--;
            } else {
                glitched += original;
            }
        }

        text(glitched, x, y);
        text(glitched, x - width, y);
    }

    for (let p of particles) {
        let n = noise(p.x * 0.003, p.y * 0.003, frameCount * 0.005);
        let angle = n * TWO_PI * 2;

        p.x += cos(angle) * p.speed;
        p.y += sin(angle) * p.speed;

        p.x += (p.startX - p.x) * 0.007;
        p.y += (p.startY - p.y) * 0.007;

        let sparkle = noise(p.seed + frameCount * 0.08);
        let size = map(sparkle, 0, 1, 0.6, 1.5);
        let alpha = map(sparkle, 0, 1, 40, 180);

        push();
        fill(255, min(alpha + 30, 255));
        noStroke();
        ellipse(p.x, p.y, size);
        pop();
    }
}