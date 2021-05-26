import React, {Component} from "react";
import {Container, Row, Card, Col, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
import NavHeader from "./NavHeader";
import writers from "../data/writers";
import devs from "../data/devs";

class Home extends Component {

    render() {
        return <>
            <NavHeader/>
            <Container id="about" fluid style={{backgroundColor: "#242F3D", height: "100vh", color: "white"}}
                       className="d-flex flex-column justify-content-center">
                <Row className="justify-content-center">
                    <h1 className="big-heading text-center">
                        Сайт о белорусских писаталей
                    </h1>
                </Row>
                <Row className="justify-content-around mt-5">
                    <h3 className="text-center">
                        Привет, здесь ты найдёшь интересную информацию о белорусских писателей!
                    </h3>
                    <h3 className="text-center">
                        Ты сможешь узнать биографию писателя, фотографии, видео о нём и многое-многое другое!
                    </h3>
                    <h3 className="text-center">
                        Также каждый день мы выбираем писателя дня, так что не забывайте посещать наш сайт!
                    </h3>
                </Row>
            </Container>

            <Container id="best" fluid style={{height: "100vh", backgroundColor: "white"}}
                       className="d-flex flex-column justify-content-center align-items-center">
                <h3 className="mb-3 mt-2">Деятель дня</h3>
                <Card className="text-center" style={{width: "300px"}} bg="white">
                    <Card.Img variant="top" src={writers[0].img} alt="image"/>
                    <Card.Body>
                        <Card.Title>{writers[0].name}</Card.Title>
                        <Card.Subtitle className="font-style: italic">{writers[0].name}</Card.Subtitle>
                        <Card.Text>
                            {writers[0].shortDescription}
                        </Card.Text>
                        <Link className="btn btn-dark" to="/poets/2">Подробно</Link>
                    </Card.Body>
                </Card>

            </Container>

            {this.renderDevs(devs)}
        </>
    }

    renderDevs(data) {
        return <Container id="devs" fluid style={{height: "20vh", backgroundColor: "#17212B"}}
                          className="d-flex justify-content-around text-center">
            <Row style={{width: "70vh"}}>
                {
                    data.map((dev) => <Col>
                            <a className="dev" href={dev.link}>
                                <Image src={dev.img} roundedCircle/>
                                <h4>
                                    {dev.name}
                                </h4>
                            </a>
                        </Col>
                    )
                }
            </Row>
        </Container>
    }
}

export default Home;
