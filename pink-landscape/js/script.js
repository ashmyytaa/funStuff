/**
 * Cutesy Landscape
 * Ashmitha Kanagiah
 * 
 * 
 * 
 * 
 */

"use strict";


let particlePositions = [];
let numParticles = 200;

/**
 * setupppp
*/
function setup() {
    createCanvas(1200, 600);

    for (let i = 0; i < numParticles; i++) {
        particlePositions.push({
            angle: random(TWO_PI),
            radiusX: random(),
            radiusY: random(),
            size: random(2, 5),
            speed: random(0.1, 0.5),
            alpha: random(100, 255)
        });
    }
}

/**
 * drawww
*/
function draw() {
    sunsetGradient(); //FUNCTION CALLING
    sun();
    mountains();

    ground(); //FUNCTION CALLING
    waves();
    mountainFront();

    groundFront(); //FUNCTION CALLING
    wavess();
    waveSparkles();
    land();

    stem(30, 450); //placing each individual stem at my desired position on the canvas
    stem(35, 480);
    stem(30, 590);
    stem(40, 500);
    stem(60, 480);
    stem(70, 450);
    stem(70, 580);
    stem(90, 500);
    stem(95, 530);
    stem(80, 440);
    stem(100, 500);
    stem(90, 490);
    stem(110, 450);
    stem(120, 500);
    stem(130, 600);
    stem(140, 450);
    stem(140, 550);
    stem(150, 580);

    stem(160, 500);
    stem(170, 480);
    stem(180, 450);
    stem(190, 600);
    stem(200, 550);
    stem(190, 520);
    stem(210, 550);
    stem(220, 500);
    stem(230, 560);
    stem(240, 590);

    stem(250, 550);
    stem(260, 500);
    stem(260, 480);
    stem(270, 550);

    stem(280, 500);
    stem(290, 480);
    stem(300, 480);
    stem(310, 600);
    stem(320, 550);
    stem(330, 520);
    stem(340, 550);
    stem(350, 500);
    stem(360, 560);
    stem(370, 590);
    stem(380, 550);
    stem(390, 500);
    stem(400, 570);
    stem(410, 550);
    stem(420, 550);
    stem(430, 600);
    stem(440, 570);
    stem(450, 550);

    stem(490, 570);
    stem(500, 550);
    stem(520, 570);
    stem(530, 590);
    stem(550, 550);
    stem(560, 600);
    stem(570, 570);
    stem(580, 576);
    stem(590, 550);
    stem(600, 530);
    stem(610, 550);
    stem(620, 510);
    stem(630, 560);
    stem(640, 510);
    stem(650, 534);
    stem(660, 680);
    stem(670, 570);
    stem(680, 600);
    stem(690, 550);
    stem(700, 500);
    stem(710, 530);
    stem(720, 550);
    stem(730, 579);
    stem(740, 600);
    stem(750, 500);
    stem(745, 550);
    stem(760, 550);
    stem(770, 560);
    stem(780, 510);
    stem(790, 535);
    stem(800, 600);
    stem(810, 570);
    stem(820, 600);
    stem(830, 550);
    stem(840, 500);
    stem(850, 530);
    stem(860, 550);
    stem(870, 579);
    stem(880, 600);
    stem(890, 500);
    stem(900, 500);
    stem(910, 530);
    stem(920, 550);
    stem(930, 579);
    stem(940, 600);
    stem(950, 500);
    stem(960, 550);
    stem(970, 550);
    stem(980, 560);
    stem(935, 500);
    stem(945, 555);
    stem(955, 522);
    stem(965, 590);
    stem(975, 580);
    stem(985, 560);

    stem(990, 550);
    stem(1000, 579);
    stem(1010, 600);
    stem(1020, 500);
    stem(1030, 550);
    stem(1040, 550);
    stem(1050, 560);
    stem(1060, 500);
    stem(1070, 555);
    stem(1080, 522);
    stem(1090, 590);
    stem(1100, 580);
    stem(1110, 560);
    stem(1120, 500);
    stem(1115, 525);
    stem(956, 523);
    stem(1130, 550);
    stem(1140, 600);
    stem(1150, 530);
    stem(1160, 555);

    mountainShade(300); //FUNCTION CALLING
    windoww();
}


//function window that draws the brown window 
function windoww() {
    //cross shape
    push();
    fill(102, 76, 52)
    noStroke()
    rect(0, 300, width, 20)
    pop();

    push();
    fill(102, 76, 52)
    noStroke()
    rect(600, 0, 20, height)
    pop();

    //borders horizontal
    push();
    fill(102, 76, 52)
    noStroke()
    rect(0, 0, width, 20)
    pop();

    push();
    fill(102, 76, 52)
    noStroke()
    rect(0, 580, width, 20)
    pop();

    //borders vertical
    push();
    fill(102, 76, 52)
    noStroke()
    rect(0, 0, 20, height)
    pop();

    push();
    fill(102, 76, 52)
    noStroke()
    rect(1180, 0, 20, height)
    pop();

}

//draws ground
function ground() {
    push();
    fill(145, 224, 255)
    noStroke()
    rect(0, 290, width, height)
    pop();
}

