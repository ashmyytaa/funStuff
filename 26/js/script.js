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
        let c1 = color(255, 0, 0);   //tangerine
        let c2 = color(32, 17, 143);   //blue like the sea

        //COLOR COMBOS

        //tangerine + blue = (242, 133, 0) & (107, 213, 227)
        //pink + green = (237, 33, 132) & (32, 237, 0)
        //purple + ywllow = (178, 0, 237) & (237, 225, 0)

        // Slowly shift between the colors
        let amount = 0.5 + 0.5 * sin(frameCount * 0.05 + t * 3);

        let c = lerpColor(c1, c2, amount);

        fill(c);

        ellipse(x, y, i * 2, i * 2.3);
    }
}