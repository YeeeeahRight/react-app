import {Container, Dropdown, Nav, Navbar} from "react-bootstrap";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import React from "react";

import {useTranslation} from "react-i18next";

export default function NavHeader(props) {
    const {t, i18n} = useTranslation();

    let isPersonalPage = props.isPersonalPage !== undefined && props.isPersonalPage === true;

    function setLanguage(locale) {
        i18n.changeLanguage(locale);
    }

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" style={{backgroundColor: "#17212B"}} variant="dark">
            <Container fluid="md">
                <HashLink className="navbar-brand" to="/#about">{t('header.header')}</HashLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/writers">
                            {t('header.writers')}
                        </Link>
                        {
                            isPersonalPage ? (
                                    <>
                                        <HashLink className="nav-link" to="#description">
                                            {t('header.description')}
                                        </HashLink>
                                        <HashLink className="nav-link" to="#bio">
                                            {t('header.bio')}
                                        </HashLink>
                                        <HashLink className="nav-link" to="#photos">
                                            {t('header.photos')}
                                        </HashLink>
                                        <HashLink className="nav-link" to="#video">
                                            {t('header.video')}
                                        </HashLink>
                                        <HashLink className="nav-link" to="#map">
                                            {t('header.map')}
                                        </HashLink>
                                    </>
                                ) :
                                (
                                    <>
                                        <HashLink className="nav-link" to="/#about">
                                            {t('header.about')}
                                        </HashLink>
                                        <HashLink className="nav-link" to="/#best">
                                            {t('header.best')}
                                        </HashLink>
                                        <HashLink className="nav-link" to="/#devs">
                                            {t('header.devs')}
                                        </HashLink>
                                    </>
                                )
                        }
                        <Dropdown style={{marginLeft: "20px"}}>
                            <Dropdown.Toggle variant="light">
                                {t('header.language')}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{minWidth: "100px"}}>
                                <Dropdown.Item onClick={() => setLanguage("ru")}>Русский</Dropdown.Item>
                                <Dropdown.Item onClick={() => setLanguage("en")}>English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}