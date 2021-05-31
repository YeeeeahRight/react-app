import {useTranslation} from "react-i18next";
import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import devs from "../../data/devs";
import "../../styles/devs.css"

export default function DevList() {
    const {t} = useTranslation();

    return <Container id="devs" fluid className="d-flex justify-content-around text-center">
        <Row>
            {
                devs.map((dev) => <Col>
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