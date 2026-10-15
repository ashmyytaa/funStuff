function setup() {
    createCanvas(1200, 600);
    noStroke();
}

function draw() {
    background(15, 20, 45);

    let pixelSize = 11;

    for (let x = 0; x < width; x += pixelSize) {
        for (let y = 0; y < height; y += pixelSize) {

            ///moving waves
            let wave = sin(x * 0.02 + frameCount * 0.04);
            wave += sin(y * 0.03 - frameCount * 0.02);
            wave += sin((x + y) * 0.01 + frameCount * 0.04);

            //rainbow colors and its intensity
            let hue = (wave * 40 + frameCount * 0.5) % 360;

            colorMode(HSB, 360, 100, 100);
            fill(hue, 80, 100);

            //pixel size
            rect(x, y, pixelSize, pixelSize);
        }
    }

    colorMode(RGB, 255);
}
