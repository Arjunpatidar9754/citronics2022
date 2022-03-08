import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import Red from "./enterprenuership/red2.webp";
import Pushpa from "./enterprenuership/pushpa.webp";
import Money from "./enterprenuership/money.webp";
import Dare2develop from "./enterprenuership/dare2develop.webp";
import Youth from "./enterprenuership/youth.webp";

import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Enterprenuership () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">E<span>nt</span>erpreneurship</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Red} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Red light green light</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : Exciting Price</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : Exciting Price</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <div>
                        <br />
                        <h3>Event Name : Red Light Green Light </h3>
                        <hr />

                        <p> Red Light Green Light is a fun game in which there are 2
                            rounds.
                            In Round 1, participant has to rapidly say the company name
                            starting from the last letter of their previous participants'
                            company.
                            In Round 2, qualified participants will give a letter and the one
                            who give the name first move ahead in the pathway and who
                            will reach the end point of the track first win the Game skills.</p>
                    </div>

                    <div>
                        <h2>Guidelines</h2>
                        
                        <ol>
                            <li> In this event, only individual can participate</li>
                            <li>Company name should not be repeated in the respective round.</li>
                            <li>In each round, time limit will be exceeded accordingly. </li>
                            <li>Name of the company should be valid. </li>
                            <li> If any participant found in misbehavior or in any act of
                                cheating/violating rules, he/she will be disqualified. </li>
                            <li> Minimum 10 entries is must.</li>
                            <li> The Amount paid is non-refundable.</li>
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
                    <img src={Dare2develop} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Dare 2 Develop</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : Exciting Price</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : Exciting Price</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>Event Name : Dare To Develop (D2D)</h3>
                        <hr />

                        <p>Dare to call yourself an efficient entrepreneur? Prove your
                            efficiency and time management skills in "Dare to Develop", where
                            a team has to manufacture products as shapes using various tools
                            provided..</p>
                        <div>
                        <h2>Guidelines</h2>
                        
                        <ol>
                            <li> Event will be of 3 rounds consisting of the same tasks.</li>
                            <li> The team should consist of minimum 2 members and
                                maximum 4 members. Individual participation is not allowed.</li>
                            <li> There will be no elimination round.</li>
                            <li> All the products to be manufactured (shapes to be made), their
                                pricing and dimensions will be disclosed at the beginning of the
                                event only.</li>
                            <li> Participants are not allowed to use personal belongings to
                                create the products specified.</li>
                            <li> The product (Shapes) manufactured should be of the specified
                                dimensions or else it won't be considered for pricing. Minor
                                changes in the dimensions are acceptable.</li>
                            <li> Team can buy the equipment in the selling window which will
                                be open in between each round.</li>
                            <li> In case of misbehavior or violation of rules, the team will be
                                immediately disqualified.</li>
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
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Money Heist</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : Exciting Price</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : Exciting Price</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>Event Name : Money Heist </h3>
                        <hr />

                        <p> Are you up for an exciting adventure which will show your critical
                            thinking, leadership quality and team work and is fun too? Then
                            Money Heist is the perfect event for you to register where you will
                            be having chances of gaining some interesting powers and use it as
                            an advantage to sell your products. Also keep an eye on your budget
                            because who knows when the table turns </p>
                            <div>
                                <h2>Guidelines</h2>
                                
                                <ol>
                                    <li>The event will comprise of three rounds. </li>
                                    <li>The Minimum Team members should be 2 and Maximum Team
                                        members will be 4</li>
                                    <li>. Participants have to sell the given item to judges as well as the
                                        audience</li>
                                    <li>  First round will be a power snatcher round where the team has to
                                        collect powers (resources).  </li>
                                    <li> Each team will be given 500 points. </li>
                                    <li> Resources window will open after the power snatcher round in
                                        which the team has to buy resources for establishing their startup. </li>
                                    <li>Team have to build their stall for the selling the product with the
                                        help of allotted points and resources brought. </li>
                                    <li>Each item will have different points. </li>
                                    <li>Team will get maximum 2 chances to convince the audience to sell
                                        their product.</li>
                                    <li>Audience can also engage in between the event.</li>
                                    <li>If any participant found misbehaving or in any act of cheating/
                                        violating rules, he/she will immediately be disqualified.
                                        </li>
                                    <li> The Amount paid is non-refundable</li>
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
                    <img src={Pushpa} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : PUSHPA <span style={{textTransform: "capitalize"}}>The Entrepreneur</span></h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Prize : PUSPHPA Trophy &#38; Exciting Prize</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <h3>Event Name : PUSHPA The Entrepreneur </h3>
                    <hr />

                    <p> Pushpa The Entrepreneur is a competition where an individual
                        have to prove themselves as an Entrepreneur by showing their
                        selling skills. Each individual have to sell the given item. </p>
                    <div>
                        <h2>Guidelines</h2>
                        
                        <ol>
                            <li>In this event, only individual can participate</li>
                            <li>Participant has to sell the given item to judges as well as
                                audience</li>
                            <li>Time duration of a Sell Pitch is 3 minutes</li>
                            <li>If any participant found in misbehavior or in any act of
                                cheating/ violating rules, he/she will immediately be
                                disqualified.</li>
                            <li>Audience can also participate in between the event.</li>
                            <li>Minimum 10 entries is must</li>
                            <li>The Amount paid is non-refundable</li>
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
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Youth Got Talent</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : Exciting Price</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : Exciting Price</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <h3>Event Name : Youth Got Talent</h3><hr />
                    
                    <p>Youth Got Talent is pitching competition [like Shark Tank] in
                        which entrepreneurs will pitch their innovative ideas in front of
                        Judges and audience. They can also raise Investment from judges.</p>
                        <div>
                            <h3>Guidelines</h3>
                    
                            <ol type="1">
                                <li>This is an individual event; maximum 2 members can pitch their idea. </li>
                                <li>Each pitch duration is of 5 minutes and 5 minutes for cross questioning by judges.</li>
                                <li> should have their PPT with themselvese</li>
                                <li>Ideas must be different from each othere</li>
                                <li> Judges can ask any questions about your startup/ideae</li>
                                <li> Participants can make counter offer to judges if they are interested in the idea presented.</li>
                                <li> Registration fees will not be refundable in any case.</li>
                                <li> If any participant seen violating rules/regulations, misbehaving, any doing malpractices will be disqualified.</li>

                            </ol>
                    </div>
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
        
        </>
    );
}
export default Enterprenuership;