//draws mountatin
function mountains() {
    push();
    fill(184, 72, 122, 245)
    noStroke()
    ellipse(900, 500, 500, 900); //1
    pop();

    push();
    fill(255, 30)
    noStroke()
    ellipse(900 - 20, 500, 500, 900 - 20); //2
    pop();

    push();
    fill(184, 72, 122, 245)
    noStroke()
    ellipse(600, 400, 300, 500); //3
    pop();

    push();
    fill(255, 30)
    noStroke()
    ellipse(600 - 20, 400, 300, 500 - 20); //4
    pop();
}

//draws mountain light shade
function mountainFront() {
    push();
    fill(184, 72, 122, 245)
    noStroke()
    ellipse(400, 600, 500, 900); //1
    pop();

    push();
    fill(255, 20)
    noStroke()
    ellipse(400 - 20, 600, 500, 900 - 20); //2
    pop();

    push();
    fill(184, 72, 122, 245)
    noStroke()
    ellipse(1100, 400, 300, 500); //3
    pop();

    push();
    fill(255, 20)
    noStroke()
    ellipse(1100 - 10, 400, 300, 500 - 20); //4
    pop();
}


//front ground waterview
function groundFront() {
    push();
    fill(145, 224, 255)
    noStroke()
    rect(0, 350, width, height)
    pop();

    push();
    fill(145, 224, 255)
    noStroke()
    ellipse(900, 370, 300, 55)
    pop();

    push();
    fill(145, 224, 255)
    noStroke()
    ellipse(480, 380, 300, 90)
    pop();

    push();
    fill(145, 224, 255)
    noStroke()
    ellipse(270, 380, 300, 100)
    pop();
}

//land
function land() {
    push();
    // fill(82, 168, 255)
    fill(237, 164, 197)
    noStroke()
    ellipse(0, 700, 1100, 600)
    pop();

    push();
    // fill(82, 168, 255)
    fill(237, 164, 197)
    noStroke()
    ellipse(900, 750, 1100, 600)
    pop();
}

//wave set 1
function waves() {
    push();
    stroke(78, 156, 204, 100);
    strokeWeight(3);
    noFill();

    let waveSpeed = 0.05;
    let waveHeight = 10;
    let waveLength = 0.01;

    for (let y = 300; y < height; y += 45) {
        beginShape();
        for (let x = 0; x <= width; x += 20) {
            let wave = sin(x * waveLength + frameCount * waveSpeed + y) * waveHeight;
            vertex(x, y + wave);
        }
        endShape();
    }
    pop();
}

//wave set 2
function wavess() {
    push();
    stroke(78, 156, 204, 100);
    strokeWeight(3);
    noFill();

    let waveSpeed = 0.05;
    let waveHeight = 10;
    let waveLength = 0.01;

    for (let y = 350; y < height; y += 45) {
        beginShape();
        for (let x = 0; x <= width; x += 10) {
            let wave = sin(x * waveLength + frameCount * waveSpeed + y) * waveHeight;
            vertex(x, y + wave);
        }
        endShape();
    }
    pop();
}

//bg gradient
function sunsetGradient() {
    for (let y = 0; y < height; y++) {
        let grade = map(y, 0, height, 0, 1);

        //frame count for gradient
        let t = frameCount * 0.08;

        //using color to map the gradient of the 3 colors that i picked to go into gradients
        let topColor = color(242, 126 + sin(t) * 50, 242 + sin(t + 1) * 20);
        let midColor = color(250, 147 + sin(t + 2) * 30, 120 + sin(t + 3) * 20);
        let bottomColor = color(230, 140 + sin(t + 4) * 20, 180 + sin(t + 5) * 20);
        let c;

        if (grade < 0.5) {
            c = lerpColor(topColor, midColor, grade * 2); //lerp color
        } else {
            c = lerpColor(midColor, bottomColor, (grade - 0.5) * 2);
        }

        push();
        stroke(c);
        line(0, y, width, y);
        pop();
    }
};

//draws sparkles on the waters
function waveSparkles() {
    push();
    noStroke();

    let waterTop = 300; // y value

    for (let i = 0; i < 60; i++) {
        let x = (i * 60 + frameCount * 0.002) % width;
        let y = random(waterTop + 20, height - 40);
        let sparkleSize = sin(frameCount + i) * 2 + 4;

        push();
        noStroke();
        fill(255, 255, 255, 150);
        ellipse(x, y, sparkleSize);
        pop();
    }
    pop();
}

function stem(x, y) {
    push();
    let sway = sin(frameCount * 0.1 + x) * 10; //cute left and right swayy of floweaa

    stroke(23, 122, 28);
    strokeWeight(4);
    line(x, y, x + sway, y - 60);

    noStroke();
    fill(217, 46, 83);
    ellipse(x + sway, y - 60, 20);
    pop();
}

//mountain white shade
function mountainShade(y) {
    push();
    noStroke();
    fill(255, 255, 255, 60);
    rect(0, y, width, 60);
    pop();
}

//sun
function sun() {
    push();
    noStroke();
    fill(242, 75, 109, 70);
    ellipse(700, 300, 500);
    pop();
}
