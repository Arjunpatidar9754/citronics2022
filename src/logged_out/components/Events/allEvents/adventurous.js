import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import Red from "../../../images/sports/roadies.webp";

import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Adventurous () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">R<span>o</span>adies</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Red} alt="roadies" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Roadies</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 150/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 1200/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 700/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>Guidelines for Roadies Event</h3>
                        <h4>Entry Prize: - 150/- </h4>
                        <h4>First Prize: -1200/-, Runner Up: -700/- </h4>
                        <h4>Venue: - CDIPS Lawn</h4>
                        <li>1)	Every participant has to carry some extra comfortable sports clothes.</li>
                        <li>2)	College will provide all the necessary safety equipment</li>
                        <li>3)	Medical facilities will be provided by the college in case of any injury or emergency.</li>
                        <li>4)	All the participants have to maintain the decorum.</li>
                        <li>5)	Any kind of misbehaviour with volunteers, judges or with other contestant will directly leads to disqualification.</li>
                        <li>6)	Any kind of accessories, electronic gadgets, etc are not allowed while participation.</li>
                        <li>7)	No participant will be entertained without registration. </li>
                                        
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                
                </Accordion>
        </section>
        
        </>
    );
}
export default Adventurous;