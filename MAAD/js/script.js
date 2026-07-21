"use strict";

let flowers = [];

function setup() {
    createCanvas(1200, 600);
    noStroke();

    let sakuraColorOne = color(255, 242, 245); // lighter color 
    let sakuraColorTwo = color(240, 141, 182); // more pinker color

    for (let i = 0; i < 60; i++) { // 60 flowers in total
        flowers.push({
            x: random(width),
            y: random(height),
            size: random(60, 85),
            dx: random(0.5, 1.9), //change in x
            dy: random(-0.5, 0.5), //change in y
            angle: random(TWO_PI / 2),
            spin: random(-0.05, 0.04),

            //2 colors for each flower's gradient
            c1: lerpColor(sakuraColorOne, sakuraColorTwo, random()),
            c2: lerpColor(sakuraColorOne, sakuraColorTwo, random())
        });
    }
}

function draw() {
    drawBackground();

    //move flowers
    for (let i = 0; i < flowers.length; i++) {
        let f = flowers[i];

        f.x += f.dx;
        f.y += f.dy;
        f.angle += f.spin;

        //bounce off canvas edges
        if (f.x < f.size / 2 || f.x > width - f.size / 2) {
            f.dx *= -1;
        }
        if (f.y < f.size / 2 || f.y > height - f.size / 2) {
            f.dy *= -1;
        }
    }

    //dsraw flowers
    for (let f of flowers) {
        drawFlower(f);
    }
}

function drawBackground() { // i do have a bg color, but it can be removed upon projection surface

    for (let y = 0; y < height; y++) {
        let c = lerpColor(color(165, 220, 255), color(235, 248, 255), y / height);
        stroke(c);
        line(0, y, width, y);
    }
    noStroke();
}

function drawFlower(f) {
    push();
    translate(f.x, f.y);
    rotate(f.angle);

    //5 gradient petals
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / 5) {

        let px = cos(angle) * f.size * 0.32;
        let py = sin(angle) * f.size * 0.32;

        //gradient inside each petal
        for (let i = 12; i > 0; i--) {

            let c = lerpColor(f.c1, f.c2, i / 12);
            fill(c);
            ellipse(px, py, (f.size * 0.6) * i / 12, (f.size * 0.6) * i / 12);
        }
    }

    //gradient flower center
    for (let i = 12; i > 0; i--) {

        let c = lerpColor(color(255, 250, 180), color(255, 185, 40), i / 12);
        fill(c);
        ellipse(0, 0, (f.size * 0.3) * i / 12);
    }
    pop();
}