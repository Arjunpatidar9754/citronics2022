// import { Button, Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import imageTop from "../../../images/imageTop.webp";
import letsdance from "./entertainment/dance.webp";
import openmic from "./entertainment/openmic.webp";
import Bandwar from "./entertainment/bandwar.webp";
import "../events.css";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./allevents.css";

function Entertainment() {
    return (
        <>
                <img src={imageTop} alt="" className="event-img" />
                <div className="container" >
                    <div className="event-h-div">
                        <h1 className="event-h" align="center">E<span>nt</span>ertainment</h1>
                    </div>
                </div>
                <section style={{ paddingTop: "150px" }} className="container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6} sm={6}>
                            <img src={letsdance} alt="red-light green light" style={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12} lg={6} sm={6}>
                            <div>
                                <br />
                                <h2 style={{ textTransform: "uppercase" }}>Event Name : Let's dance </h2><hr />
                                <h3 style={{ textTransform: "uppercase" }}>Entry Fees: Rs 300(For Solo) Rs 500(For Duo)</h3>
                                <h3 style={{ textTransform: "uppercase" }}>Solo Price : 1500/-</h3>
                                <h3 style={{ textTransform: "uppercase" }}>Duo price : 2500/- </h3>
                            </div>
                        </Grid>
                    </Grid>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show Details</h4></Accordion.Header>
                            <Accordion.Body>
                                <br />
                                <h3>GUIDELINES:</h3>
                                <ul>
                                    <li> All entries should have Solo and Duo participation.</li>
                                    <li> All participants of the entries should be atleast 13 years old and above</li>
                                    <li> All the participants have to Register on website with registration fees.</li>
                                    <li> The official entries shall be provided by the organizers with a schedule of activities</li>
                                    <li> Those who are absent/late for their designated blocking time will not be allowed to block on stage at a later time. </li>
                                    <li> 6. A panel of judges shall determine the winners based on the foregoing criteria. Any violation of the foregoing rules
                                        may cause 3 points deduction per violation on the final score. The decision of the panel shall be final and
                                        irrevocable.</li>
                                    <li> You have report at 11:30 AM.</li>
                                </ul>
                                <br />
                                <h3>Performance and stage rules </h3>
                                <ul>
                                    <li>The duration of the dance should be a minimum of 3 minutes, and a maximum of 5 minutes.</li>
                                    <li>. Any kind of hip hop dance is allowed (locking, popping, crump, house, stepping, breakdance, walking, tutting,
                                        vogueing, party dances, hip hop choreography) or any kind of dance with hip hop as their focal thought of
                                        choreography, provided that the choreographers of the group have the proper knowledge or background to execute
                                        it properly.</li>
                                    <li>No vulgarity, obscenity, and explicit contents are allowed.</li>
                                </ul>
                                <h3>Costumes and props :</h3>
                                <ul>
                                    <li>Costumes must be decent.</li>
                                    <li>Attire may include accessories such as hates, scarves, caps, gloves, jewelleries, etc. removing pieces of clothing
                                        during the performances is permitted provided it is not offensive or out of character</li>
                                    <li>Body/face oils or paints/other substances applied to the body or clothing that may affect the clean dry surface of
                                        the stage and the safeties of follow competitors are prohibited.</li>
                                </ul>
                                <h3>Music requirements :</h3>
                                <ul>
                                    <li>The music used in the routine must be a minimum of 3 minutes and a maximum of 5 minutes</li>
                                    <li>. The competition music must not contain inappropriate, lewd, or offensive languag</li>
                                </ul>
                                <h3> Medical attention:</h3>
                                <ul>
                                    <li>. If at any time, prior to or during competition, a group member becomes ill or injured or his/her physical or
                                        emotional condition is at risk by participating he/she may be declared ineligible to compete and may be disqualified
                                        from the competition. The management reserves the right to withdraw any competitor who appears to have such
                                        serious disability or injury or needs medical attention.</li>
                                </ul>
                                <h3> CRITERIA FOR JUDGING :</h3>
                                <ul>
                                    <li>Choreography (creativity, variety of Dance Styles and Difficulty) ------ 40%</li>
                                    <li>Performance
                                        (musicality, Group Execution, Synchronization and Spacing) ------40%</li>
                                    <li>Overall Effect
                                        (Showmanship, Intensity, Projection and Attire) ------20%</li>
                                </ul>
                                <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show less</h4></Accordion.Header>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </section>
                <hr />
                <section style={{ paddingTop: "50px" }} className="container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6} sm={6}>
                            <img src={openmic} alt="red-light green light" style={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12} lg={6} sm={6}>
                            <div>
                                <br />
                                <h2 style={{ textTransform: "uppercase" }}>Event Name :OPEN MIC</h2><hr />
                                <h3 style={{ textTransform: "uppercase" }}>Entry Fees: 200</h3>
                                <h3 style={{ textTransform: "uppercase" }}>first Prize : 2000rs</h3>
                                <h3 style={{ textTransform: "uppercase" }}>second Prize : 1000rs</h3>
                                
                            </div>
                        </Grid>
                    </Grid>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Your content should be free from any kind of sexual and religious vulgarity</li>
                                    <li>Performance will begin at _________ P.M.</li>
                                    <li>Each performer will get _________ minutes. So, prepare accordingly</li>
                                    <li>We will provide you with – Sound board, Speakers, Mics, and Cable.</li>
                                    <li>When you are next, be ready.</li>
                                    <li>Perform material you are comfortable with.</li>
                                    <li>Please be quiet and show respect for all other performers. Applaud for everyone.</li>
                                    <li>Be respectful to the venue and equipment.</li>
                                    <li>Please stay after your performance till the results get declared.</li>
                                    <li>Thanks for being a part of the Event</li>
                                </ul>
                                <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>
                <hr />
                <section style={{ paddingTop: "50px" }} className="container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={6} sm={6}>
                            <img src={Bandwar} alt="red-light green light" style={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12} lg={6} sm={6}>
                            <div>
                                <br />
                                <h2 style={{ textTransform: "uppercase" }}>Event Name : Band War</h2><hr />
                                <h3 style={{ textTransform: "uppercase" }}>Entry Fees: 1000/Team</h3>
                                <h3 style={{ textTransform: "uppercase" }}>Winner Team : Rs 10000</h3>
                                
                            </div>
                        </Grid>
                    </Grid>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li>Time duration for performance is 10 minutes.</li>
                                    <li>. Participants have to register themself after entering in the college & they have to take their batch number.</li>
                                    <li>. Participants have to maintain the decorum.</li>
                                    <li> Each band will have to mention number of members and instruments which they will bring</li>
                                    <li> College will only provide drum set.</li>
                                    <li>. You have to report at __PM</li>
                                    <li>. Band will have to mention the name of their band and the person leading it</li>
                                    <li>. Participants have to bring their own aux cables.</li>
                                    <li> Participants have to report half an hour before the program start.</li>
                                    <li>  No other team will interrupt in our event at the last moment.</li>
                                </ul>
                                <Accordion.Header><h4 style={{ textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br />
                    <hr /><br />
                    {/* <div align="center">
                        <Button href="../events" align="center">
                            <div className="other-event-btn" style={{backgroundColor: "red", textAlign: "center",padding: "15px 50px 10px 50px"}}>
                            <h4 style={{color: "white"}}>Other Events</h4>
                        </div>
                        </Button>
                    </div> */}
                    
                </section>
                <hr />
                
        </>
    );
}
export default Entertainment;