/**
 * 
 * Pixel Game
 *

 */


const tileSize = 31;
const rows = 20;
const columns = 20;
const backgroundColour = "#000000ff";
let w = tileSize * columns;
let h = tileSize * rows;
let particles = [];


const player = {
    x: tileSize * 10,
    y: tileSize * 0,
    size: tileSize,
    fill: "#ffffffff",
    maxTrailLength: 50,
    trail: []
};


const coin = {
    x: 0,
    y: 0,
    size: tileSize,
    // Colour
    fill: "#ff008cff",
    collected: false,

};

let particleFill = {
    fill: {

        r: 255,
        g: 255,
        b: 255,
        a: 80,
    }

}
/**
 * Create the canvas
 */
function setup() {
    // A 10x10 world
    createCanvas(w, h);
    resetCoin();
}

/**
 * Draw
 */
function draw() {
    background(backgroundColour);

    stroke(45);
    strokeWeight(3);
    noFill();


    push();
    noFill();
    stroke(45);
    strokeWeight(15);
    rect(0, 0, width, height);
    pop();



    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            rect(
                x * tileSize,
                y * tileSize,
                tileSize,
                tileSize
            );
        }
    }


    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        p.life -= 5;

        push();
        noStroke();
        fill(particleFill.fill.r, particleFill.fill.g, particleFill.fill.b);

        ellipseMode(CENTER);
        ellipse(p.x, p.y, p.size, p.size);
        pop();


        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }

    for (let i = 0; i < player.trail.length; i++) {
        let element = player.trail[i];
        let shade = map(i, 0, player.trail.length, 50, 255);

        push();
        noStroke();
        fill(shade);
        rect(element.x, element.y, player.size, player.size);
        pop();
    }

    player.trail.push({
        x: player.x,
        y: player.y
    });

    if (player.trail.length > player.maxTrailLength) {
        player.trail.shift();
    }


    if (player.x === coin.x && player.y === coin.y && !coin.collected) {
        emitParticles(coin.x + tileSize / 2, coin.y + tileSize / 2);
        resetCoin();
    }

    if (!coin.collected) {
        push();
        noStroke();
        fill(coin.fill);
        rect(coin.x, coin.y, coin.size, coin.size);
        pop();
    }

    push();
    noStroke();
    fill(player.fill);
    rect(player.x, player.y, player.size, player.size);
    pop();



}

/**
 * Respond to a keypress
 */
function keyPressed(event) {

    let move = {
        x: 0,
        y: 0,
    };
    if (event.keyCode === RIGHT_ARROW) {
        move.x = tileSize;
    }
    else if (event.keyCode === LEFT_ARROW) {
        move.x = -tileSize;
    }
    else if (event.keyCode === UP_ARROW) {
        move.y = -tileSize;
    }
    else if (event.keyCode === DOWN_ARROW) {
        move.y = tileSize;
    }

    if (move.x !== 0 || move.y !== 0) {
        player.x += move.x;
        player.y += move.y;

        player.x = constrain(player.x, 0, width - player.size);
        player.y = constrain(player.y, 0, height - player.size);

    }
}

function resetCoin() {
    coin.x = floor(random(columns)) * tileSize;
    coin.y = floor(random(rows)) * tileSize;
}

function emitParticles(x, y) {
    for (let i = 0; i < 1000; i++) {
        let speed = random(0, 4);
        let angle = random(TWO_PI);

        particles.push({
            x: x,
            y: y,
            vx: cos(angle) * speed,
            vy: sin(angle) * speed,
            size: random(0, 1),
            life: 255
        });
    }
}