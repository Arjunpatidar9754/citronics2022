import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import Melt from "./management/melt.webp";
import Blind from "./management/blind.webp";
import Bollywood from "./management/bollywood.webp";
import Ramp from "./management/ramp.webp";

import Snake from "./management/snake.webp";
import Srijan from "./management/srijan.webp";
import Treasure from "./management/treasure.webp";

import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Management () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">M<span>a</span>na<span>ge</span>ment</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Melt} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Melt Down</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>ATTRACTIVE PRIZES</h3>                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
                        <h3>Guidelines</h3>
                        <ol>
                            <li>Participants will have to remove all sharp and the pointed items before getting into activities.</li>
                            <li>Participants are advised to wear comfortable clothes excluding Sarees and Dhotis.</li>
                        </ol>
                        <p>* Other rules and regulations will be provided on the spot.</p>
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
                    <img src={Blind} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Blind Fold</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>ATTRACTIVE PRIZES</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Event Schedule:</h3>
                            <ol>
                                <li>Round 1st: Following Direction Game.</li>
                                <li>Round 2nd:Stone Collection Game.</li>
                                <li>Round 3rd: Stick The Tape Game.</li>
                            </ol>
                            <h3>Guidelines</h3>
                            <ol>
                                <li>Total students Ina group 2 to 4.</li>
                                <li>Students in group help the blindfolded student around an obstacle course.</li>
                                <li>Be extra careful that no one gets hurt and that everyone is playing as they should.</li>
                                <li>Student cant interchange their position from other student who have already started to play game .</li>
                                <li>Students who exceeds time limit are not be eligible for further rounds.</li>
                                <li>Only these word can be used in game to direct the blind folded student Go Straight , Turn Left , Turn Right, Jump</li>
                                <li>Each team member must be having a valid college ID.</li>
                                <p>* Round wise rules and regulations would be provided on the spot.</p>
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
                    <img src={Bollywood} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Bollywood Bounza</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>ATTRACTIVE PRIZES</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>Guidelines</h3>
                        <ol>
                            <li>For a team, maximum capacity is 5 and minimum is 3 participants.</li>
                            <li>Time duration will be 2 to 3 minutes. </li>
                            <li>Only single bollywood songs (no parody) are allowed.</li>
                            <li>Judgment will be based on dress-up, creativity, Song Selection,Performance, Expression,   Coverage, Entry & Exit and coordination. Judges decision will be final </li>
                            <li>Dignity should be maintained. </li>
                            <li>Teams are suggested to register themselves   with their unique group name, song with its backup.</li>
                            <li>No green room facility should be avail. Teams have to come with their proper arrangements.</li>
                            <li>Songs should not defame any community, caste or religion.</li>
                            <li>Theme will be open.</li>
                        </ol>
                        <p>* Other rules and regulations will be provided on the spot.</p>
                                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Ramp} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Dashing Dem</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 150/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>ATTRACTIVE PRIZES</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <div>
                            <h1>Dashing Dem</h1>
                            <h3>Event Schedule:</h3>
                        <ol>
                            <li>Round 1st: Elimination round.<ol>
                                <li>Individual ramp walk</li>
                                <li>Couple ramp walk</li>
                            </ol></li>
                            <li>Round 2nd: Questionnaire</li>
                        </ol>
                        <h3>Guidelines</h3>
                        <ol>
                            <li>The theme of the event will be “Period/Era based”.</li>
                            <li>Green room will be provided for changing purpose.</li>
                            <li>Participants have to bring their own attires and props and they have to get ready by themselves.</li>
                            <li>College will not be responsible for their stuff whether it gets lost or damage.</li>
                            <li>Maximum number of  participants would be 2 and minimum would be 1.</li>
                            <li>Vulgarity is strongly prohibited. Any form of obscenity will lead to de-barring the participant from the contest.</li>
                            <li>Each team member must be having a valid college ID.</li>
                            <p>* Round wise rules and regulations would be provided on the spot.</p>
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
                    <img src={Snake} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Snake &#38; Ladders</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>ATTRACTIVE PRIZES</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
                        <h3>Guidelines</h3>
                        <ol>
                            <li>Maintain the decorum while questionnaire.</li>
                            <li>Game will start either on 1 or 6 of dice face.</li>
                            <li>Number of participants should be 4.</li>
                            <li>Questions will be asked at the time of ladder and the snake's mouth.</li>
                            <li>Answer time will be 30 seconds.</li>
                        </ol>
                        <p>* Other rules and regulations will be provided on the spot.</p>
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
                    <img src={Srijan} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Srijan</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 40/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>ATTRACTIVE PRIZES</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
        
                        <h3>Guidelines</h3>
                        <ol>
                            <li>Minimum number of participants would be1 and maximum would be 3.</li>
                            <li>A student can not be part of more than one team.</li>
                            <li>Duration of presentation should be max.5 min. Marks will be deducted in case of exceeding the limit.</li>
                            <li>The participants are responsible for their belongings.</li>
                            <li>College uniform is mandatory.</li>
                            <li>Judgement will be based on- Presentation, Expression, Body language and Clarity of Content.</li>
                        </ol>
                        <p>* Other rules and regulations will be provided on the spot.</p>
                        </div>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Treasure} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Treasure Hunt</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 250/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>ATTRACTIVE PRIZES</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
        
                        <h3>Guidelines</h3>
                        <ol>
                            <li>Minimum number of participants would be 1 and maximum would be 5.</li>
                            <li>The participants are responsible for their belongings.</li>
                            <li>College uniform is mandatory.</li>
                            <li>Judgement will be based on- Presentation, Expression, Body language and Clarity of Content.</li>
                        </ol>
                        <p>* Other rules and regulations will be provided on the spot.</p>
                        </div>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        
        </>
    );
}
export default Management;