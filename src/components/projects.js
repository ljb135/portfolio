import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, Gltf } from "@react-three/drei";
import React, { Component } from 'react'
import { Carousel, CarouselItem, Container } from 'react-bootstrap';


export default class Projects extends Component{
	render() {
		return (
            <Container className='vh-100 my-5'>
				<Carousel variant="dark">
					<Carousel.Item className='vh-100 p-5'>
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
						<Carousel.Caption>
							<h4>
								Jiebin Liang &#40;b. 2001&#41;
								<br/>
								<i>Facet</i>, 2019
							</h4>
							<p>Acrylic on Rubik's Cube</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
            </Container>
		);
	}
}