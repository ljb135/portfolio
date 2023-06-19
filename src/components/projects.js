import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, Gltf } from "@react-three/drei";
import React, { Component } from 'react'
import { Container } from 'react-bootstrap';


export default class Projects extends Component{
	render() {
		return (
            <Container className='vh-100'>
                <Canvas>
					<PerspectiveCamera rotateOnAxis={[]}>
					<mesh>
						<ambientLight intensity={1} />
						<Gltf src="./poly.glb" receiveShadow castShadow scale={30} rotation={[0, 1.55, 0]}/>
						<OrbitControls/>
    					<meshStandardMaterial />
					</mesh>
					</PerspectiveCamera>
				</Canvas>
            </Container>
		);
	}
}