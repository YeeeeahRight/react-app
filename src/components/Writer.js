import React from "react";
import writers from "../data/writers.js";
import {useTranslation} from "react-i18next";
import {Carousel, Container, Image} from "react-bootstrap";
import {Timeline} from 'vertical-timeline-component-for-react';

export default function Writer(props) {
    const {t} = useTranslation();

    let writer = writers[props.id - 1];

    return <>
        <Container className="d-flex justify-content-around mb-5" style={{marginTop: "130px", width: '70%'}} fluid>
            <Image src={writer.img} className="a-auto" style={{width: '34%'}}/>
            <div className="d-flex flex-column text-white my-auto ml-5 text-center"
                 style={{
                     fontSize: '1.5vw'
                 }}>
                <span style={{fontSize: '3vw', lineHeight: '1.1'}}>
                    {t(writer.name)}
                </span>
                <span className="mt-3">
                    {t(writer.years)}
                </span>
                <span className="mt-4" style={{lineHeight: '1.3'}}>
                    {t(writer.description)}
                </span>
            </div>
        </Container>

        {renderTimeline()}

        {renderPhotos()}

        <Container className="mt-5 mb-4" style={{width: '70%'}}>
            <iframe style={{height: "60vh", width: "100%"}} src={writer.video} allowFullScreen></iframe>
        </Container>

        <Container className="mt-5 mb-4" style={{width: '70%'}}>
            <iframe style={{height: "60vh", width: "100%"}} src={writer.location}></iframe>
        </Container>

    </>

    function renderPhotos() {
        return <Container className="mb-5 mt-5" style={{width: '70%'}}>
            <Carousel style={{backgroundColor: "var(--dark)"}}>
                {
                    writer.photos.map((photo) => <Carousel.Item>
                            <img style={{height: "65vh", margin: "auto", width: '70%'}}
                                 className="d-block" src={photo}/>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    }

    function renderTimeline() {
        return <Timeline className="mt-5" lineColor="white">
            {/*{*/}
            {/*    writers.bio.map((bioElem) => <TimelineItem*/}
            {/*            dateText="11/2010 – Present"*/}
            {/*            bodyContainerStyle={{*/}
            {/*                background: '#ddd',*/}
            {/*                padding: '20px',*/}
            {/*                borderRadius: '8px'*/}
            {/*            }}>*/}
            {/*            <h3>Title, Company</h3>*/}
            {/*            <h4>Subtitle</h4>*/}
            {/*            <p>*/}
            {/*                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla*/}
            {/*                exercitation. Veniam velit adipisicing anim excepteur nostrud magna*/}
            {/*                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure*/}
            {/*                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem*/}
            {/*                est.*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla*/}
            {/*                exercitation. Veniam velit adipisicing anim excepteur nostrud magna*/}
            {/*                nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure*/}
            {/*                reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem*/}
            {/*                est.*/}
            {/*            </p>*/}
            {/*        </TimelineItem>*/}
            {/*    )*/}
            {/*}*/}
        </Timeline>
    }
}