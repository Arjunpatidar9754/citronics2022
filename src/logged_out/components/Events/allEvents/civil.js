import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import Arch from "./civil/archbridge.webp";
import Jenga from "./civil/jengablock.webp";
import Nirmaan from "./civil/nirmaan.webp";
import TikTak from "./civil/tiktaktoe.webp";


import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Civil () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">c<span>i</span>vil</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Arch} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : ARCH BRIDGE</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 2000/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>ARCH BRIDGE</h3>
                        <p>Breaking point is a game of physical skill and presents of mind. The
                            arch is one of the most important parts of the building or in other
                            construction of civil engineering. For that in the this event we give task
                            to the participant to construct a arch by rough material so student will
                            understand the behaviour of the arch.</p>
                    
                        <h4>Guidelines</h4>
                        <li>1. All participants only have to use three rough materials
                            provided by event coordinator.
                            </li>
                        <li>2. They have to construct the arch using the frame provided to
                            them.</li>
                        <li>3. After the construction the frame will be removed and load
                            will apply.</li>
                        <li>4. Arch which bear maximum load will be the winner.</li>
                        <li>5. If the arch did not sustain before the application of load then
                            the team will disqualify</li>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                
                </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Jenga} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : jenga block</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 2000/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>JENGA BLOCK</h3>
                        <p>JENGA is a game of physical and mental skill. In this event players
                            take turns removing one block at a time from a tower constructed of 54
                            blocks. Each block removed is then balanced on top of the tower,
                            creating a progressively taller but less stable structure.</p>
                    
                        <h4>Guidelines</h4>
                        <li>1. Stake will be prepared by the event volunteer only.</li>
                        <li>2. Participants has to use their one and at a time</li>
                        <li>3. Their will be three members in one team.</li>
                        <li>4. Only two members are permitted to play at a time.</li>
                        <li>5. Participants has to complete the game in 30 min.</li>
                        <li>6. Team will be disqualifying if not reach on given time.</li>
                        <li>7. If the placing of block is horizontal then 1 mark will be awarded
                            to them</li>
                        <li>8. If the placing of block is vertical then 3 marks will be awarded to
                            them</li>
                        <li>9. If stake fall by team members mistake, then team will be
                            disqualified.</li>
                        <li>10. If stake fall by the volunteers or coordinators mistake then
                            the time counting will stop and it will resume only after that team
                            prepare their stake as previous.</li>
                        <li>11. If during placing and after placing the stake fall then the
                            height of stake will be as previous.</li>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Nirmaan} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Nirmaan</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 500/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 3000/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 2000/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <div>
                        <h3>Nirmaan</h3>
                        <p>
                            Nirmaan is an event in which students get a chance to show case their
                designing and modelling skills.
                This event is open to all Architectural , Interior Designers and Civil
                Engineering Students
                        </p>
                    </div>

                    <div>
                        <h2>Guidelines</h2>
                    <li> 1. All the registered teams have to prepare a 3D model</li>
                <li>2. Plot area must not exceed 30 x 50 ft.</li>
                <li>3. Students have to make a G+1 model</li>
                <li> Ground floor – 2bhk with all required amenities</li>
                <li>First floor – students are free to design with any amenities</li>
                <li>4. Students have to make floor separation model</li>
                <li>5. Model should be made with white cardboard</li>
                </div>
                    <div>
                        <h2>Judging Criteria</h2>
                        <li>I. Follow all Indian standard guidelines.</li>
                <li>II. Make plan for Indore region only</li>
                <li>III. The plan has to be made for upper middle class family</li>
                <li>IV. Extra marks will be considered for finishing and detailing</li>
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
                    <img src={TikTak} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Tic -Tac - Toe</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 2000/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <div>
                        <h3>Tic -Tac - Toe</h3>
                        <p>
                            In this game three rings are placed in a square shape or order
                In a one time two teams will play the game simultaneously
                Two baskets are set for thrown the ball
                Put the hanky in the ring this process repeats 2 times 
                        </p>
                    </div>

                    <div>
                        <h2>Guidelines</h2>
                        <li>1. Each team comprise of 3 Members</li>
                        <li> 2. Time given to each team is 60 second</li>
                        <li> 3. In this 60 second student need to make basket and place their mark in
                            the block</li>
                        <li>   4. Second person from each team will make basket only after first player
                            reach start point</li>
                        <li>   5. If two team make same score then time will be the final criteria </li>
                    </div>
                                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
        
        </>
    );
}
export default Civil;