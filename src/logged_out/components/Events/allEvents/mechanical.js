import { Grid } from "@material-ui/core";
import React from "react";
import imageTop from "../../../images/imageTop.webp";
import autojunk from "./mechanical/autojunkes.webp";
import cad from "./mechanical/cad.webp";
import officeball from "./mechanical/officeball.webp";
import sketch from "./mechanical/sketch.webp";
import switchingpuzz from "./mechanical/switchingpuzzle.webp";

import "../events.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Mechanical() {
    return (
        <>
            <img src={imageTop} alt="" className="event-img" />
            <div className="container" >
                <div className="event-h-div">
                    <h1 className="event-h" align="center">M<span>ech</span>anical</h1>
                </div>
            </div>
            <section style={{ paddingTop: "150px" }} className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} sm={6}>
                        <img src={autojunk} alt="red-light green light" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} lg={6} sm={6}>
                        <div>
                            <br />
                            <h2 style={{ textTransform: "uppercase" }}>Event Name : Auto Junkies</h2><hr />
                            <h3 style={{ textTransform: "uppercase" }}>Entry Fees: 100/-</h3>
                            <h3 style={{ textTransform: "uppercase" }}>first Prize : 1000/-</h3>
                            <h3 style={{ textTransform: "uppercase" }}>second Prize: 750/- </h3>
                        </div>
                    </Grid>
                </Grid>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show Details</h4></Accordion.Header>
                        <Accordion.Body>
                            <h3>Description: </h3>
                            <p>Auto junkies is an automobile-based event   in which participants have to utilize their knowledge about the automobile to find out parts, assemble them and to build a working mechanism.</p>
                            <h3>Guidelines</h3>
                            <ul>
                                <li>The event will comprise of three rounds, eliminative round, qualifying round and the final round. </li>
                                <li>Task will be different for each round. </li>
                                <li>Task will be announced on the day of competition.</li>
                                <li>Minimum number of members in a team would be 1.</li>
                                <li>Maximum number of members in a team would be 4.</li>
                                <li>Each team member must be having a valid college ID.  </li>
                                <li>Round wise rules & regulations would be provided on the spot</li>
                            </ul>
                            <h3>Event Schedule:</h3>
                            <h5>Round 1 : Pick & Place</h5>
                            <h5>Round 2 : Simple mechanism</h5>
                            <h5>Round 3:  Basic technical questions.</h5>
                            <h3>Event Date:</h3>
                            <p><strong>25/mar/2016</strong> The first round of the competition will be held on this day.
                                <strong>26/mar/2016</strong>The second & final round of the event will be held on this day and winner will be declared on this day.
                            </p>

                            <h3>Venue : Automobile lab mechanical Department Ground floor</h3>
                            <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </section>
            <section style={{ paddingTop: "150px" }} className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} sm={6}>
                        <img src={cad} alt="red-light green light" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} lg={6} sm={6}>
                        <div>
                            <br />
                            <h2 style={{ textTransform: "uppercase" }}>Event Name : CAD Championship</h2><hr />
                            <h3 style={{ textTransform: "uppercase" }}>Entry Fees: 50/-</h3>
                            <h3 style={{ textTransform: "uppercase" }}>first Prize : Rs 1000/-</h3>
                            <h3 style={{ textTransform: "uppercase" }}>second Prize : Rs750/-</h3>
                        </div>
                    </Grid>
                </Grid>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>All the registered team has to design a 2_D model in Ist round and a 3-D model in next round which will be provided by event organizing committee.</li>
                                <li>Participants has to specify the software they are going to use for designing during the registration.</li>
                                <li>Decision taken by judges will be final and will not be change in any circumstances.</li>
                                <li>The system and software for design will be provided to you and also eligible your own laptop.</li>
                                <li>Max. team members are 2 and min. is 1.</li>
                            </ul>
                            <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
            <section style={{ paddingTop: "150px" }} className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} sm={6}>
                        <img src={sketch} alt="red-light green light" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} lg={6} sm={6}>
                        <div>
                            <br />
                            <h2 style={{ textTransform: "uppercase" }}>Event Name : Sketch your Imagination</h2><hr />
                            <h3 style={{ textTransform: "uppercase" }}>Entry Fees: 50/-</h3>
                            <h3 style={{ textTransform: "uppercase" }}>first Prize : 1000/-</h3>
                            <h3 style={{ textTransform: "uppercase" }}>second Prize : 500/-</h3>
                        </div>
                    </Grid>
                </Grid>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show Details</h4></Accordion.Header>
                        <Accordion.Body>
                            <h1>Description</h1>
                            <p>CAD Championship is a Design Event of Mechanical Engineering which examine the command on domain of software and logical skills to convert the idea in the form of object.</p>
                            <h1>Guidelines</h1>
                            <ul>
                                <li>This is an individual event. Only 1 participant shall be allowed in a single registration.</li>
                                <li>Participant shall be provided with one A3 sheet.</li>
                                <li>Participant shall be brought their own sketching tools and gears.</li>
                                <li>Decision taken by judges will be final will not be change in any circumstances.</li>
                            </ul>
                            <h1>skteching Theme :-</h1>
                            <ul>
                                <li>Peace after war.</li>
                                <li>Patriotism.</li>
                                <li>Environment.</li>
                                <li>4.Regional diversity</li>
                            </ul>
                            <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </section>
            <section style={{ paddingTop: "150px" }} className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} sm={6}>
                        <img src={officeball} alt="red-light green light" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} lg={6} sm={6}>
                        <div>
                            <br />
                            <h2 style={{ textTransform: "uppercase" }}>Event Name :Office ball</h2><hr />
                            <h3 style={{ textTransform: "uppercase" }}>Entry Fees: 30/-</h3>
                            <h3 style={{ textTransform: "uppercase" }}>Prize Money:200/-</h3>
                            {/* <h3 style={{ textTransform: "uppercase" }}>second Prize : Rs500</h3> */}
                        </div>
                    </Grid>
                </Grid>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show Details</h4></Accordion.Header>
                        <Accordion.Body>
                            <h3>Description</h3>
                            <p>Office ball is a game, where participants are balancing the ball at a plane surface go to end line and put them into the bucket in a given time.</p>
                            <h3>Guidelines</h3>
                            <ul>
                                <li>In this event you have to participate individually.</li>
                                <li>Participant have to balance the ball on the plane surface don’t touch any body part otherwise you will be disqualified.</li>
                                <li>Participants have to put 10 balls in bucket in 90 sec. </li>
                                <li>If the ball is dropped in between the path you have to start again from initial point.</li>
                                <li>Students also participate in between the event.</li>
                            </ul>
                            <h3>skteching Theme :-</h3>
                            <ul>
                                <li>Peace after war.</li>
                                <li>Patriotism.</li>
                                <li>Environment.</li>
                                <li>4.Regional diversity</li>
                            </ul>
                            <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </section>
            <section style={{ paddingTop: "150px" }} className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6} sm={6}>
                        <img src={switchingpuzz} alt="red-light green light" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} lg={6} sm={6}>
                        <div>
                            <br />
                            <h2 style={{ textTransform: "uppercase" }}>Event Name :Switching puzzle</h2><hr />
                            <h3 style={{ textTransform: "uppercase" }}>Entry Fees: 30/-</h3>
                            <h3 style={{ textTransform: "uppercase" }}>Prize Money:200/-</h3>
                            {/* <h3 style={{ textTransform: "uppercase" }}>second Prize : Rs500</h3> */}
                        </div>
                    </Grid>
                </Grid>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show Details</h4></Accordion.Header>
                        <Accordion.Body>
                            <h3>Description</h3>
                            <p>There is great way to fun by participating in switching puzzle contest, get ready to exercise your mind by reinforcing problem solving skills.</p>
                            <h3>Guidelines</h3>
                            <ul>
                                <li>In this event you have to participate individually.</li>
                                <li>Participants have to solve the puzzle with in time limit (60sec.).</li>
                                <li>Participants have to guess the right combination of the puzzle to switch on the bulb.</li>
                                <li>Students also participate in between the event.</li>
                                <li>You have to participate again when you disqualify in 1 time.</li>
                            </ul>
                            <h3>skteching Theme :-</h3>
                            <ul>
                                <li>Peace after war.</li>
                                <li>Patriotism.</li>
                                <li>Environment.</li>
                                <li>4.Regional diversity</li>
                            </ul>
                            <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </section>
        </>
    );
}
export default Mechanical;