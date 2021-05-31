import React from "react";
import {Container, Row, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import NavHeader from "./NavHeader";
import writers from "../data/writers";
import {useTranslation} from "react-i18next";
import DevList from "./list/DevList";
import "../styles/home-page.css"

export default function HomePage() {
    const {t} = useTranslation();

    return (
        <>
            <NavHeader/>

            <Container id="about" fluid className="d-flex flex-column justify-content-center text-white">
                <Row className="justify-content-center">
                    <h1 className="big-heading text-center">
                        {t('home.aboutHeader')}
                    </h1>
                </Row>
                <Row className="justify-content-around mt-5">
                    <h3 className="text-center">
                        {t('home.aboutText1')}
                    </h3>
                    <h3 className="text-center">
                        {t('home.aboutText2')}
                    </h3>
                    <h3 className="text-center">
                        {t('home.aboutText3')}
                    </h3>
                </Row>
            </Container>

            <Container id="best" fluid className="d-flex flex-column justify-content-center align-items-center bg-white">
                <h3 className="mb-3 mt-1">
                    {t('header.best')}
                </h3>
                <Card className="text-center card-content" bg="white">
                    <Card.Img variant="top" src={writers[0].img} alt="best writer image"/>
                    <Card.Body>
                        <Card.Title>
                            {t(writers[0].name)}
                        </Card.Title>
                        <Card.Subtitle className="font-style: italic">
                            {writers[0].years}
                        </Card.Subtitle>
                        <Card.Text className="mt-2">
                            {t(writers[0].shortDescription)}
                        </Card.Text>
                        <Link className="btn btn-dark" to="/writers/1">
                            {t('writers.details')}
                        </Link>
                    </Card.Body>
                </Card>

            </Container>

            <DevList/>
        </>
    );
}
