import React from "react";
import {useState} from "react";
import writers from "../data/writers.js";
import {MDBCol} from "mdbreact";
import {useTranslation} from "react-i18next";
import NavHeader from "./NavHeader";
import {useParams} from "react-router-dom";
import PersonalWriterPage from "./PersonalWriterPage";
import WriterList from "./list/WriterList";

export default function WritersPage() {
    const {id} = useParams();
    const {t} = useTranslation();
    const [value, setValue] = useState('');

    const filteredWriters = writers.filter(writer => {
        return t(writer.name).toLowerCase().includes(value.toLowerCase());
    })

    return <>
        {
            id !== undefined ?
                (
                    <PersonalWriterPage id={id}/>
                ) :
                (
                    <>
                        <NavHeader/>
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

                        <WriterList writers={filteredWriters}/>
                    </>
                )
        }
    </>
}