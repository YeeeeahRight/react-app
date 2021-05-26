import React from "react";
import {Container, Row, Card, Col, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
import first from "../assets/first.jpeg";
import sanya from "../assets/sanya.jpg";
import artemka from "../assets/artemka.jpg";
import kiruha from "../assets/kiruha.jpg";
import NavHeader from "./NavHeader";


export default function Home() {
    return (
        <>
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

            <Container id="best" fluid style={{height: "100vh", backgroundColor:"white"}}
                       className="d-flex flex-column justify-content-center align-items-center">
                <h3 className="mb-3 mt-2">Деятель дня</h3>
                <Card className="text-center" style={{width: "300px"}} bg="white">
                    <Card.Img variant="top" src={first}/>
                    <Card.Body>
                        <Card.Title>Джордж Флойд</Card.Title>
                        <Card.Subtitle className="font-style: italic">1975 - 2021</Card.Subtitle>
                        <Card.Text>
                            Хороший парень
                        </Card.Text>
                        <Link className="btn btn-dark" to="/poets/2">Ай кэнт брыф</Link>
                    </Card.Body>
                </Card>
            </Container>


            <Container id="devs" fluid style={{height: "20vh", backgroundColor: "#17212B"}}
                       className="d-flex justify-content-around text-center">
                <Row style={{width: "70vh"}}>
                    <Col>
                        <a className="dev" href="https://github.com/YeeeeahRight">
                            <Image src={sanya} roundedCircle/>
                            <h4>
                                Александр
                            </h4>
                        </a>
                    </Col>
                    <Col>
                        <a className="dev" href="https://github.com/artem224">
                            <Image src={artemka} roundedCircle/>
                            <h4>
                                Артём
                            </h4>
                        </a>
                    </Col>
                    <Col>
                        <a className="dev" href="https://github.com/rumik2281">
                            <Image src={kiruha} roundedCircle/>
                            <h4>
                                Кирилл
                            </h4>
                        </a>
                    </Col>
                </Row>
            </Container>

            {/*  <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>*/}
        </>
    )
}
