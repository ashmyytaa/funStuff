let particles = [];
let totalParticles = 6000; //total particles

// let particleTwo = [];
// let totalParticlesTwo = 8000; //SECONND SET OF PARTICLES, FOR MORE FLOW

function setup() {
    createCanvas(500, 660);
    colorMode(RGB, 255);

    for (let i = 0; i < totalParticles; i++) { //initiating particles in setup
        particles.push({
            x: random(width),
            y: random(height),
            speed: random(1, 2),
            seed: random(100)
        });
    }


    // for (let i = 0; i < totalParticlesTwo; i++) {
    //     particleTwo.push({
    //         x2: random(width),
    //         y2: random(height),
    //         speed2: random(1, 2),
    //         seed2: random(100)
    //     });
    // }
}

function draw() {
    background(0); //black bg, no fade

    for (let p of particles) {

        let n = noise(p.x * 0.001, p.y * 0.001, frameCount * 0.001); //setting up the noise frame
        let angle = n * TWO_PI * 2;

        p.x += sin(angle + frameCount * 0.00002) * p.speed;
        p.y += cos(angle + frameCount * 0.00002) * p.speed;

        if (p.x < 0) { p.x = width; }
        if (p.x > width) { p.x = 0; }
        if (p.y < 0) { p.y = height; }
        if (p.y > height) { p.y = 0; }

        // if (p.x < 0 || p.x > width) {
        //     p.speed *= -1;
        // }

        // if (p.y < 0 || p.y > height) {
        //     p.speed *= -1;
        // }
        let sparkle = noise(p.seed + frameCount * 0.009); //adding sparkle to have a glow/sparkle effect to each ellipse
        let size = map(sparkle, 0, 1, 1.5, 2);

        let alpha = map(sparkle, 0, 1, 100, 190);
        push();
        fill(255, alpha);
        // noFill();
        noStroke();
        //stroke(255, alpha);
        ellipse(p.x, p.y, size);
        pop();
    }


    // for (let pp of particleTwo) {
    //     let nn = noise(
    //         pp.x2 * 0.0009,
    //         pp.y2 * 0.0009,
    //         frameCount * 0.0005
    //     );
    //     let anglee = nn * TWO_PI * 3;
    //     pp.x2 += sin(anglee + frameCount * 0.00002) * pp.speed2;
    //     pp.y2 += cos(anglee + frameCount * 0.00002) * pp.speed2;
    // if (pp.x < 0) { p.x = width; }
    // if (pp.x > width) { p.x = 0; }
    // if (pp.y < 0) { p.y = height; }
    // if (pp.y > height) { p.y = 0; }
    //     // if (p.x < 0 || p.x > width) {
    //     //     p.speed *= -1;
    //     // }
    //     // if (p.y < 0 || p.y > height) {
    //     //     p.speed *= -1;
    //     // }
    //     let sparklee = noise(pp.seed2 + frameCount * 0.09);
    //     let sizee = map(sparklee, 0, 1, 1.5, 2);
    //     let alphaa = map(sparklee, 0, 1, 10, 150);
    //     fill(255, alphaa);
    //     // noFill();
    //     noStroke();
    //     //stroke(255, alpha);
    //     ellipse(pp.x2, pp.y2, sizee);
    // }
}
