/**
 *3D Render
 * Ashmitha Kanagiah
 * 
 * Small project where I explore 3D by creating objects and making something cool
 */

"use strict";

let wavePlane;

function setup() {
    createCanvas(1200, 600, WEBGL);

    // Build a flat plane geometry with wave deformation
    wavePlane = buildGeometry(() => {
        let cols = 100;
        let rows = 100;
        let size = 500; // cube size

        for (let i = 0; i < cols; i++) {
            beginShape(TRIANGLE_STRIP);
            for (let j = 0; j <= rows; j++) {
                for (let colOffset of [0, 1]) {
                    let x = map(i + colOffset, 0, cols, -size / 2, size / 2);
                    let z = map(j, 0, rows, -size / 2, size / 2);

                    // Noise-based y for wave effect
                    let y = noise(
                        x * 0.1,
                        z * 0.1,
                        frameCount * 0.02
                    ) * 30 - 50;

                    vertex(x, y, z);
                }
            }
            endShape();
        }
    });
    wavePlane.computeNormals(SMOOTH);
}

function draw() {
    background(0);
    orbitControl();


    // Lights
    lights();
    noStroke();
    specularMaterial(53, 167, 212); // water-like

    shininess(200);

    // Rotate cube and plane together
    rotateX(PI / 6);
    rotateY(frameCount * 0.01);

    // Draw plane inside cube
    model(wavePlane);
}

