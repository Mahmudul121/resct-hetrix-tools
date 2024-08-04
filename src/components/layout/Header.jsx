import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Image from "../ui/Image";
import "./layout.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/" className="p-0">
            <Image src={"./assets/logo.svg"} alt="logo" />
          </Navbar.Brand>
          <Nav className="ms-auto d-flex align-items-center gap-2">
            <Nav.Link href="#home">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Search for anything" />
              </Form.Group>
            </Nav.Link>
            <Nav.Link href="#features">
              <Image src="./assets/notification.svg" alt="" className="" />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Image src="./assets/demo.png" alt="" className="" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
