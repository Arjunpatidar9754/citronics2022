import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import diseno from "./pharma/diseno.webp";
import Money from "./pharma/pharmacoinnovation.webp";
import Youth from "./pharma/module.webp";

import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Pharma () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">P<span>h</span>arma</h1>
            </div>
        </div>
        
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={diseno} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : PHARMA DISENO CONCEPTUAL</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 300/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 1500/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
                        <h3>Description</h3>
                        <p>THIS IS ABOUT THE CONCEPT/HYPOTHESIS OF YOUR SCIENTIFIC RESEARCH/ INNOVATION/ INVENTION IN RELATION TO THE PHARMACEUTICALS WITH CERTAIN JUSTIFICATION BEHIND IT.</p>
                        <h3>EVENT STRATEGY:</h3>
                        <p>PARTICIPANT CAN PRESENT THE CONCEPT /HYPOTHESIS AS POWER POINT PRESENTATION OR ANIMATED VIDEOS.
                            PARTICIPANT MUST GIVE JUSTIFICATION BEHIND THE CONCEPT, PROBLEMS AND SOLUTIONS ASSOCIATED WITH IT.                
                        </p>
                    </div>
                    <div>
                        <h3>GUIDELINES</h3>
                        <ol>
                            <li>Number of team members in every event 3 student 1 mentor.</li>
                            <li>Each team member must be having a valid college ID.</li>
                            <li>Please bring photocopy of the fee receipt.</li>
                            <li>Time limit of explanation / presentation of every participants </li>
                            <li>The participating College will have to bear all the expenses of the participation the event.</li>
                            <li>Two copies of brief write-up about the exhibit/model/project should be prepared and presented at the time of registration and judgment.</li>
                            <li>The decision of the Judges would be final.</li>
                            <li>Minimum 10 entries are must otherwise event will be cancelled</li>
                            <li>Amount is non-refundable.</li>
                            <li>Participants reporting time is 9 AM.</li>
                        </ol>
                    </div>
                                
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Money} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : PHARMACO INNOVATSIA</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 300/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 1500/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
                        
                        <h3>Description</h3>
                        <p>THIS IS ABOUT NOVEL /INNOVATIVE PHARMA FORMULATION WITH PERFECT RATIONAL BEHIND THE CONCEPT.</p>
                        <h3>EVENT STRATEGY:</h3>
                        <p>THE NOVEL FORMULATION SHOULD BE PREPARED AT THEIR OWN WORKPLACE AND A VIDEO CLIP OF FORMULATION PREPARED AND WELL LABELLED FORMULATION MUST BE BROUGHT BY THE PARTICIPANT AT THE TIME OF EVENT
                            A VIDEO CLIP OF FORMULATION MUST BE BROUGHT BY THE PARTICIPANT DURING PREPARATION
                            EXPLANATION & PROOFS OF NOVELTY OF FORMULATION
                            POWER POINT PRESENTATION ABOUT THE RATIONAL OF INNOVATIVE FORMULATION.
                            PARTICIPANT MUST BE PRESENT ALONG WITH THEIR FORMULATION.
                            INVESTIGATION BASED STUDY.
                            </p>
                    </div>
                    <div>
                        <h3>GUIDELINES</h3>
                        <ol>
                            <li>Number of team members in every event 3 student 1 mentor.</li>
                            <li>Each team member must be having a valid college ID.</li>
                            <li>Please bring photocopy of the fee receipt.</li>
                            <li>Time limit of explanation / presentation of every participants </li>
                            <li>The participating College will have to bear all the expenses of the participation the event.</li>
                            <li>Two copies of brief write-up about the exhibit/model/project should be prepared and presented at the time of registration and judgment.</li>
                            <li>The decision of the Judges would be final.</li>
                            <li>Minimum 10 entries are must otherwise event will be cancelled</li>
                            <li>Amount is non-refundable.</li>
                            <li>Participants reporting time is 9 AM.</li>
                        </ol>
                    </div>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Youth} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : MODELE PHARAMCEUTIQUE</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 300/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 1500/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        
                        <h3> Description </h3>
                        <p> THIS IS ABOUT DEVELOPING ANY WORKING MODEL OF THE MACHINERY OR TECHNOLOGY USED IN PHARMACY SUGGESTING PARTICULAR SOLUTIONS FOR THE EXISTING PROBLEMS IN PHARMA- INDUSTRY- ACADEMIA BACKGROUND AS WELL AS ABOUT THE INNOVATION AND RESEARCH ASPECTS IN NEWER TECHNOLOGY FOR DEVELOPMENT OF PHARMACEUTICALS. </p>
                        <h3>EVENT STRATEGY:</h3>
                        <p> THE WORKING MODEL SHOULD BE PREPARED AT THEIR OWN WORKPLACE WHICH MUST BE BROUGHT BY THE PARTICIPANT AT THE TIME OF EVENT
                            EXPLANATION OF THE MODEL.
                            
                            PARTICIPANT MUST BE PRESENT ALONG WITH THEIR MODEL.
                            
                            PROBLEM SOLVING STRATEGY SHOULD BE FOCUSED IN THE MODEL CONSTRUCTION IF POSSIBLE.
                            
                            ONLY ELECTRICAL POINTS WILL BE PROVIDED BY THE HOST INSTITUTION </p>

                        <h3> GUIDELINES </h3>
                        <div class="container">
                            <ul>
                            <li> Number of team members in every event 3 student 1 mentor </li>
                            <li> Each team member must be having a valid college ID.</li>
                                <li>Please bring photocopy of the fee receipt.</li>
                                <li>Time limit of explanation / presentation of every participants </li>
                                <li> The participating College will have to bear all the expenses of the participation the event.</li>
                                <li> Two copies of brief write-up about the exhibit/model/project should be prepared and presented at the time of registration and judgment.</li>
                                <li> The decision of the Judges would be final.</li>
                                <li> Minimum 10 entries are must otherwise event will be cancelled</li>
                                <li> Amount is non-refundable.</li>
                                <li> participants reporting time is 9 AM</li>
                            </ul>
                        </div>
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        
        </>
    );
}
export default Pharma;