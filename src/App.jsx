import React from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar>
        <Navbar.Brand>
          emilyemilyemilyemily
        </Navbar.Brand>
      </Navbar>

      <div className="sphere"></div>
      
      <h1>
        Emily Sam
      </h1>
      <p>
        <a href="https://www.linkedin.com/in/emilyhsam/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p>Second element</p>
      <button className="btn">
        click me
      </button>
    </>
  );
}

export default App;
