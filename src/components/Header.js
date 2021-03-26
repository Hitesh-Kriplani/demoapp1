import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logout from "../pages/Logout.js";
import Login from "../pages/Login.js";
import Profile from "../pages/Profile.js";
import "../styles/header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Router>
      <div>
        <Container>
          <Navbar collapseOnSelect expand="md" style={{ backgroundColor:"white" }}>
            <Navbar.Brand href="#home">MyTodoApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link ><Link to="/" style={{ color: "black" }}>Home</Link></Nav.Link>
                <Nav.Link ><Link to="/login" style={{ color: "black" }}>Sign-Up/Sign-In</Link></Nav.Link>
                <Nav.Link ><Link to="/logout" style={{ color: "black" }}>Log Out</Link></Nav.Link>
                <Nav.Link ><Link to="/profile" style={{ color: "black" }}>MyProfile</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default Header;