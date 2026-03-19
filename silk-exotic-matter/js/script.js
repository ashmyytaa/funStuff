
//variable declarations
var silk;
var radiuss;
var rotation;
var pulseSpeed;
var rotationSpeed;
var growSpeed;

var rMin, rMax, gMin, gMax, bMin, bMax; //rgb max and min values for when color picking

function setup() {
    createCanvas(1260, 650);
    noFill();
    silk = 0;

    radiuss = 700;
    rotation = 0; //default rotation at 0

    pulseSpeed = 0.01;    //speed of outward inward motions
    rotationSpeed = 0.002;//rotation speed
    growSpeed = 0.02;    //speed of when the circle expands further from the center

    randomColor();      //color pickerr
    background(0);
}

function draw() {
    translate(width / 2, height / 2); //putting it in the center
    rotate(rotation); // dunction rotate

    beginShape();
    for (var i = 0; i < width; i++) { //for loop to loop through thr variables

        var ang = map(i * 0.1, 0, width, 0, PI + (width / 7)); //defininf angle 
        ang += 0.1 * sin(i * 0.01 + silk * 0.01); //angle of rotation

        var pulse = 1 + 0.10 * sin(silk * pulseSpeed); //pulsing of the silky rotations
        var rad = radiuss * pulse * noise(i * 0.01, silk * 0.001); //how the radius is mocing

        var x = rad * cos(ang);
        var y = rad * sin(ang);

        var shade = frameCount % 255;

        //mapping the colors
        var r = map(shade, 0, 255, rMin, rMax);
        var g = map(shade, 0, 255, gMin, gMax);
        var b = map(shade, 0, 255, bMin, bMax);

        stroke(r, g, b, 20);
        curveVertex(x, y);
    }
    endShape(CLOSE);

    silk += 1;
    rotation += rotationSpeed;
    radiuss += growSpeed;

    //fading and like strecthing of the colors and the expanding of the silky rotations
    if (frameCount % 600 === 0) {
        background(0);
        randomColor();
    }
}

//dunction to pick random color for the silky circles
function randomColor() {
    //red purple pink vibes
    rMin = random(120, 180);
    rMax = random(rMin + 20, 230);

    gMin = random(50, 120);
    gMax = random(gMin + 20, 180);

    bMin = random(80, 150);
    bMax = random(bMin + 20, 200);
}
