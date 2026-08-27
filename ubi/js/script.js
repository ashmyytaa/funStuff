function setup() {
    createCanvas(1200, 600);
    noStroke();
}

function draw() {
    background(15, 20, 45);

    let pixelSize = 6;

    for (let x = 0; x < width; x += pixelSize) {
        for (let y = 0; y < height; y += pixelSize) {

            // Moving waves
            let wave = sin(x * 0.02 + frameCount * 0.03);
            wave += sin(y * 0.03 - frameCount * 0.02);
            wave += sin((x + y) * 0.01 + frameCount * 0.04);

            // Convert the waves into a rainbow
            let hue = (wave * 40 + frameCount * 0.5) % 360;

            colorMode(HSB, 360, 100, 100);
            fill(hue, 80, 100);

            // Every square stays exactly the same size
            // This makes the pixel effect much stronger
            rect(x, y, pixelSize, pixelSize);
        }
    }

    colorMode(RGB, 255);
}
