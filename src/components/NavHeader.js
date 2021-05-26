import {Container, Nav, Navbar} from "react-bootstrap";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import React from "react";

export default function NavHeader() {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" style={{backgroundColor: "#17212B"}} variant="dark">
                <Container fluid="md">
                    <HashLink className="navbar-brand" to="/home/#about">Писатели Беларуси</HashLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/writers">Писатели</Link>
                            <HashLink className="nav-link" to="/home/#about">Описание сайта</HashLink>
                            <HashLink className="nav-link" to="/home/#best">Деятель дня</HashLink>
                            <HashLink className="nav-link" to="/home/#devs">Разработчики</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}