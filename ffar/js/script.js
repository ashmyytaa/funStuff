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
let glitchTimer = 0;
let glitchPositions = [];

let codeString = `
function setup() {
    createCanvas(1280, 815);

    textFont("Courier New");
    textSize(10);

    for (let i = 0; i < totalParticles; i++) {
        let x = random(width);
        let y = random(height);

        particles.push({
            x: x,
            y: y,
            startX: x,
            startY: y,
            speed: random(1, 2),
            seed: random(1000)
        });
    }
}
function draw() {
    background(0);

    fill(255, 255, 255);
    noStroke();

    scrollX += 0.5;
    let spacing = 16;
    let lines = codeString.split("");

    for (let y = 0; y < height; y += spacing) {

        if (y / spacing >= lines.length) {
            continue;
        }
        let line = lines[y / spacing];
        let x = scrollX % width;

        text(line, x, y);
        text(line, x - width, y);
    }
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
    textSize(10);

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

    // small chance to keep original character
    if (random() < 0.85) return c;

    return random(chars);
}

function draw() {
    background(0);
    glitchTimer++;


    fill(255, 255, 255);
    noStroke();

    scrollX += 0.5;

    let spacing = 13;
    let lines = codeString.split("\n");

    for (let y = 0; y < height; y += spacing) {

        if (y / spacing >= lines.length) {
            continue;
        }
        let line = lines[y / spacing];
        let x = scrollX % width;

        //  text(line, x, y);
        let glitched = "";

        for (let i = 0; i < line.length; i++) {

            let c = line[i];

            // only glitch occasionally (slow rhythm)
            if (glitchTimer % 30 === 0 && random() < 0.08) {
                let chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]();=+-*/";
                c = glitchChar(c);
            }

            glitched += c;
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
        let size = map(sparkle, 0, 1, 0.6, 2);
        let alpha = map(sparkle, 0, 1, 40, 180);

        push();
        fill(255, min(alpha + 30, 255));
        noStroke();
        ellipse(p.x, p.y, size);
        pop();
    }
}