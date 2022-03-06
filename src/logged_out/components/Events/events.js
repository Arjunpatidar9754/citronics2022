import React from "react";
// import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import "./events.css";
import EventCards from "./eventCatds";
import imageTop  from "../../images/imageTop.webp";


function Events() {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">E<span>ve</span>nts</h1>
            </div>
        </div>
        <section className="container cards">
            <EventCards /> 
        </section>
        
        </>
    );
}

export default Events;