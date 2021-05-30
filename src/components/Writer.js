import React from "react";
import writers from "../data/writers.js";
import {useTranslation} from "react-i18next";
import {Carousel, Container, Image} from "react-bootstrap";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';
import NavHeader from "./NavHeader";

export default function Writer(props) {
    const {t} = useTranslation();

    let writer = writers[props.id - 1];

    return <>
        <NavHeader isPersonalPage={true}/>

        <Container id="description" className="d-flex justify-content-around mb-5"
                   style={{marginTop: "130px", width: '70%'}} fluid>
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

        <Container id="video" className="mt-5 mb-4" style={{width: '70%'}}>
            <iframe style={{height: "60vh", width: "100%"}} src={writer.video} allowFullScreen></iframe>
        </Container>

        <Container id="map" className="mt-5 mb-4" style={{width: '70%'}}>
            <iframe style={{height: "60vh", width: "100%"}} src={writer.location}></iframe>
        </Container>

    </>

    function renderPhotos() {
        return <Container id="photos" className="mb-5 mt-5" style={{width: '70%'}}>
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
        return <Container id="bio" >
            <Timeline className="mt-5" lineColor="white">
                {
                    writer.bio.map((bioElem) => <TimelineItem
                            dateText={t(bioElem.date)}
                            bodyContainerStyle={{
                                background: '#ddd',
                                paddingRight: '20px',
                                paddingLeft: '20px',
                                paddingBottom: '5px',
                                paddingTop: '5px',
                                borderRadius: '8px'
                            }}>
                            <h3 className={"mb-2"}>{t(bioElem.title)}</h3>
                            <p>
                                {t(bioElem.text)}
                            </p>
                        </TimelineItem>
                    )
                }
            </Timeline>
        </Container>
    }
}