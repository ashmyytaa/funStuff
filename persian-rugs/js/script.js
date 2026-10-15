/**
 * persian rugs
 * Ashmitha Kanagiah
 * 
 */

"use strict";

let colors;

function setup() {
    createCanvas(1200, 600);
    background(77, 12, 23);

    angleMode(DEGREES);

    colors = [
        color(17, 16, 71),  // navy  0
        color(140, 65, 15),   // orange 1
        color(17, 16, 71), // navy 2
        color(140, 93, 10),// gold 3
        color(196, 157, 88),   // beige 4
        color(77, 12, 23)// red 5
    ];
}


function draw() {

    //FUNCTION CALLING
    drawBorders();
    flowers();
    drawCurvyVineBorder(22, 20); // borderWidth, motifSpacing
    drawCentralMedallion();
    drawFullBorderWithFlorals();
    drawSymmetricCurls(width / 2, height / 2, 100, 40); // 8 symmetric curls around center
    drawSymmetricMotifsGrid();
    drawMicroDetails();
}

function drawBorders() {
    let layers = 10;

    for (let i = 0; i < layers; i++) {
        stroke(random(colors));;
        noFill();
        strokeWeight(i < 5 ? 10 : (i < 8 ? 3 : 1));
        rect(20 * i, 20 * i, width - 40 * i, height - 40 * i);
    }
}

function flowers() {
    push();
    noStroke();
    fill(140, 65, 15);
    ellipse(width / 2, height / 2, 200)
    pop();

}

function drawCentralMedallion() {
    push();
    translate(width / 2, height / 2);
    noStroke();

    //outer petals rotate
    fill(colors[4]);
    for (let a = 0; a < 360; a += 20) {
        push();
        rotate(a + frameCount * 0.7); // rotate over time
        ellipse(100, 0, 60 + sin(frameCount * 0.05) * 5, 25 + cos(frameCount * 0.05) * 3); // pulsate size
        pop();
    }

    //inner petals rotate slower
    fill(random(colors));
    for (let a = 0; a < 360; a += 20) {
        push();
        rotate(a - frameCount * 1);
        ellipse(50, 0, 35 + sin(frameCount * 0.03) * 3, 12 + cos(frameCount * 0.03) * 2);
        pop();
    }

    fill(colors[3]);
    for (let a = 0; a < 360; a += 10) {
        push();
        rotate(a + frameCount * 0.1);
        ellipse(170, 0, 55 + sin(frameCount * 0.04) * 4, 22 + cos(frameCount * 0.04) * 2);
        pop();
    }

    fill(random(colors));
    for (let a = 0; a < 360; a += 10) {
        push();
        rotate(a - frameCount * 0.1);
        ellipse(210, 0, 30 + sin(frameCount * 0.09) * 3, 35 + cos(frameCount * 0.09) * 2);
        pop();
    }

    fill(random(colors));
    circle(0, 0, 45 + sin(frameCount * 0.09) * 5);

    fill(random(colors));
    circle(0, 0, 22 + cos(frameCount * 0.05) * 3);

    pop();
}

function drawFloralCurll(x, y, size = 50) {
    noFill();
    stroke(colors[2]);
    strokeWeight(1.5 + sin(frameCount * 0.1)); // thickness pulses

    let offset1 = sin(frameCount * 0.05) * 5;
    let offset2 = cos(frameCount * 0.05) * 5;

    beginShape();
    vertex(x, y);
    bezierVertex(
        x + size * 0.5,
        y - size * 0.4 + offset1,
        x + size * 0.7,
        y + size * 0.2 + offset2,
        x + size,
        y - size * 0.15 + offset1
    );
    endShape();

    fill(colors[3]);
    circle(x + size, y - size * 0.15 + sin(frameCount * 0.1) * 2, 5);
    circle(x + size, y + size * 0.15 + cos(frameCount * 0.1) * 2, 5);
    circle(x + size, y - size * 0.25 + sin(frameCount * 0.1) * 2, 5);
    circle(x + size, y + size * 0.25 + cos(frameCount * 0.1) * 2, 5);
}

function drawSymmetricCurls(cx, cy, count = 6, radius = 30) {
    push();
    translate(cx, cy);
    for (let i = 0; i < count; i++) {
        push();
        rotate((360 / count) * i + frameCount * 0.7); // rotate over time
        drawFloralCurll(radius, 0);
        drawFloralCurll(radius * 2 + sin(frameCount * 0.01) * 5, 50); // radius wobbles
        drawFloralCurll(radius * 3 + cos(frameCount * 0.01) * 5, 60);
        pop();
    }
    pop();
}

function drawSymmetricMotifsGrid(gridSpacingX = 50, gridSpacingY = 80, minDistFromCenter = 200, motifSize = 25) {
    for (let x = 80; x < width - 50; x += gridSpacingX) {
        for (let y = 60; y < height - 50; y += gridSpacingY) {
            if (dist(x, y, width / 2, height / 2) > minDistFromCenter) {
                push();
                translate(x, y);
                for (let i = 0; i < 4; i++) { // 4-way radial symmetry
                    rotate(90 * i);
                    drawMotifCluster(motifSize);
                }
                pop();
            }
        }
    }
}

