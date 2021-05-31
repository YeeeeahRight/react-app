import React from "react";
import writers from "../data/writers.js";
import {useTranslation} from "react-i18next";
import {Carousel, Container, Image} from "react-bootstrap";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';
import NavHeader from "./NavHeader";
import "../styles/personalWriterPage.css"

export default function PersonalWriterPage(props) {
    const {t} = useTranslation();

    let writer = writers[props.id - 1];

    function renderTimeline() {
        return <Container id="bio">
            <Timeline className="mt-5" lineColor="white">
                {
                    writer.bio.map((bioElem) => <TimelineItem
                            dateText={t(bioElem.date)}
                            className="time-line-item">
                            <h3 className="mb-2">{t(bioElem.title)}</h3>
                            <p>
                                {t(bioElem.text)}
                            </p>
                        </TimelineItem>
                    )
                }
            </Timeline>
        </Container>
    }

    function renderPhotos() {
        return <Container id="photos" className="mb-5 mt-5">
            <Carousel>
                {
                    writer.photos.map((photo) => <Carousel.Item>
                            <img className="d-block m-auto photo-carousel-item" src={photo} alt={"Writer photo"}/>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    }

    return <>
        <NavHeader isPersonalPage={true}/>

        <Container id="description" className="d-flex justify-content-around mb-5" fluid>
            <Image src={writer.img} className="a-auto"/>
            <div className="d-flex flex-column text-white my-auto ml-5 text-center description-text">
                <span className="name">
                    {t(writer.name)}
                </span>
                <span className="mt-3">
                    {t(writer.years)}
                </span>
                <span className="mt-4 about">
                    {t(writer.description)}
                </span>
            </div>
        </Container>

        {renderTimeline()}

        {renderPhotos()}

        <Container id="video" className="mt-5 mb-4">
            <iframe src={writer.video} allowFullScreen/>
        </Container>

        <Container id="map" className="mt-5 mb-4">
            <iframe src={writer.location}/>
        </Container>

    </>
}