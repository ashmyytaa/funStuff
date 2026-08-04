"use strict";

let words = [
    "i am able",
    "living life slowly",
    "creativity flourishes the brain",
    "i have big dreams",
    "i accept growth",
    "healing takes time",
    "never loose hope",
    "love to the fullest",
    "never dim your light",
    "trust yourself"
];

let flyingWords = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    textAlign(CENTER, CENTER);
    textSize(28);
    textFont("Arial");

    for (let i = 0; i < words.length; i++) {
        flyingWords.push({
            word: words[i],

            x: random(width),
            y: random(height),

            speedX: random(-0.5, 0.5),
            speedY: random(-0.5, 0.5),

            floatAmount: random(100)
        });
    }
}

function draw() {
    background(255);

    fill(0);
    noStroke();

    for (let i = 0; i < flyingWords.length; i++) {
        let currentWord = flyingWords[i];

        currentWord.x += currentWord.speedX;
        currentWord.y += currentWord.speedY;

        let softX = sin(frameCount * 0.01 + currentWord.floatAmount) * 1.5;
        let softY = cos(frameCount * 0.008 + currentWord.floatAmount) * 1.5;

        text(currentWord.word, currentWord.x + softX, currentWord.y + softY);

        if (currentWord.x > width + 60) {
            currentWord.x = -60;
        }

        if (currentWord.x < -60) {
            currentWord.x = width + 60;
        }

        if (currentWord.y > height + 30) {
            currentWord.y = -30;
        }

        if (currentWord.y < -30) {
            currentWord.y = height + 30;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}