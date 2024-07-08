import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//need to import useEffect function for threeJS to work?
import { useEffect } from 'react'
import * as THREE from 'three'
//bringing in orbit controls and stats
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import Stats from 'three/examples/jsm/libs/stats.module.js'
//importing new class 
import sceneOne from './TheScenes/sceneOne'

function App() {
  useEffect(() => {

    //call the new class
    const runIt = new sceneOne('thatThreeCanvas');
    //get it running
    runIt.initialize();
    runIt.animate();

    //add the object
    const boxGeo = new THREE.BoxGeometry(17, 17, 17);
    const boxMatter = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeo, boxMatter);

    runIt.scene.add(boxMesh);

    //original single class app code commented out and replaced with a separate class (we doing OOP???)
    //initialize scene
    // const scene = new THREE.Scene();

    // //initialize the camera
    // const camera = new THREE.PerspectiveCamera(
    //   50,
    //   window.innerWidth / window.innerHeight,
    //   1,
    //   1000
    // );

    // //set camera position
    // camera.position.z = 96;

    // //initialize renderer
    // //takes in canvas element
    // const canvas = document.getElementById('thatThreeCanvas');
    // const renderer = new THREE.WebGLRenderer({
    //   canvas,
    //   //set antialiasing to be true so 3d objects look smooth
    //   antialias: true,
    // });
    // //set size of renderer
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // //append it to the document
    // document.body.appendChild(renderer.domElement);

    // //adding lighting (so that we can actually see anything)
    // //add ambient lighting
    // //pass in colour and intensity
    // const ambientLighting = new THREE.AmbientLight(0xffffff, 0.6);
    // //make it cast a shadow
    // ambientLighting.castShadow = true;
    // //add the ambient light
    // scene.add(ambientLighting);

    // //then we add a spotlight
    // const spottyLighting = new THREE.SpotLight(0xffffff, 1);
    // spottyLighting.castShadow = true;
    // //set the position of the spotlight
    // spottyLighting.position.set(0, 65, 33);

    //now to add an object
    // const boxGeo = new THREE.BoxGeometry(17, 17, 17);
    // const boxMatter = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeo, boxMatter);
    // //add it to the scene
    // scene.add(boxMesh);


    // //Adding orbit controls
    // const orbiControls = new OrbitControls(camera, renderer.domElement);

    // // Adding FPS stats
    // const fpAts = Stats();
    // document.body.appendChild(fpAts.dom);




    // //now to animate it
    // const animation = () => {
    //   //update stats & controls on every frame
    //   fpAts.update();
    //   orbiControls.update();

    //   //add rotation to the box
    //   boxMesh.rotation.x += 0.01;
    //   boxMesh.rotation.y += 0.01;
    //   //take in the renderer and call the render function
    //   renderer.render(scene, camera);
    //   //run this ^ function every single frame
    //   window.requestAnimationFrame(animation);
    // };
    // //call the animation function
    // animation();

  }, []);


  return (
    <>
      <div>
        <header class="font-bold text-6xl">Hello Blins</header>
        <canvas id='thatThreeCanvas' />
      </div>
    </>

  )





}

export default App
