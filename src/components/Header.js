import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "../pages/Home.js";
import Logout from "../pages/Logout.js";
import Login from "../pages/Login.js";
import Profile from "../pages/Profile.js";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
    return (
        <Router>
        <div>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
  
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link to="/login">Sign-Up/Sign-In</Link></Nav.Link>
                  <Nav.Link><Link to="/logout">Log Out</Link></Nav.Link>
                  <Nav.Link><Link to="/profile">MyProfile</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
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
        </div>
      </Router>
    );
}

export default Header;