import React from "react";
import {Container, Row, Card, Col, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
import NavHeader from "./NavHeader";
import writers from "../data/writers";
import devs from "../data/devs";

import {useTranslation} from "react-i18next";

export default function Home() {
    const {t} = useTranslation();

    return (
        <>
            <NavHeader/>
            <Container id="about" fluid style={{backgroundColor: "#242F3D", height: "100vh", color: "white"}}
                       className="d-flex flex-column justify-content-center">
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

            <Container id="best" fluid style={{height: "107vh", backgroundColor: "white"}}
                       className="d-flex flex-column justify-content-center align-items-center">
                <h3 className="mb-3 mt-1">{t('header.best')}</h3>
                <Card className="text-center" style={{width: "300px"}} bg="white">
                    <Card.Img variant="top" src={writers[0].img} alt="image"/>
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
                        <Link className="btn btn-dark" to="/writers/2">{t('writers.details')}</Link>
                    </Card.Body>
                </Card>

            </Container>
            {
                renderDevs(devs)
            }
        </>
    );

    function renderDevs(data) {
        return <Container id="devs" fluid style={{height: "20vh", backgroundColor: "#17212B"}}
                          className="d-flex justify-content-around text-center">
            <Row style={{width: "70vh"}}>
                {
                    data.map((dev) => <Col>
                            <a className="dev" href={dev.link}>
                                <Image src={dev.img} roundedCircle/>
                                <h4>
                                    {t(dev.name)}
                                </h4>
                            </a>
                        </Col>
                    )
                }
            </Row>
        </Container>
    }
}