function drawMotifCluster(size = 25) {
    noStroke();
    let petals = 6;

    // Radial petals
    for (let i = 0; i < petals; i++) {
        push();
        rotate((360 / petals) * i);
        fill(random(colors));
        ellipse(size, 0, size * 0.6, size * 0.25);
        pop();
    }

    //center circle
    fill(colors[3]);
    circle(0, 0, size * 0.4);

    for (let i = 0; i < petals; i++) {
        push();
        rotate((360 / petals) * i);
        drawFloralCurl(size * 0.6, 0, size * 0.8);
        pop();
    }
}

function drawFloralCurl(x, y, size = 40) {
    noFill();
    stroke(colors[1]);
    strokeWeight(1.5);
    beginShape();
    vertex(x, y);
    bezierVertex(x + size * 0.3, y - size * 0.4, x + size * 0.7, y + size * 0.2, x + size, y - size * 0.15);
    endShape();

    fill(colors[4]);
    circle(x + size, y - size * 0.15, 5);
}

function drawMicroDetails() {
    for (let x = 0; x < width; x += 10) {
        for (let y = 0; y < height; y += 10) {
            if (random() < 0.08) {
                fill(random(colors));
                noStroke();
                circle(x, y, 2);
            }
        }
    }
}

function drawCurvyVineBorder(borderWidth = 50, motifSpacing = 40) {
    function drawMotif(x, y, size, angle = 0) {
        push();
        translate(x, y);
        rotate(angle);
        noFill();
        strokeWeight(2.5);
        stroke(colors[4]);

        beginShape();
        vertex(0, 0);
        bezierVertex(size * 0.25, -size * 0.5, size * 0.75, size * 0.5, size, 0);
        endShape();

        stroke(colors[4]);
        noStroke();
        circle(size, 0, size * 0.3);
        pop();
    }

    //top border
    for (let x = 0; x < width; x += motifSpacing) {
        drawMotif(x, borderWidth / 2, motifSpacing, 0);
    }

    //ottom border
    for (let x = 0; x < width; x += motifSpacing) {
        drawMotif(x, height - borderWidth / 2, motifSpacing, 180);
    }

    //left border
    for (let y = 0; y < height; y += motifSpacing) {
        drawMotif(borderWidth / 2, y, motifSpacing, -90);
    }

    for (let y = 0; y < height; y += motifSpacing) {
        drawMotif(width - borderWidth / 2, y, motifSpacing, 90);
    }

    let corners = [
        [borderWidth / 2, borderWidth / 2, 0],
        [width - borderWidth / 2, borderWidth / 2, 0],
        [borderWidth / 2, height - borderWidth / 2, 180],
        [width - borderWidth / 2, height - borderWidth / 2, 180]
    ];
    for (let c of corners) {
        drawMotif(c[0], c[1], motifSpacing, c[2]);
    }
}

function drawFullBorderWithFlorals(borderWidth = 50, motifSpacing = 50, floralSize = 40, floralInset = 150) {
    function drawMotif(x, y, size, angle = 0) {
        push();
        translate(x, y);
        rotate(angle);
        noFill();
        strokeWeight(2.5);
        stroke(random(colors));
        beginShape();
        vertex(0, 0);
        bezierVertex(size * 0.25, -size * 0.5, size * 0.75, size * 0.5, size, 0);
        endShape();
        // Flower bud at tip
        fill(random(colors));
        noStroke();
        circle(size, 0, size * 0.3);
        pop();
    }

    for (let x = 0; x < width; x += motifSpacing) {
        drawMotif(x, borderWidth / 2, motifSpacing, 0); // top
        drawMotif(x, height - borderWidth / 2, motifSpacing, 180); //bottom
    }
    for (let y = 0; y < height; y += motifSpacing) {
        drawMotif(borderWidth / 2, y, motifSpacing, -90); //left
        drawMotif(width - borderWidth / 2, y, motifSpacing, 90); //right
    }

    let positions = [
        [floralInset, floralInset], //top-left
        [width - floralInset, floralInset],//top-right 
        [floralInset, height - floralInset],//bottom-left 
        [width - floralInset, height - floralInset]//bottom-right 
    ];

    for (let pos of positions) {
        push();
        translate(pos[0], pos[1]);
        drawAnimatedFloral(floralSize);
        pop();
    }

    //flower motif function 
    function drawAnimatedFloral(size) {
        noStroke();
        let layers = 11;
        for (let l = layers; l > 0; l--) {
            let petals = 6 + l;
            for (let i = 0; i < petals; i++) {
                push();
                //rotate petals 
                rotate((360 / petals) * i + frameCount * 5);
                let pulse = 1 + sin(frameCount * 0.02 + i) * 0.2;
                fill(colors[l % colors.length]);
                ellipse(0, -size * 0.1 * l, size * 0.15 * l * pulse, size * 0.35 * l * pulse);
                pop();
            }
        }
        fill(colors[4]);
        circle(0, 0, size * 0.25);
    }
}
