"use strict";

let smoke = [];
let clouds = [];

function setup() {
    createCanvas(1200, 600);
    noStroke();

    //smoke array push
    for (let i = 0; i < 65; i++) {
        smoke.push({
            x: random(width),
            y: random(100, 450),
            size: random(60, 140),
            speed: random(0.2, 0.7)
        });
    }
    //clouds array push
    for (let i = 0; i < 8; i++) {
        clouds.push({
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
    //sky gradient
    for (let y = 0; y < height; y++) {
        let topColor = color(90, 130, 160);
        let bottomColor = color(190, 160, 130);
        let skyColor = lerpColor(topColor, bottomColor, y / height);
        stroke(skyColor);
        line(0, y, width, y);
    }
    noStroke();
}

function drawClouds() {
    fill(255, 255, 255, 220);

    for (let i = 0; i < clouds.length; i++) {

        let cloud = clouds[i];
        cloud.x += cloud.speed;

        if (cloud.x > width + cloud.size) {
            cloud.x = -cloud.size;
            cloud.y = random(10, 300);
        }

        //middle ellipse body
        ellipse(cloud.x, cloud.y, cloud.size, cloud.size * 0.45);

        //top part
        ellipse(cloud.x - cloud.size * 0.3, cloud.y - cloud.size * 0.1, cloud.size * 0.85, cloud.size * 0.45);
        ellipse(cloud.x, cloud.y - cloud.size * 0.15, cloud.size * 0.6, cloud.size * 0.5);
        ellipse(cloud.x + cloud.size * 0.3, cloud.y - cloud.size * 0.1, cloud.size * 0.55, cloud.size * 0.45);

        //bottom part
        ellipse(cloud.x - cloud.size * 0.48, cloud.y + cloud.size * 0.06, cloud.size * 0.45, cloud.size * 0.3);
        ellipse(cloud.x + cloud.size * 0.48, cloud.y + cloud.size * 0.08, cloud.size * 0.45, cloud.size * 0.3);
    }
}

function drawSmoke() {
    for (let i = 0; i < smoke.length; i++) {

        let cloud = smoke[i];
        cloud.x += cloud.speed;
        cloud.y += sin(frameCount * 0.01 + i) * 0.2;

        if (cloud.x > width + cloud.size) {
            cloud.x = -cloud.size;
        }
        fill(60, 65, 70, 35);

        ellipse(cloud.x, cloud.y, cloud.size, cloud.size * 0.7);
        ellipse(cloud.x + cloud.size * 0.3, cloud.y - 20, cloud.size * 0.8, cloud.size * 0.6);
        ellipse(cloud.x - cloud.size * 0.3, cloud.y + 15, cloud.size * 0.7, cloud.size * 0.5);

    }
}