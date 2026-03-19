"use strict";

//variables
let x1, y1;
let x2, y2;
let x3, y3;
let x4, y4;

let offset = 10;

function setup() {
    createCanvas(500, 670);
    frameRate(40);
}

function draw() {

    //black bg with fading
    push();
    fill(0, 10);
    noStroke();
    rect(0, 0, width, height);
    pop();


    //curve 1
    push();
    noFill();
    strokeWeight(2);
    stroke(66, 88, 255);
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color(255, 255, 255);

    x1 = noise((1000 + offset) * 0.8) * width * 3 - width * 0.75;
    y1 = 0;

    x2 = noise((2000 + offset) * 0.8) * width * 3 - width * 0.75;
    y2 = height * 0.4;

    x3 = noise((3000 + offset) * 0.8) * width * 3 - width * 0.75;
    y3 = height * 0.2;

    x4 = noise((4000 + offset) * 0.8) * width * 3 - width * 0.75;
    y4 = height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop();


    //curve 2
    push();
    noFill();
    strokeWeight(2);
    stroke(48, 167, 230);
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color(255, 255, 255);

    x1 = noise((10000 - offset * 1.2)) * width * 3 - width * 0.75;
    y1 = 0;

    x2 = noise((20000 - offset * 1.2)) * width * 3 - width * 0.75;
    y2 = height * 0.4;

    x3 = noise((30000 - offset * 1.2)) * width * 3 - width * 0.75;
    y3 = height * 0.2;

    x4 = noise((40000 - offset * 1.2)) * width * 3 - width * 0.75;
    y4 = height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop();


    //curve 3
    push();
    noFill();
    strokeWeight(2);
    stroke(165, 210, 232);
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color(255, 255, 255);

    x1 = noise((15000 + offset * 0.6)) * width * 3 - width * 0.75;
    y1 = 0;

    x2 = noise((25000 + offset * 0.6)) * width * 3 - width * 0.75;
    y2 = height * 0.2;

    x3 = noise((35000 + offset * 0.6)) * width * 3 - width * 0.75;
    y3 = height * 0.4;

    x4 = noise((45000 + offset * 0.6)) * width * 3 - width * 0.75;
    y4 = height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop();


    //curve 4
    push();
    noFill();
    strokeWeight(2);
    stroke(0, 128, 255);
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color(255, 255, 255);

    x1 = noise((5000 - offset * 1.5)) * width * 3 - width * 0.75;
    y1 = 0;

    x2 = noise((6000 - offset * 1.5)) * width * 3 - width * 0.75;
    y2 = height * 0.2;

    x3 = noise((7000 - offset * 1.5)) * width * 3 - width * 0.75;
    y3 = height * 0.4;

    x4 = noise((8000 - offset * 1.5)) * width * 3 - width * 0.75;
    y4 = height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop();


    //incresing the offset
    offset += 0.0099;
}



//VISUALIZER LOOKING USE IT FOR MUSIC PROJECTTT
// push();
// noFill();
// strokeWeight(2);
// stroke(255);
// drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
// drawingContext.shadowColor = color(191, 10, 109);
// x1 = noise(offset * 100) * width;
// y1 = noise(offset * 600) * height;

// x2 = noise(offset * 100) * width;
// y2 = noise(offset * 500) * height;

// x3 = noise(offset * 100) * width;
// y3 = noise(offset * 400) * height;

// x4 = noise(offset * 100) * width;
// y4 = noise(offset + 300) * height;
// bezier(x1, y1, x2, y2, x3, y3, x4, y4);
// offset += 0.004;
// pop();
