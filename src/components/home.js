import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

// const NameText = (props) => (
//     <Row style={{
//         marginBottom: "10.1 rem"
//     }}>
//         <span className='font-link'>{props.name}</span>
//     </Row>
// )

class NameText extends Component{
    render() {
        let section = this.props.text.split("*");

        return (
            <Row className='NameRow' style={{
                marginBottom: "-28.3vmin",
                marginRight: "0px",
                marginLeft: "0px"
            }}>
                <Col>{section[0]}</Col>
                <Col xs="auto" className='align-self-center'>{section[1]}</Col>
                <Col>{section[2]}</Col>
            </Row>
        )
    }
}

class NameJumbo extends Component{
	render() {
        let names = this.props.name.split(" ");

		return (
            <Container>
                <Row className='align-middle'>
                {names.map((value) => {
                    return <NameText text={value}/>
                })}
                </Row>
            </Container>
		);
	}
}

export default class Home extends Component{
	render() {
		return (
            <div>
                <NameJumbo name="J*i*ebin Chr*i*s L*i*ang"/>
                <Navbar className='justify-content-center' variant="light" fixed="bottom">
                    <Nav>
                        <Nav.Link href="#features">About Me</Nav.Link>
                        <Nav.Link href="projects">Projects</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/jiebin-liang/">LinkedIn</Nav.Link>
                    </Nav>
                </Navbar>
                {/* <text>This is for me and me alone.</text> */}
            </div>
		);
	}
}