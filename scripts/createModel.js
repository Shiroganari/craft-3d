let renderer, scene, camera, controls, obj;

function createModel(fileName) {
    const model = document.getElementById('3d-model');
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 90, model.offsetWidth / model.offsetHeight, 0.1, 1000 );
    camera.position.z = 80;
    camera.position.y = -120;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( model.offsetWidth, model.offsetHeight );
    renderer.setClearColor(0xf3f3f3)
    model.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, 0, 100);

    let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);

    let backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();

    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);
    let objLoader;
    let mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath('images/threejs/');
    mtlLoader.setPath('images/threejs/');
    mtlLoader.load('r2-d2.mtl', function (materials) {
    
        materials.preload();
        objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('images/threejs/');
        objLoader.load(fileName, function (object) {
    
            obj = object;
            scene.add(object);
        });
    
    });

   animate()
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    
    obj.rotation.z += 0.01
    renderer.render(scene, camera);
};

export {createModel, animate};