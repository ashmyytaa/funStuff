let positions = [];   // stores particle positions
let velocities = [];  // stores particle movement direction
let total = 2000;
let time = 0;

function setup() {
    createCanvas(800, 670);
    background(8, 0, 20);
    blendMode(ADD);

    for (let i = 0; i < total; i++) {
        positions[i] = createVector(random(width), random(height));
        velocities[i] = createVector(0, 0);
    }
}

function draw() {
    blendMode(BLEND);
    background(0, 0, 0, 8);
    blendMode(ADD);

    for (let i = 0; i < total; i++) {

        let scale = 0.0007;
        let angle = noise(
            positions[i].x * scale,
            positions[i].y * scale,
            time
        ) * TWO_PI * 4;

        velocities[i].x = cos(angle);
        velocities[i].y = sin(angle);
        velocities[i].mult(0.5);

        positions[i].add(velocities[i]);

        if (positions[i].x > width) positions[i].x = 0;
        if (positions[i].x < 0) positions[i].x = width;
        if (positions[i].y > height) positions[i].y = 0;
        if (positions[i].y < 0) positions[i].y = height;

        let n = noise(positions[i].x * 0.002, positions[i].y * 0.005, time);

        let r = 255;
        let g = 60 + 60 * sin(n * PI);
        let b = 200 + 55 * cos(n * PI);

        stroke(r, g, b, 190);
        strokeWeight(1.5);
        point(positions[i].x, positions[i].y);
    }

    time += 0.002;
}
