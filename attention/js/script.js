/**
 *CART210 Final Project
 * Ashmitha Kanagiah
 * 
 * An abstract animation that portrays the fast-paced imagery such as shapes and colors to
 * portray the sensory overload that we our brains get trained to now that algorithms and modern digital
 * media is relying on shorter, quicker and fast-paced contents to promote longivity in regards of 
 * human interaction and engagement with their platforms. 
 *
 */

"use strict";

let shapes = [];
let totalShapes = 300;

function setup() {
    createCanvas(1200, 600);

    //initialization of shapes
    for (let i = 0; i < totalShapes; i++) {
        let shape = {
            x: random(width),
            y: random(height),
            speedX: random(-5, 5),
            speedY: random(-5, 5),
            size: random(15, 20),
            type: int(random(3)) // 0 = circle 1 = square 2 = triangle
        };
        shapes.push(shape);
    }
}

function draw() {
    background(0, 40); //fading background

    for (let shape of shapes) {

        shape.x += shape.speedX;
        shape.y += shape.speedY;

        //bouncing off shape off the edges of canvas
        if (shape.x < 0 || shape.x > width) {
            shape.speedX *= -1;
        }
        if (shape.y < 0 || shape.y > height) {
            shape.speedY *= -1;
        }

        //fill
        let r = random(255);
        let g = random(255);
        let b = random(255);

        fill(r, g, b, 150);
        noStroke();

        //draw shapes
        if (shape.type === 0) {
            ellipse(shape.x, shape.y, shape.size);
        }
        else if (shape.type === 1) {
            rect(shape.x, shape.y, shape.size, shape.size);
        }
        else {
            triangle(
                shape.x, shape.y,
                shape.x + shape.size, shape.y,
                shape.x + shape.size / 2, shape.y - shape.size
            );
        }
    }
}