// library ref: because we are loading a module
import * as THREE from 'three';

//SCENE
const scene = new THREE.Scene()
const loader = new THREE.TextureLoader();

//texturessss
const moonTexture = await loader.loadAsync('textures/moon.jpg');
moonTexture.colorSpace = THREE.SRGBColorSpace;
const earthTexture = await loader.loadAsync('textures/earth.jpg');
earthTexture.colorSpace = THREE.SRGBColorSpace;
const sunTexture = await loader.loadAsync('textures/sunn.jpg');
sunTexture.colorSpace = THREE.SRGBColorSpace;
const lavaTexture = await loader.loadAsync('textures/lava.jpg');
lavaTexture.colorSpace = THREE.SRGBColorSpace;

//mapping the texturess
const material = new THREE.MeshStandardMaterial({
    map: moonTexture
})
const material2 = new THREE.MeshStandardMaterial({
    map: earthTexture
})
const material3 = new THREE.MeshStandardMaterial({
    map: sunTexture
})
const material4 = new THREE.MeshStandardMaterial({
    map: lavaTexture
})


//initializing spheres
const geometry = new THREE.SphereGeometry(0.5, 16, 16)
const sunGeometry = new THREE.SphereGeometry(0.6, 32, 32)

//meshing my spheres
const earth = new THREE.Mesh(geometry, material2)
scene.add(earth)
earth.scale.set(1, 1, 1);
earth.position.x = 3;
const moon = new THREE.Mesh(geometry, material)
scene.add(moon)
moon.scale.set(0.60, 0.60, 0.60);
moon.position.x = 1;
const sun = new THREE.Mesh(sunGeometry, material3)
scene.add(sun)
sun.scale.setScalar(1.5);
const lava = new THREE.Mesh(geometry, material4)
scene.add(lava)
lava.scale.set(0.7, 0.7, 0.7);
lava.position.x = 1.1;



const sunLight = new THREE.PointLight(0xffffff, 20, 100); // brighter
sunLight.position.set(0, 0, 0); // same as Sun mesh
scene.add(sunLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 2); // soft white light
scene.add(ambientLight);




// Simple stars
const starGeometry = new THREE.BufferGeometry();
const starCount = 800; // number of stars
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 50;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

function blinkStars() {
    starMaterial.size = 0.05 + Math.random() * 0.1; // random size each frame
};

const sizes = { width: 1300, height: 650 };

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)
camera.position.z = 5
const canvas = document.querySelector('canvas#three-ex')  //Access the Canvas
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//give it the size
renderer.setSize(sizes.width, sizes.height)
camera.position.set(5, 2, 5);
camera.lookAt(0, 0, 0);


window.requestAnimationFrame(animate)
let elapsedTime = 0  //
function animate(timer) {
    blinkStars(); // super simple blinking

    //calculate the difference since last frame
    let deltaTime = timer - elapsedTime
    elapsedTime = timer //update  new elapsedTime
    earth.rotation.y += 0.001 * deltaTime
    moon.rotation.y += 0.002 * deltaTime
    sun.rotation.y += 0.001 * deltaTime
    lava.rotation.y += 0.002 * deltaTime

    //earth orbits the sun
    earth.position.x = Math.cos(elapsedTime / 1000) * 2.4;
    earth.position.z = Math.sin(elapsedTime / 1000) * 2.4;
    // earth.position.y = Math.sin(elapsedTime / 2000) * 0.3;

    // Moon orbits Earth
    moon.position.x = earth.position.x + Math.cos(elapsedTime / 500) * 1.1;
    moon.position.z = earth.position.z + Math.sin(elapsedTime / 500) * 1.1;

    lava.position.x = Math.cos(elapsedTime / 500) * 1.6;
    lava.position.z = Math.sin(elapsedTime / 500) * 1.6;

    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}



