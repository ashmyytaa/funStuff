"use strict";

let smokeClouds = [];
let whiteClouds = [];

function setup() {
    createCanvas(900, 600);
    noStroke();

    // Smoke
    for (let i = 0; i < 25; i++) {
        smokeClouds.push({
            x: random(width),
            y: random(100, 450),
            size: random(60, 140),
            speed: random(0.2, 0.7)
        });
    }

    // White clouds
    for (let i = 0; i < 8; i++) {
        whiteClouds.push({
            x: random(width),
            y: random(40, 220),
            size: random(80, 150),
            speed: random(0.4, 0.8)
        });
    }
}

function draw() {
    drawSky();
    drawClouds();
    drawSmoke();
}

function drawSky() {

    // Sky gradient
    for (let y = 0; y < height; y++) {

        let topColor = color(90, 130, 160);
        let bottomColor = color(190, 160, 130);

        let skyColor = lerpColor(topColor, bottomColor, y / height);

        stroke(skyColor);
        line(0, y, width, y);
    }

    noStroke();

    // Light haze
    fill(90, 80, 75, 20);
    rect(0, 0, width, height);
}

function drawClouds() {

    // Solid white clouds
    fill(255);

    for (let i = 0; i < whiteClouds.length; i++) {

        let cloud = whiteClouds[i];

        cloud.x += cloud.speed;

        if (cloud.x > width + cloud.size) {
            cloud.x = -cloud.size;
            cloud.y = random(40, 220);
        }

        // Main body
        ellipse(
            cloud.x,
            cloud.y,
            cloud.size,
            cloud.size * 0.45
        );

        // Top bumps
        ellipse(
            cloud.x - cloud.size * 0.3,
            cloud.y - cloud.size * 0.1,
            cloud.size * 0.55,
            cloud.size * 0.45
        );

        ellipse(
            cloud.x,
            cloud.y - cloud.size * 0.15,
            cloud.size * 0.6,
            cloud.size * 0.5
        );

        ellipse(
            cloud.x + cloud.size * 0.3,
            cloud.y - cloud.size * 0.1,
            cloud.size * 0.55,
            cloud.size * 0.45
        );

        // Bottom bumps
        ellipse(
            cloud.x - cloud.size * 0.18,
            cloud.y + cloud.size * 0.08,
            cloud.size * 0.45,
            cloud.size * 0.3
        );

        ellipse(
            cloud.x + cloud.size * 0.18,
            cloud.y + cloud.size * 0.08,
            cloud.size * 0.45,
            cloud.size * 0.3
        );
    }
}

function drawSmoke() {

    for (let i = 0; i < smokeClouds.length; i++) {

        let cloud = smokeClouds[i];

        cloud.x += cloud.speed;
        cloud.y += sin(frameCount * 0.01 + i) * 0.2;

        if (cloud.x > width + cloud.size) {
            cloud.x = -cloud.size;
        }

        fill(60, 65, 70, 25);

        ellipse(
            cloud.x,
            cloud.y,
            cloud.size,
            cloud.size * 0.7
        );

        ellipse(
            cloud.x + cloud.size * 0.3,
            cloud.y - 20,
            cloud.size * 0.8,
            cloud.size * 0.6
        );

        ellipse(
            cloud.x - cloud.size * 0.3,
            cloud.y + 15,
            cloud.size * 0.7,
            cloud.size * 0.5
        );
    }
}