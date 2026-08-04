"use strict";

function setup() {
    createCanvas(700, 700);
    noStroke();
}

function draw() {
    background(255);

    // Center of oval
    let x = width / 2;
    let y = height / 2;

    // Draw from biggest to smallest
    for (let i = 300; i > 0; i -= 4) {

        // Goes from 0 to 1
        let t = map(i, 300, 0, 0, 1);

        // Two soft colors
        let c1 = color(86, 245, 107);
        let c2 = color(242, 128, 203);

        //COLOR COMBOS

        //tangerine + blue = (242, 133, 0) & (107, 213, 227)
        //pink + white = (235, 73, 140) & (240, 213, 224)
        //blue + red = 255, 0, 0) + 32, 17, 143)
        //green + purple = (188, 131, 252) , (140, 255, 161);
        //18, 207, 84, 5, 215, 219)
        //purple + yellow = (223, 224, 114) & 222, 135, 205)
        //8, 207, 84 ---- 5, 215, 219


        //DAT TWOOOO
        //10, 21, 173 + 118, 95, 176
        //191,255,209 + 99,10,10
        //255,255,122 + 169,240,165
        ////pink + white = (235, 73, 140) & (240, 213, 224)


        //DAY THREEEE
        // let c1 = color(114, 109, 168);
        // let c2 = color(190, 231, 232);   




        // Slowly shift between the colors
        let amount = 0.5 + 0.5 * sin(frameCount * 0.05 + t * 3);

        let c = lerpColor(c1, c2, amount);

        fill(c);

        ellipse(x, y, i * 2, i * 2.3);
    }
}