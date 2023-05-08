import React, {Suspense, useRef} from 'react';
import {Canvas, extend, useFrame, useThree, useLoader} from '@react-three/fiber';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import './Tour.css';

extend({OrbitControls});

function Controls(props) {
    const {camera, gl} = useThree();
    const ref = useRef();
    useFrame(() => ref.current.update());
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]}/>;
}

function Dome({imageUrl}) {
    const texture = useLoader(THREE.TextureLoader, imageUrl);
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]}/>
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide}/>
        </mesh>
    );
}

function Tour({imageUrl}) {
    console.log(imageUrl)
    return (
        <div className="tour-container" style={{ position: 'relative', flexGrow: 1 }}>
            <Canvas
                camera={{ position: [0, 0, 0.1] }}
                className="tour-canvas"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >

            <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate
                          rotateSpeed={-0.5}/>
                <Suspense fallback={null}>
                    <Dome imageUrl={imageUrl}/>
                </Suspense>
            </Canvas>
        </div>
    );
}

export default Tour;
