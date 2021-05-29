import React from "react";
import {useState} from "react";
import {Card} from "react-bootstrap";
import writers from "../data/writers.js";
import {MDBCol} from "mdbreact";
import {useTranslation} from "react-i18next";
import NavHeader from "./NavHeader";
import {Link, useParams} from "react-router-dom";
import Writer from "./Writer";

export default function WriterList() {
    const {id} = useParams();
    const {t} = useTranslation();

    const [value, setValue] = useState('');

    const filteredWriters = writers.filter(writer => {
        return t(writer.name).toLowerCase().includes(value.toLowerCase());
    })

    return <>
        <NavHeader/>

        {
            id !== undefined ?
                (
                    <Writer id={id}/>
                ) :
                (
                    <>
                        <div className="d-flex justify-content-center mt-5">
                            <MDBCol md="6">
                                <form className="form-inline mt-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder={t('writers.search')}
                                        className="search_input form-control form-control-sm"
                                        onChange={(event => setValue(event.target.value))}
                                    />
                                </form>
                            </MDBCol>
                        </div>

                        <div className="d-flex justify-content-around flex-wrap" style={{width: "80%", margin: "auto"}}>
                            {filteredWriters.map((writer) =>
                                <Card className="mb-4 writer">
                                    <img
                                        src={writer.img}
                                        style={{height: '250px'}}
                                    />
                                    <Card.Body style={{backgroundColor: "#0E1621"}}>
                                        <Card.Title style={{color: "white", marginBottom: "15px"}}>
                                            {t(writer.name)}
                                        </Card.Title>
                                        <Card.Text style={{color: "white"}}>
                                            {t(writer.shortDescription)}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{height: "55px"}}>
                                        <Link to={"/writers/" + writer.id}
                                              style={{fontSize: "20px", color: "black", padding: "0"}}>
                                            {t('writers.details')}
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            )}
                        </div>
                    </>
                )
        }
    </>
}


// export default function ListWriters()

//     return (
//


// backgroundColor: "bisque"
// }
// //}>
//
//<FormControl
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