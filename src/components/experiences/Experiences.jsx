import React from 'react';
import './experiences.css';
import {BsWebcamFill} from 'react-icons/bs'
import {FaUniversity} from 'react-icons/fa'
import {MdOutlineSchool} from 'react-icons/md'
import {MdSell} from 'react-icons/md'
import {SiFranprix} from 'react-icons/si'
import {RiCalendarEventFill} from 'react-icons/ri'
import {CiBeerMugFull} from 'react-icons/ci'
import { RiSchoolFill } from "react-icons/ri"

const Experiences = () => {
    return (
        <section id="experiences">
            <h5>Et avant ?</h5>
            <h2>Expériences</h2>
            <div className="container experiences__container">
                <div className="experiences__studies">
                    <h3>Formations</h3>
    
                    <article className="experiences__details">
                        <FaUniversity className="experiences__details-icon" />
                        <h4>École EEMI</h4>
                        <small className='text-light'>{"2023-2024"}</small>
                    </article>
                    
                    <article className="experiences__details">
                        <BsWebcamFill className="experiences__details-icon" /> 
                        <h4>École O'clock</h4>
                        <small className='text-light'>{"2021-2022"}</small>
                    </article>
            
                    <article className="experiences__details">
                        <RiSchoolFill className="experiences__details-icon" />
                        <h4>Université Paris 8</h4>
                        <small className='text-light'>{"2013-2014"}</small>
                    </article>

                    <article className="experiences__details">
                        <MdOutlineSchool className="experiences__details-icon" />
                        <h4>Lycée Honoré de Balzac</h4>
                        <small className='text-light'>{"2009-2012"}</small>
                    </article>
                    
                </div>

                <div className="experiences__work">
                    <h3>Expériences Professionnelles</h3>

                    <article className="experiences__details">
                        <CiBeerMugFull className="experiences__details-icon" />
                        <h4>Serveur / Barman polyvalent</h4>
                        <small className='text-light'>{"2008-∞"}</small>
                    </article>

                    <article className="experiences__details">
                        <SiFranprix className="experiences__details-icon" />
                        <h4>Merchandiser</h4>
                        <small className='text-light'>{"2023"}</small>
                    </article>

                    <article className="experiences__details">
                        <RiCalendarEventFill className="experiences__details-icon" />
                        <h4>Agent administratif</h4>
                        <small className='text-light'>{"2016-2023"}</small>
                    </article>

                    <article className="experiences__details">
                        <MdSell className="experiences__details-icon" />
                        <h4>Conseiller de vente</h4>
                        <small className='text-light'>{"2015-2016"}</small>
                    </article>
                
                </div>
        </div>
        </section>
    )
}

export default Experiences
