import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown, Dropdown, SplitButton } from 'react-bootstrap';
import "./Navbar.css";



export default function NavBar(){
    return(
    <div className="Navbar container">
            <Navbar className="Navbar" bg="light" expand="lg">
                <Navbar.Brand href="/">Chez Mel'</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/map">Map</Nav.Link>
                    <NavDropdown title="Accès directe" id="basic-nav-dropdown">
                        <SplitButton
                            key="right"
                            id="dropdown-button-drop-right"
                            drop="right"
                            variant="light"
                            title="Les régions du Japon"
                            size="sm"                    
                        >
                            <Dropdown.Item href="/map/region/hokkaidō" eventKey="1">hokkaidō</Dropdown.Item>
                            <Dropdown.Item href="/map/region/tōhoku" eventKey="2">tōhoku</Dropdown.Item>
                            <Dropdown.Item href="/map/region/kantō" eventKey="3">kantō</Dropdown.Item>
                            <Dropdown.Item href="/map/region/chūbu" eventKey="4">chūbu</Dropdown.Item>
                            <Dropdown.Item href="/map/region/kansai" eventKey="5">kansai</Dropdown.Item>
                            <Dropdown.Item href="/map/region/chūgoku" eventKey="6">chūgoku</Dropdown.Item>
                            <Dropdown.Item href="/map/region/shikoku" eventKey="7">shikoku</Dropdown.Item>
                            <Dropdown.Item href="/map/region/kyūshū" eventKey="8">kyūshū</Dropdown.Item>
                            <Dropdown.Item href="/map/region/okinawa" eventKey="9">okinawa</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="10">AKIKI</Dropdown.Item>
                        </SplitButton>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Prout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
    );
}
