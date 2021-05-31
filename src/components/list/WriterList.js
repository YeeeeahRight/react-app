import React from "react";
import {Card} from "react-bootstrap";
import writers from "../../data/writers.js";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import "../../styles/writer-list.css"

export default function WriterList(props) {
    const {t} = useTranslation();

    let writers = props.writers !== undefined ? props.writers : writers;

    return <div className="d-flex justify-content-around flex-wrap m-auto writer-list">
        {writers.map((writer) =>
            <Card className="mb-4 writer">
                <img
                    src={writer.img}
                    alt="writer image"
                />
                <Card.Body className="writer-body text-white">
                    <Card.Title className="title">
                        {t(writer.name)}
                    </Card.Title>
                    <Card.Text>
                        {t(writer.shortDescription)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="footer">
                    <Link to={"/writers/" + writer.id}>
                        {t('writers.details')}
                    </Link>
                </Card.Footer>
            </Card>
        )}
    </div>
}