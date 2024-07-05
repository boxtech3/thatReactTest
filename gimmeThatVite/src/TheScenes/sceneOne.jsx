//creating a separate class to hold the sceneOne code so that the App.jsx file stays tidy
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class sceneOne {
    constructor(canvasId) {
        this.fov = 45;
        this.canvasId = canvasId;

        this.scene = undefined;
        this.stats = undefined;
        this.camera = undefined;
        this.controls = undefined;
        this.renderer = undefined;
    }

    initialize() {
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.camera.position.z = 98;

        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();

        const canvas = document.getElementById('thatThreeCanvas');
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            //set antialiasing to be true so 3d objects look smooth
            antialias: true,
        });

        //setting up renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        //setting up stats
        this.stats = Stats();
        document.body.appendChild(this.stats.dom);

        let ambientLighting = new THREE.AmbientLight(0xffffff, 0.6);
        //make it cast a shadow
        ambientLighting.castShadow = true;
        //add the ambient light
        this.scene.add(ambientLighting);

        //then we add a spotlight
        let spottyLighting = new THREE.SpotLight(0xffffff, 1);
        spottyLighting.castShadow = true;
        //set the position of the spotlight
        spottyLighting.position.set(0, 65, 33);
        this.scene.add(spottyLighting);

        //if window resizes
        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

         animate() {
            //window is implied
            window.requestAnimationFrame(this.animate.bind(this));
            this.render();
            this.stats.update();
            this.controls.update();
        }


        render() {
            // NOTE: Update uniform data on each render.
            // this.uniforms.u_time.value += this.clock.getDelta();
            this.renderer.render(this.scene, this.camera);
        }




  



}