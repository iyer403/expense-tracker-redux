import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {




  return (
    <>
    
      <Navbar className="p-2" bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">PiggyBank</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Add Expense</Nav.Link>
            <Nav.Link href="#pricing">Add Income</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</>
  
  );
}



export default Navigation;
