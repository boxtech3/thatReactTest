import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//need to import useEffect function for threeJS to work?
import { useEffect } from 'react'
import * as THREE from 'three'

function App() {
  useEffect (() => {
    //initialize scene
    const scene = new THREE.Scene();

    //initialize the camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    //set camera position
    camera.position.z = 96;

    //initialize renderer
    //takes in canvas element
    const canvas = document.getElementById('myThreeJsCanvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      //set antialiasing to be true so 3d objects look smooth
      antialias: true,
    });
    //set size of renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    //append it to the document
    document.body.appendChild(renderer.domElement);

    //adding lighting (so that we can actually see anything)
    //add ambient lighting
    //pass in colour and intensity
    const ambientLighting = new THREE.AmbientLight(0xffffff, 0.6);
    //make it cast a shadow
    ambientLighting.castShadow = true;
    //add the ambient light
    scene.add(ambientLighting);

    //then we add a spotlight
    const spottyLighting = new THREE.SpotLight(0xffffff, 1);
    spottyLighting.castShadow = true;
    //set the position of the spotlight
    spottyLighting.position.set(0, 65, 33);

    //now to animate it
    const animation = () => {
      //take in the renderer and call the render function
      renderer.render(scene, camera);
      //run this ^ function every single frame
      window.requestAnimationFrame(animation);
    };
    //call the animation function
    animation();

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
