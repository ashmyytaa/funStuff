/**
 * Ashmitha Kanagiah 
 * 
 * Support for Palestine
 * 
 * An abstract and symbolizing animation that shows support towards the genocide in Gaza
 * and represent Palestine
 * 
 * This animation is composed of an imitation of the palestinian scarf keffiyeh, where on top
 * we see flowing colors of the palestinian flag wrap around.
 * 
 * 
 * 
 */

"use strict";

/*
* VARIABLE declaration
*/
let redBubbles = []; //bubbles
let greenBubbles = [];
let totalBubbles = 800; //total bubbles

let redNoise = 0.008; //noise movement for the movement of my particles
let greenNoise = 0.004;

let gridSize = 75; //sizing of the diagonales, the fishnet pattern
let borderHeight = 480; //where the fishnet pattern ends and where the end borders are starting


/*
*SETUP
*/
function setup() {
    createCanvas(1200, 600);

    //creation of red particles, that are stored in the redBubbles array
    for (let i = 0; i < totalBubbles; i++) {
        redBubbles.push({
            x: random(width),
            y: random(height),
            speedX: 0,
            speedY: 0,
            size: random(2, 5)
        });
    }

    //creation of green particles, that are stored in the greenBubbles array
    for (let i = 0; i < totalBubbles; i++) {
        greenBubbles.push({
            x: random(width),
            y: random(height),
            speedX: 0,
            speedY: 0,
            size: random(2, 5)
        });
    }
}


/*
*DRAW
*/
function draw() {
    background(250);

    scarfPattern(); //draws the black scarf pattern
    redBubbless(); //launches green bubbles
    greenBubbless(); //launches red bubbles
}

/*
*BLACK SCARF
*draws the keffiyeh scarf pattern, my own interpretation, since i cannot entirely represent it with code
*/
function scarfPattern() {
    stroke(0);

    strokeWeight(20); //thick border
    line(10, 500, width - 10, 500);

    strokeWeight(2); //think borders
    line(10, 480, width - 10, 480); //top
    line(10, 520, width - 10, 520); //bottom

    //diagonal/fishnet pattern
    strokeWeight(4);
    for (let x = -height; x < width; x += gridSize) {
        line(x, 0, x + borderHeight, borderHeight);
    }
    for (let x = 0; x < width + height; x += gridSize) {
        line(x, 0, x - borderHeight, borderHeight);
    }

    // black ellipses on top of the diagonal/fishnet pattern
    noStroke();
    fill(0);

    for (let y = 0; y <= borderHeight; y += gridSize) {
        for (let x = 0; x <= width; x += gridSize) {
            push();
            translate(x, y);
            rotate(random(-PI / 4, PI / 4));
            ellipse(0, 0, 20, 33);
            pop();
        }
    }

    //black ellipses on the bottom (after the borders)
    for (let x = 10; x <= width - 10; x += 14) {
        for (let y = 530; y <= height; y += 14) {
            push();
            translate(x, y);
            rotate(random(-PI / 4, PI / 4));
            ellipse(0, 0, 15, 7);
            pop();
        }
    }
}


/* 
*RED BUBBLES
*/
function redBubbless() {
    push();
    noStroke();
    fill(163, 0, 22, 180);

    for (let i = 0; i < redBubbles.length; i++) {
        let b = redBubbles[i];

        //noise value aka the movement value of the bubbles
        let angle = noise(b.x * redNoise, b.y * redNoise, frameCount * 0.008) * TWO_PI * 2;

        //speed value
        b.speedX += cos(angle);
        b.speedY += sin(angle) - 0.25;

        //speed limit
        b.speedX = constrain(b.speedX, -8, 8);
        b.speedY = constrain(b.speedY, -8, 8);

        //updating position
        b.x += b.speedX;
        b.y += b.speedY;

        //bubbles flowing around screen
        if (b.y < -15) {
            b.y = height + 15;
            b.speedY = 0;
        }
        if (b.x > width) b.x = 0;
        if (b.x < 0) b.x = width;

        //bubbles being drawn
        ellipse(b.x, b.y, b.size * 4);
    }
    pop();
}

/* 
*GREEN BUBBLES
*/
function greenBubbless() {
    push();
    noStroke();
    fill(0, 82, 26, 180);

    for (let i = 0; i < greenBubbles.length; i++) {
        let b = greenBubbles[i];

        //noise value aka the movement value of the bubbles
        let angle = noise(b.x * greenNoise, b.y * greenNoise, frameCount * 0.008) * TWO_PI * 2;

        //speed value
        b.speedX += cos(angle);
        b.speedY += sin(angle) - 0.25;

        //speed limit
        b.speedX = constrain(b.speedX, -8, 8);
        b.speedY = constrain(b.speedY, -8, 8);

        //updating position
        b.x += b.speedX;
        b.y += b.speedY;

        //bubbles flowing around screen
        if (b.y < -15) {
            b.y = height + 15;
            b.speedY = 0;
        }
        if (b.x > width) b.x = 0;
        if (b.x < 0) b.x = width;

        //bubbles being drawn
        ellipse(b.x, b.y, b.size * 4);
    }
    pop();
}
