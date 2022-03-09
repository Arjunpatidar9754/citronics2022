import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import aeroplanetoss from "./onspot/aeroplanetoss.webp";
import brownnin from "./onspot/brownnin.webp";
import handlegchallenge from "./onspot/handlegchallenge.webp";
import pubg from "./onspot/pubg.webp";
import rangoli from "./onspot/rangoli.webp";
import sodacan from "./onspot/sodacan.webp";

import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function OnSpot () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center"><span>O</span>n <span>S</span>pot</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={aeroplanetoss} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : AEROPLANE TOSS</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>100-150 : 100/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>50-100 : 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>0-50 points : 20/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>AEROPLANE TOSS</h3>
                        <p>It is interesting game in which player will throw paper planes in the circles on the board which are marked with points. </p>
                        <ol>
                            <h4>GUIDELINE:</h4>
                            <li>A run up or fast walk as part of launch is not permitted.</li>
                            <li>The distance between the target and starting point is 3.5m.</li>
                            <li>Total number of attempts 03.</li>
                            <li>Prize money will be awarded according to the points.</li>
                            <li>Prize money according to points.</li>
                            <li>Participants should maintain dignity and discipline.</li>
                        </ol>
                        <div>
                            <h4>Event Dates:25th march , 26th march 2k22</h4>
                            <h4>Venue : opposite CDIPS block </h4>
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
                    <img src={brownnin} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Brownian Tennis</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Throw : 100/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Throw : 80/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Third Throw : 50/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>Brownian Tennis </h3>
                        <p>Brownian tennis is a sport event in which participant have to throw the ball on the table using a 
                            bat to put exactly in the aimed container from the starting line</p>
                            <ol>
                                <h3>Guidelines</h3>
                                <li>The event will comprise of three throws (Per participant).</li>
                                <li>Participant can participate in pair of two as the game will be conducted as a competition between two of them.</li>
                                <li>For single player participants -if the person has win in the first goal no further 2 chances</li>
                            </ol>
                            <div>
                                <h3>Event Date:25/mar/2022 &#38; 26/mar/2022</h3>
                                <h3>Winner will be declared at that time only.</h3>
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
                    <img src={handlegchallenge} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : HANDLEG CHALLENGE</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 150/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>HANDLEG CHALLENGE</h3>
                        <p>It is a popular playground game in which each row of handleg will have a combination of 3 landing spaces. The landing space can be a combination of 2 feet with 1 hand or 2 hands with 1 foot. </p>
                        <ol>
                            <h3>GUIDELINE</h3>
                            <li>You have to rich the finish line by following the prints.</li>
                            <li>Participant should complete the task with in the 50 sec.</li>
                            <li>Participants should maintain dignity and discipline.</li>
                        </ol>
                        <div>
                            <h3>Event Dates : 25th march, 26th march 2k22</h3>
                            <h3>Venue: opposite CDIPS block </h3>
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
                    <img src={pubg} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : PUBG</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Solo-Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Solo-Prize : 500/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Duo-Entry Fees: 100/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Duo-Prize : 800/-</h3> 
                        <h3 style={{textTransform: "uppercase"}}>Squad-Entry Fees: 200/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Squad-Prize(high-kill 300/- bonus) : 1500/-</h3>                  
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>PUBG</h3>
                        <h3>Battle grounds Mobile India</h3>
                        <p>An online gaming event where 100 competitors compete on a 8 x 8 km terrain to achieve the first position </p>

                        <ol>
                            <h3> Rules of Conduct :</h3>
                            <li>All players should carry earphones.</li>
                            <li>Any one found cheating will get disqualified and be fined.</li>
                            <li>Any kind of hacks (ESP, USP, no grass file, no recoil file, auto aim etc.) are not allowed.</li>
                            <li>It is a lane event and all players must remain present in the campus during the period of game.</li>
                        </ol>                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={rangoli} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Rangoli</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100/-(SOLO) AND 150/-(DUO)</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 500/-(Solo), Rs 800/-(Duo)</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 300/-(Solo), RS 500/-(Duo)</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>Rangoli</h3>
                        <p>Rangoli is the art of making design and expressing one's idea on the floor. participants have to turn their brains on and show their magic on the floor by makig rangoli.</p>
                        <ol>
                            <h3>GUIDLINES</h3>
                            <li>SIZE OF RANGOLI SHOULD BE 3*3 Ft. </li>
                            <li>TIME LIMIT-1 HOUR</li>
                            <li>THEME WILL BE OPEN</li>
                            <li>THERE WILL BE ONLY ONE ROUND OF COMPETITION</li>
                            <li>COLORS WILL PROVIDE TO EACH PARTICIPANTS</li>
                            <li>PHONES ARE STRICTLY PROHIBITED</li>
                        </ol>
                        <h4>JUDGEMNT WILL BE BASED ON OVERALL APPEARANCE,THEME AND CLEARITY OF RANGOLI</h4>
                        <div>
                            <h4>EVENT DATE : 25/03/2022 , 26/03/2022</h4>
                        <h4> VENUE: IN FRONT OF CDIPS BUILDING.</h4>
                        </div>
                        <ol>
                            <h4>NOTE:</h4>
                            <li>THE AMOUNT PAID IS NON-REFUNDABLE</li>
                            <li>IN CASE THE EVENT WILL BE CANCELLED THEN THAT AMT CAN BE USED FOR THE ANOTHER EVENT</li>
                        </ol>
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={sodacan} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : SODA CAN ROLL CHALLENGE</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>exciting price</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>SODA CAN ROLL CHALLENGE</h3>
                        <p>This  game is a unique and fun game in which a player have to roll the can (Red Bull) on a table where multiple prize money are placed and where the can stops rolling player will get the prize accordingly. </p>
                        <ol>
                            <h3>GUIDELINES </h3>
                            <li>Entry Fees – 50rs( NON REFUNDABLE)</li>
                            <li>You have to roll the CAN.</li>
                            <li>The body of can should cover at least 50% of the strip.</li>
                            <li>The maximum number of attempts are 02.</li>
                            <li>Only one participant  is allowed.</li>
                            <li>Participant should maintain Discipline and Dignity.</li>
                        </ol>
                        <div>
                            <h3>EVENT DATES:- 25 MARCH AND 26 MARCH</h3>
                            <h3>VENUE- OPPOSITE CDIPS BLOCK</h3>
                        </div>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        
        </>
    );
}
export default OnSpot;