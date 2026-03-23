"use strict";
//color shades were found from this website: https://www.eggradients.com/color/future-dusk-color
//Future Dusk is the main color, as my other shades were nearby shades from it.

//variables
let x1, y1;
let x2, y2;
let x3, y3;
let x4, y4;

let offset = 10; //initial offset value

function setup() {
    createCanvas(1200, 600);
    frameRate(30); //Frame rate for a slower movement
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
    stroke('#474972'); //future dusk color in Hex colors
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color(255, 255, 255);
    x1 = noise((300 + offset * 1.5)) * width * 4 - width * 1.5;
    y1 = 0;

    x2 = noise((1300 + offset * 1.6)) * width * 4.2 - width * 1.6;
    y2 = height * 0.42;

    x3 = noise((2300 + offset * 1.4)) * width * 4.1 - width * 1.55;
    y3 = height * 0.28;

    x4 = noise((3300 + offset * 1.7)) * width * 4 - width * 1.5;
    y4 = height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop();

    //curve 2
    push();
    noFill();
    strokeWeight(2);
    stroke(' #919EC9 '); //nearby shade to future dusk in Hex colors
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color(255, 255, 255);

    x1 = noise((700 + offset * 1.2)) * width * 4.3 - width * 1.6;
    y1 = 0;

    x2 = noise((1700 + offset * 1.4)) * width * 4.1 - width * 1.55;
    y2 = height * 0.38;

    x3 = noise((2700 + offset * 1.5)) * width * 4.2 - width * 1.57;
    y3 = height * 0.18;

    x4 = noise((3700 + offset * 1.3)) * width * 4 - width * 1.5;
    y4 = height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop();

    //curve 3
    push();
    noFill();
    strokeWeight(2);
    stroke('  #7782B8  '); //nearby shade to future dusk in Hex colors
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color(255, 255, 255);

    x1 = noise((11000 + offset * 1.3)) * width * 4.1 - width * 1.5;
    y1 = 0;

    x2 = noise((21000 + offset * 1.4)) * width * 4.3 - width * 1.6;
    y2 = height * 0.22;

    x3 = noise((31000 + offset * 1.2)) * width * 4.2 - width * 1.55;
    y3 = height * 0.48;

    x4 = noise((41000 + offset * 1.5)) * width * 4 - width * 1.5;
    y4 = height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop();

    //curve 4
    push();
    noFill();
    strokeWeight(2);
    stroke('  #B5BFDB '); //nearby shade to future dusk in Hex colors
    drawingContext.shadowBlur = 1;
    drawingContext.shadowColor = color(255, 255, 255);
    x1 = noise((4500 - offset * 1.6)) * width * 4.2 - width * 1.55;
    y1 = 0;

    x2 = noise((5500 - offset * 1.5)) * width * 4.4 - width * 1.6;
    y2 = height * 0.2;

    x3 = noise((6500 - offset * 1.7)) * width * 4.3 - width * 1.57;
    y3 = height * 0.45;

    x4 = noise((7500 - offset * 1.8)) * width * 4.1 - width * 1.55;
    y4 = height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    pop();

    //incresing the offset
    offset += 0.0099;
}
