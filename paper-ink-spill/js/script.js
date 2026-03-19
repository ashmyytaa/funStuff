

let paintOne = {
    x: 500,
    y: 200,
};

let paintTwo = {
    x: 500,
    y: 201,
};

let paintTree = {
    x: 480,
    y: 202,

};

let paintFour = {
    x: 510,
    y: 203,

};

let paintFive = {
    x: 515,
    y: 204,

};

let paintSix = {
    x: 500,
    y: 205,

};

let paintSeven = {
    x: 510,
    y: 206,

};




function setup() {
    createCanvas(1200, 600);

    background('white');

}

function draw() {
    push();
    stroke(201, 12, 78);
    line(300, 0, 300, 600);
    pop();


    push();
    stroke(98, 174, 222);
    line(0, 80, 1200, 80);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 110, 1200, 110);
    pop();


    push();
    stroke(98, 174, 222);
    line(0, 140, 1200, 140);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 170, 1200, 170);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 200, 1200, 200);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 230, 1200, 230);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 260, 1200, 260);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 290, 1200, 290);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 320, 1200, 320);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 350, 1200, 350);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 380, 1200, 380);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 410, 1200, 410);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 440, 1200, 440);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 470, 1200, 470);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 500, 1200, 500);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 530, 1200, 530);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 560, 1200, 560);
    pop();

    push();
    stroke(98, 174, 222);
    line(0, 590, 1200, 590);
    pop();


    push();
    paintOne.x += random(-2, 2);
    paintOne.y += random(-2, 2);
    pop();

    push();
    paintTwo.x += random(-2, 2);
    paintTwo.y += random(-2, 2);
    pop();
    push();
    paintTree.y += random(-2, 2);
    paintTree.x += random(-2, 2);
    pop();
    push();
    paintFour.y += random(-2, 2);
    paintFour.x += random(-2, 2);
    pop();
    push();
    paintFive.y += random(-2, 2);
    paintFive.x += random(-2, 2);
    pop();
    push();
    paintSix.y += random(-2, 2);
    paintSix.x += random(-2, 2);
    pop();
    push();
    paintSeven.y += random(-2, 2);
    paintSeven.x += random(-2, 2);
    pop();


    // Draw the point.

    push();
    strokeWeight(2);
    paintOne.size += random(-1, 1);
    point(paintOne.x, paintOne.y);
    pop();

    push();
    strokeWeight(3);
    paintOne.size += random(-1, 1);
    point(paintTwo.x, paintTwo.y);
    pop();

    push();
    strokeWeight(2);
    paintOne.size += random(-1, 1);
    point(paintTree.x, paintTree.y);
    pop();

    push();
    strokeWeight(2);
    paintOne.size += random(-1, 1);
    point(paintFour.x, paintFour.y);
    pop();

    push();
    strokeWeight(3);
    paintOne.size += random(-1, 1);
    point(paintFive.x, paintFive.y);
    pop();

    push();
    strokeWeight(3);
    paintOne.size += random(-1, 1);
    point(paintSix.x, paintSix.y);
    pop();

    push();
    strokeWeight(3);
    paintOne.size += random(-1, 1);
    point(paintSeven.x, paintSeven.y);
    pop();

}