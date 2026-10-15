
"use strict";
let particless;
let landFill = ('#180c3b');


let starX = 400;
let starY = 0;
let starSize = 13;
let starSpeed = 0;

let starX2 = 300;
let starY2 = 0;
let starSize2 = 13;
let starSpeed2 = 0;

function setup() {
    createCanvas(550, 650);
    frameRate(36);
}


function draw() {
    background('#1b0a5434');

    particles();
    mountains();
    nightDrawinga();

    shootingStar(3);
    shootingStar2(3);
    land();



}


function particles() {
    for (let i = 0; i < 20; i++) {  // draw 100 particles
        let x = random(0, width);
        let y = random(0, height);
        push();
        noStroke();
        fill('white');
        drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
        drawingContext.shadowColor = color(255, 255, 255);
        ellipse(x, y, 2.5, 2.5);
        pop();
    }
}


function nightDrawinga() {
    //clouds
    push();
    noStroke();
    fill(255, 255, 255, 120);
    ellipse(190, 230, 250, 10);
    pop();

    push();
    noStroke();
    fill(255, 255, 255, 120);
    ellipse(300, 180, 200, 10);
    pop();

    push();
    noStroke();
    fill(255, 255, 255, 120);
    ellipse(390, 190, 150, 10);
    pop();

    push();
    noStroke();
    fill(255, 255, 255, 120);
    ellipse(390, 130, 180, 10);
    pop();

    push();
    noStroke();
    fill(255, 255, 255, 120);
    ellipse(320, 150, 130, 10);
    pop();

    //moon
    push();
    noStroke();
    fill('#ada4c6');
    drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
    drawingContext.shadowColor = color(255, 255, 255);
    ellipse(110, 110, 160);
    pop();
}


function land() {
    //land strands
    push();
    noStroke();
    fill(landFill);
    ellipse(200, 450, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(100, 450, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(50, 420, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(30, 480, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(150, 480, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(180, 480, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(225, 430, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(290, 430, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(300, 400, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(350, 450, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(390, 450, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(420, 450, 10, 290);
    pop();


    push();
    noStroke();
    fill('#180c3b');
    ellipse(450, 470, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(490, 420, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(520, 440, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(250, 480, 10, 290);
    pop();

    push();
    noStroke();
    fill('#180c3b');
    ellipse(400, 420, 10, 290);
    pop();


    push();
    noStroke();
    fill('#180c3b');
    ellipse(0, 500, 400, 190);
    pop();

    //land land
    push();
    noStroke();
    fill('#180c3b');
    ellipse(400, 500, width, 190);
    pop();

    //river
    push();
    noStroke();
    fill('#211f71');
    // drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
    // drawingContext.shadowColor = color('#23418c');
    beginShape();
    // Bottom
    vertex(0, height);
    vertex(width, height);
    for (let x = width; x >= 0; x -= 10) {
        let wave = 15 * sin(x * 0.02 + frameCount * 0.08);
        vertex(x, 540 + wave);
    }
    endShape(CLOSE);
    pop();

    //wave lines 
    push();
    noFill();
    stroke('#405999');
    drawingContext.shadowBlur = 60; // features that i found online that adds glow to a text
    drawingContext.shadowColor = color('#ffffff');
    strokeWeight(2);
    for (let y = 560; y < height; y += 20) {
        beginShape();
        for (let x = 0; x <= width; x += 15) {
            let wave = 8 * sin(x * 0.03 + frameCount * 0.1 + y);
            vertex(x, y + wave);
        }
        endShape();
    }
    pop();


    // //cloud reflection
    // push();
    // noStroke();
    // fill(255, 255, 255, 150);
    // ellipse(190, 580 + 5 * sin(frameCount * 0.08 + 190 * 0.05), 250, 12 + 4 * sin(frameCount * 0.08));
    // pop();

    // push()
    // noStroke();
    // fill(255, 255, 255, 150);
    // ellipse(300, 600 + 5 * sin(frameCount * 0.08 + 300 * 0.05), 200, 12 + 4 * sin(frameCount * 0.08 + 1));
    // pop();

    // push()
    // noStroke();
    // fill(255, 255, 255, 150);
    // ellipse(390, 620 + 5 * sin(frameCount * 0.08 + 390 * 0.05), 150, 12 + 4 * sin(frameCount * 0.08 + 2));
    // pop();

    // push()
    // noStroke();
    // fill(255, 255, 255, 150);
    // ellipse(390, 570 + 5 * sin(frameCount * 0.08 + 390 * 0.05), 180, 12 + 4 * sin(frameCount * 0.08 + 3));
    // pop();

}


function mountains() {
    fill('#2b1668');
    noStroke();

    beginShape();
    //(Bottom-Left)
    vertex(0, 450);
    //Curve top (from left to right)
    // bezierVertex(x1, y1, x2, y2, xx, yy)
    //x1+x2,y1+y2----last pair is top-right corner
    bezierVertex(10, 300, 240, 150, 350, 400);

    // (Bottom-Right)
    vertex(450, 450);

    endShape(CLOSE);
}



function shootingStar(starSpeed) {
    push();
    noStroke();
    fill('#c79a12');
    drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
    drawingContext.shadowColor = color('#c79a12');
    ellipse(starX, starY, starSize);

    // Move down-left
    starX = starX - starSpeed;  // move LEFT
    starY = starY + starSpeed;  // move DOWN
    //  starSize = starSize + 0.1;

    // Reset when it goes off screen
    if (starX < 0 || starY > height) {
        starX = random(width - 50, width); // start near top-right
        starY = random(0, 50);
        //  starSize = 1;
    }
    pop();

}


function shootingStar2(starSpeed2) {
    push();
    noStroke();
    fill('#c79a12');
    drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
    drawingContext.shadowColor = color('#c79a12');
    ellipse(starX2, starY2, starSize2);

    // Move down-left
    starX2 = starX2 - starSpeed2;  // move LEFT
    starY2 = starY2 + starSpeed2;  // move DOWN
    //  starSize = starSize + 0.1;

    // Reset when it goes off screen
    if (starX2 < 0 || starY2 > height) {
        starX2 = random(width - 50, width); // start near top-right
        starY2 = random(0, 50);
        //  starSize = 1;
    }
    pop();

}
