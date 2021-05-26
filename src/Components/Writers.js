import React, {Component} from "react";
import {Button, Card, CardGroup, Col, Container, Form, FormControl, Image, Nav, NavLink, Row} from "react-bootstrap";
import first from "../assets/first.jpeg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import five from "../assets/five.jpg";
import six from "../assets/six.jpg"
import NavHeader from "./NavHeader";
import data from "../assets/data.json";

class WritersList extends Component {
    render() {
        return (
            <div>
                {data.map((dataWriters, index) => {
                        return <div>
                            <h1></h1>
                            <Card className="mb-4" style={{width: '18rem', height: '800px'}}>
                                <img
                                    className="img-fluid"
                                    src={dataWriters.img}

                                    style={{height: '250px'}}
                                />
                                <Card.Body style={{backgroundColor: "#0E1621"}}>
                                    <Card.Title style={{color: "white"}}>{dataWriters.name}</Card.Title>
                                    <Card.Text style={{color: "white"}}>
                                        {dataWriters.desc}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <NavLink>Ссылка на писателя</NavLink>
                                </Card.Footer>
                            </Card>

                        </div>

                    }
                )}
            </div>
        )
    }
}

export default WritersList;

// export default function ListWriters()

//     return (
//         <>
//             <NavHeader/>
//
//             <Form className=" form d-flex" style={{backgroundColor: "bisque"}}>
//                 <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="mr-2"
//                     aria-label="Search"
//                 />
//                 <Button variant="outline-success">Search</Button>
//             </Form>
//
//             <Container className="d-flex text-center align-items-center justify-content-center">
//                 <CardGroup className="d-flex justify-content-around align-items-center">
//                     <Row className="pl-5">
//                         <Col>
//                             <Card className="mb-4" style={{width: '18rem', height: '800px'}}>
//                                 <img
//                                     className="img-fluid"
//                                     src={first}
//                                     style={{height: '250px'}}
//                                 />
//                                 <Card.Body style={{backgroundColor: "#0E1621"}}>
//                                     <Card.Title style={{color: "white"}}>Янка Брыль</Card.Title>
//                                     <Card.Text style={{color: "white"}}>
//                                         Нарадзіўся ў Адэсе ў сям'і чыгуначніка Антона Данілавіча Брыля. У 1922 разам з
//                                         бацькамі вярнуўся на іх радзіму, у вёску Загор'е (Польшча, цяпер Карэліцкі раён,
//                                         Гродзенская вобласць)[2]. У 1931 Я. Брыль скончыў польскую сямігодку і паступіў
//                                         у Навагрудскую гімназію, але не змог вучыцца з-за матэрыяльных цяжкасцей.
//                                     </Card.Text>
//                                 </Card.Body>
//                                 <Card.Footer>
//                                     <NavLink>Ссылка на писателя</NavLink>
//                                 </Card.Footer>
//                             </Card>
//
//
//                             <Card style={{width: '18rem', height: '800px'}}>
//                                 <img
//                                     className="img-fluid"
//                                     src={second}
//                                     style={{height: '250px'}}
//                                 />
//                                 <Card.Body style={{backgroundColor: "#0E1621"}}>
//                                     <Card.Title style={{color: "white"}}>Дубовка Владимир Николаевич</Card.Title>
//                                     <Card.Text style={{color: "white"}}>
//                                         Влади́мир Никола́евич Дубо́вка (белор. Уладзі́мір Мікала́евіч Дубо́ўка; 2 (15)
//                                         июля
//                                         1900 — 20 марта 1976, Москва) — белорусский советский поэт, прозаик, языковед,
//                                         переводчик, литературный критик. Лауреат Литературной премии имени Я. Купалы
//                                         (1962).
//                                         Член Союза писателей СССР (1958).
//                                     </Card.Text>
//                                 </Card.Body>
//                                 <Card.Footer>
//                                     <NavLink>Ссылка на писателя</NavLink>
//                                 </Card.Footer>
//                             </Card>
//                         </Col>
//                     </Row>
//                     <Row className="px-5">
//                         <Col >
//                             <Card  style={{width: '18rem', height: '800px'}}>
//                                 <img
//                                     className="img-fluid"
//                                     src={third}
//                                     style={{height: '250px'}}
//                                 />
//                                 <Card.Body style={{backgroundColor: "#0E1621"}}>
//                                     <Card.Title style={{color: "white"}}>Алесь Дуда́рь</Card.Title>
//                                     <Card.Text style={{color: "white"}}>
//                                         Алесь Дуда́рь или Дуда́р (наст. имя Александр Александрович Дайлидович, белор.
//                                         Алесь Дудар; псевдонимы и криптонимы: Т. Глыбоцкі; Тодар Глыбоцкі; Ал. Д.;
//                                         Т. Г.; Т. Г-кі; Арцём Яроцкі; 1904—1937) — белорусский советский поэт, критик,
//                                         романист, переводчик. Один из организаторов белорусского
//                                         литературно-художественного
//                                         объединения «Маладняк». Член Союза писателей СССР (1934).
//                                     </Card.Text>
//                                 </Card.Body>
//                                 <Card.Footer>
//                                     <NavLink>Ссылка на писателя</NavLink>
//                                 </Card.Footer>
//                             </Card>
//
//
//                             <Card className="mt-4" style={{width: '18rem', height: '800px'}}>
//                                 <img
//                                     className="img-fluid"
//                                     src={fourth}
//                                     style={{height: '250px'}}
//                                 />
//                                 <Card.Body style={{backgroundColor: "#0E1621"}}>
//                                     <Card.Title style={{color: "white"}}>Андрей Валентинович Жвалевский</Card.Title>
//                                     <Card.Text style={{color: "white"}}>
//                                         В 1991 году с отличием окончил физический факультет БГУ. После окончания
//                                         занимался
//                                         фундаментальной наукой, дизайном ценных и защищенных бумаг, работал в
//                                         издательстве.
//                                         Первая книга «Порри Гаттер и Каменный Философ», написанная в соавторстве с
//                                         Игорем
//                                         Мытько, вышла в 2002 году и сразу принесла авторам известность. Кроме цикла
//                                         «Порри Гаттер»
//                                         написал серию иронических женских романов «М + Ж» (в соавторстве с Евгенией
//                                         Пастернак),
//                                         фантастические романы «Мастер сглаза».
//                                     </Card.Text>
//                                 </Card.Body>
//                                 <Card.Footer>
//                                     <Nav.Link>Ссылка на писателя</Nav.Link>
//                                 </Card.Footer>
//                             </Card>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col>
//                             <Card className="mb-4" style={{width: '18rem', height: '800px'}}>
//                                 <img
//                                     className="img-fluid"
//                                     src={five}
//                                     style={{height: '250px'}}
//                                 />
//                                 <Card.Body style={{backgroundColor: "#0E1621"}}>
//                                     <Card.Title style={{color: "white"}}>Вячеслав Васильевич Бондаренко</Card.Title>
//                                     <Card.Text style={{color: "white"}}>
//                                         Вячеслав Васильевич Бондаренко (род. 9 мая 1974, Рига, Латвийская ССР) — живущий
//                                         в
//                                         Беларуси русский писатель, общественный деятель. Известен как автор исторических
//                                         книг в серии
//                                         «ЖЗЛ», в том числе биографий Петра Андреевича Вяземского, Лавра Георгиевича
//                                         Корнилова и
//                                         архимандрита Иоанна (Крестьянкина), а также как автор кинороманов «Ликвидация» и
//                                         «Кадетство»
//                                     </Card.Text>
//                                 </Card.Body>
//                                 <Card.Footer>
//                                     <NavLink>Ссылка на писателя</NavLink>
//                                 </Card.Footer>
//                             </Card>
//                             <Card style={{width: '18rem', height: '800px'}}>
//                                 <img
//                                     className="img-fluid"
//                                     src={six}
//                                     style={{height: '250px'}}
//                                 />
//                                 <Card.Body style={{backgroundColor: "#0E1621"}}>
//                                     <Card.Title style={{color: "white"}}>Виктор Иванович Леденёв </Card.Title>
//                                     <Card.Text style={{color: "white"}}>
//                                         Жизнь белорусского писателя и драматурга Виктора Леденёва так же многообразна,
//                                         как и
//                                         жанры, в которых он работает. Родился он на Северном Кавказе, в Адыгее, где его
//                                         отец после
//                                         окончания Ростовского университета работал по созданию школ в этой горной
//                                         республике.
//                                         Там же их семью и застала война. Отец ушёл на фронт, а Виктор со старшим братом
//                                         Александром
//                                         и матерью остался в оккупации. Однако не только пребывание на оккупированной
//                                         территории
//                                         ему пришлось всю жизнь в советское время указывать в различных анкетах.
//                                     </Card.Text>
//                                 </Card.Body>
//                                 <Card.Footer>
//                                     <NavLink>Ссылка на писателя</NavLink>
//                                 </Card.Footer>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </CardGroup>
//             </Container>
//
//         </>
//     )
// }