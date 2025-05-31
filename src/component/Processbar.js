import React from "react";
import "./processbar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Processbar() {
  return (
    <div style={{width:'100vw'}}>
        <Navbar bg="dark" expand="lg">
        <Container>
            {/* <Navbar.Brand href="#home">MyApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Navbar.Collapse> */}
            <div className="process-container">
            <div className="progress-line">
              <div className="progress-line-fill" id="progress-fill"></div>
            </div>

            <div className="process-bar">
              <div className="step active" id="step1">
                <div className="step-circle">1</div>
                <div className="step-title">Information</div>
              </div>

              <div className="step" id="step2">
                <div className="step-circle">2</div>
                <div className="step-title">Verification</div>
              </div>

              <div className="step" id="step3">
                <div className="step-circle">3</div>
                <div className="step-title">Completion</div>
              </div>
            </div>
          </div>
        </Container>
        </Navbar>
    </div>
  );
}
