import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, Gltf } from "@react-three/drei";
import React, { Component } from 'react'
import { Carousel, CarouselItem, Container, CloseButton } from 'react-bootstrap';
import mobility from '../images/mobility.jpg'
import shearing from '../images/shearing.jpg'


export default class Projects extends Component{
	render() {
		return (
            <Container className='vh-100'>
				<CloseButton onClick={() => {this.props.homeRef.current.scrollIntoView()}} className='mt-4 mx-auto position-absolute rounded-circle shadow p-3' style={{zIndex: 2, left: 0, right: 0}}/>
				<Carousel variant="dark" indicators={false} interval={null}>
					<Carousel.Item className='p-5' style={{height: '95vh'}}>
						<Canvas style={{cursor: 'move'}}>
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
								<i>Facet</i>, 2019
							</h4>
							<p>Acrylic on Rubik's Cube</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className='p-5' style={{height: '95vh'}}>
						<Container className='h-100 d-flex align-items-center justify-content-center' style={{}}>
							<img style={{height: "75%", padding: 10, borderStyle: 'dashed', borderWidth: 10}} src={mobility}/>
						</Container>
						<Carousel.Caption>
							<h4>
								<i>Mobility</i>, 2019
							</h4>
							<p>Acrylic on Canvas</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className='p-5' style={{height: '95vh'}}>
						<Container className='h-100 d-flex align-items-center justify-content-center' style={{}}>
							<img style={{height: "75%", padding: 10, borderStyle: 'dashed', borderWidth: 10}} src={shearing}/>
						</Container>
						<Carousel.Caption>
							<h4>
								<i>Shearing</i>, 2019
							</h4>
							<p>Acrylic on Canvas, Cardboard, Paper</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
            </Container>
		);
	}
}