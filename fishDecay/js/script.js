"use strict";

let fish = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    // make 15 fish
    for (let i = 0; i < 15; i++) {
        fish.push({
            x: random(width),
            y: random(height),
            size: random(60, 120),
            angle: random(TWO_PI),
            offset: random(1000)
        });
    }
}

function draw() {
    background(255);

    for (let f of fish) {

        // floating movement
        f.x += sin(frameCount * 0.01 + f.offset) * 0.5;
        f.y += cos(frameCount * 0.01 + f.offset) * 0.5;

        // slow rotation
        f.angle += 0.003;

        push();
        translate(f.x, f.y);
        rotate(f.angle);
        scale(f.size / 100);

        drawFish();

        pop();

        // wrap around screen
        if (f.x > width + 100) f.x = -100;
        if (f.x < -100) f.x = width + 100;
        if (f.y > height + 100) f.y = -100;
        if (f.y < -100) f.y = height + 100;
    }
}

function drawFish() {

    stroke(0);
    fill(0);
    strokeWeight(5);

    // head
    triangle(-45, 0, -15, -25, -15, 25);

    // eye
    fill(255);
    noStroke();
    circle(-32, 0, 8);

    // body
    stroke(0);
    strokeWeight(6);
    line(-15, 0, 45, 0);

    // ribs
    noFill();
    strokeWeight(3);


    for (let x = -6; x <= 45; x += 12) {
        line(x, 0, x - 10, -20); // top rib
        line(x, 0, x - 10, 20);  // bottom rib
    }

    // tail
    strokeWeight(5);
    fill(0);
    triangle(45, 0, 70, -20, 70, 20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}