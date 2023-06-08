import React, { Component } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class LetterDisplay extends Component{
    render() {
        let letter = this.props.letter
        if(letter === 'i'){
            return(<a href="https://www.instagram.com/chris.liang.cl/"  className='letter-button instagram'>{letter}</a>)
        }
        return(<div onClick={(event) => {event.stopPropagation(); this.props.update();}} className='letter-button normal-letter'>{letter}</div>)
    }
}

class NameText extends Component{
    updateColor(){
        document.documentElement.style.setProperty('--primary-color', "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' + 
        (80 + 10 * Math.random()) + '%)');
    }
    constructor(props){
        super(props);
        this.state = {show: false};
    }
    componentDidMount(){
        this.updateColor();
    }
    render() {
        let section = this.props.text.split("*");

        return (
            <Row className='NameRow align-items-center' style={{
                height: "24.3vmin",
                marginRight: "0px",
                marginLeft: "0px",
                zIndex: (this.state.show) ? 0 : 1
            }}
            onMouseEnter={() => this.setState({show: true})}
            onMouseLeave={() => this.setState({show: false})}>
                <Col style={{
                    pointerEvents: (this.state.show) ? "all" : "none",
                    marginTop: "-13.2vmin"
                }}>{[...section[0]].map(letter => <LetterDisplay letter={letter} update={this.updateColor}/>)}</Col>
                <Col style={{
                    pointerEvents: (this.state.show) ? "all" : "none",
                    marginTop: "-13.2vmin"
                }} xs="auto" className='align-self-center letter-button normal-letter' onClick={(event) => {event.stopPropagation(); this.updateColor();}}>{section[1]}</Col>
                <Col style={{
                    pointerEvents: (this.state.show) ? "all" : "none",
                    marginTop: "-13.2vmin"
                }}>{[...section[2]].map(letter => <LetterDisplay letter={letter} update={this.updateColor}/>)}</Col>
            </Row>
        )
    }
}

class NameJumbo extends Component{
	render() {
        let names = this.props.name.split(" ");

		return (
            <Container className='vh-100'>
                <Row className='align-middle NameJumbo'>
                {names.map((value) => {
                    return <NameText text={value}/>
                })}
                </Row>
            </Container>
		);
	}
}

export default class Home extends Component{
    constructor(){
        super();
        this.state = {show: false, light: true};
        this.changeTheme = this.changeTheme.bind(this);
    }
    changeTheme(){
        if(!this.state.show){
            document.documentElement.setAttribute('data-bs-theme', this.state.light ? 'dark' : 'light');
            this.setState({light: !this.state.light})
        }
    }
	render() {
		return (
            <div onClick={this.changeTheme}>
                <NameJumbo name="J*i*ebin Chr*i*s L*i*ang"/>
                <Modal className="about-me" show={this.state.show} onHide={() => this.setState({show: false})} centered>
                    <Modal.Header closeButton style={{borderBottom: 0}}/>
                    <Modal.Body className='pt-0'>
                        <div className='mx-3' style={{textAlign: 'justify'}}>
                            Hey! I'm the creator of this website. This page started as a portfolio website and slowly evolved into my own digital space.
                            Feel free to move the mouse around and click on anything and everything. This website was made to be interactive and encourage exploration {':)'}
                        </div>
                        <div className='m-3' style={{textAlign: 'justify'}}>
                            It will also be where I post my future endeavors. I see it as a digital peek into my life.
                        </div>
                    </Modal.Body>
                    {/* <Modal.Footer/> */}
                </Modal>
                <Navbar className='justify-content-center' variant="light" fixed="bottom">
                    <Nav>
                        <Nav.Link onClick={(event) => {event.stopPropagation(); this.setState({show: true});}}>About Me</Nav.Link>
                        <Nav.Link onClick={(event) => event.stopPropagation()} href="https://github.com/ljb135">Projects</Nav.Link>
                        <Nav.Link onClick={(event) => event.stopPropagation()} href="https://www.linkedin.com/in/jiebin-liang/">LinkedIn</Nav.Link>
                    </Nav>
                </Navbar>
                {/* <text>This is for me and me alone.</text> */}
            </div>
		);
	}
}