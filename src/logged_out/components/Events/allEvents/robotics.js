import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import Line from "./robotics/linefollower.webp";
import Pick from "./robotics/pickandplace.webp";
import Roborace from "./robotics/roborace.webp";

import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Robotics () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">R<span>ob</span>otics</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Line} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : LINE FOLLOWER</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : ----</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : ----</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h5>Description</h5> 
                        <p>DESIGN AN AUTONOMOUS ROBOT (BOT) WHICH WILL MOVE ONLY ALONG A PREDETERMINED TRACK. ROBOT</p> 
                        <p>TRACES THE TRACK AT THE STARTING POINT, FOLLOW THE PATH AND GO TO THE END POINT AT THE LEAST TIME</p> 
                        
                        <h5>DIMENSIONS AND FABRICATIONS-</h5> 
                        <li>THE DIMENSION OF THE BOT SHOULD NOT EXCEED 30*30*30 CM.</li> 
                        <li>THE BOT MAY BE WIRED OR WIRELESS OR AUTONOMOUS (POWER SUPPLY).</li> 
                        <li>THE POWER SOURCE SHOULD BE LESS THAN 12V AND 36W (DC POWER SUPPLY ONLY).</li> 
                        <li>MAXIMUM 5% TOLERANCE IS ALLOWABLE.</li> 
                        <li>WE WILL PROVIDE ON BOARD 230V, 50HZ AC POWER SUPPLY.</li> 
                        <li>BRING YOUR OWN AC TO DC CONVERTERS OR OWN BATTERIES ANY TYPE (LI-ION, LEAD ACID ETC).</li> 
                        <li>ROBOTS MUST BE INSULATED FOR PARTICULAR HURDLES.</li> 
                        <li>READYMADE TOYS CAR ARE NOT ALLOWED.</li> 
                        <li>THE WIRE (FOR WIRED BOTS) SHOULD REMAIN SLACK DURING THE COMPLETE RUN.</li> 
                        
                        <h5>EVENT DESCRIPTION</h5> 
                        <h6>ROUND 1- ELIMINATION ROUND</h6> 
                        <li>READYMADE LEGO KITS ARE NOT ALLOWED.</li> 
                        <li>THE ELIMINATION ROUND WILL CONSIST OF ONLY PLAIN TRACK.</li> 
                        <li>NO TWO LINES WILL BE LOCATED IN THE RECENT VICINITY OF EACH OTHER. THE TRACK WILL BE OF WHITE COLOR ON A BLACK BACKGROUND. HOWEVER, THE WHITE COLOR MAY NOT BE COMPLETELY UNIFORM AND THERE MIGHT BE SLIGHT VARIATION IN COLOR.</li> 
                        <li>THE ARENA IS MADE OF WOOD AND SUCH THAT THERE IS SUFFICIENT FRICTION FOR THE ROBOT.</li> 
                        <li>THE WIDTH OF THE LINE WILL BE CONSTANT (2.5CM) THROUGHOUT THE TRACK WITH A POSSIBLE ERROR OF 5%.</li> 
                        
                        <h6>ROUND 2- FINAL ROUND</h6> 
                        <li>THE FINAL ROUND WILL ALSO INCLUDE ELEVATIONS AND SMALL BRIDGES ON THE TRACK.</li> 
                        <li>THERE SHALL BE DISCONTINUITIES IN THE TRACK IN FINAL ROUND.</li> 
                        <li>ROBOTS SHOULD BE AUTONOMOUS.</li> 
                        <li>DATA LINKS TO OFF-BOARD COMPUTERS ARE ALLOWED.</li> 
                        <li>NO WETWARE (HUMAN)OPERATED REMOTE CONTROLS WILL BE PERMITTED.</li> 
                        
                        <h5>RE-REGISTRATION RULES-</h5> 
                        <li>RE-REGISTRATION IS ONLY ALLOWED IN ELIMINATION ROUND.</li> 
                        <li>RE-REGISTRATION CAN DO ONLY AFTER THE COMPLETION OF FIRST CHECK POINT OF ELIMINATION ROUND.</li> 
                        
                        <h4>GUIDLINES</h4> 

                        <li>Teams should register their robots for participating in the event.</li> 
                        <li>Changing of Robots will be strictly prohibited and if found to do so leads disqualification.</li> 
                        <li>The judgment decision will be considered as final decision.</li> 
                        <li>Each team will be given a time slot, delays are strictly not allowed</li> 
                        <li>The event consists of two rounds: - Elimination round and the Final round.</li> 
                        <li>The teams qualifying the elimination round will be allowed to participate in the next round.</li> 
                        <li>Nudging/Pushing or any type of manual handling of the robot will lead to cancellation of that run.</li> 
                        <li>Teams will be given 2 min. for calibration of the sensors before the trials.</li> 
                        <li>If the robot gets distracted from the track will get negative marking. And the distraction will be considered as a foul.</li> 
                        <li>The organizers will ensure that the track is located within a typical indoor environment in so far as is feasible. No request to adjust the lighting shall be entertained.</li> 
                        <li>Any robot that loses the line course must reacquire the line at the point where it was lost, or at any check point.</li> 
                        <li>When any robot crosses the start line before the reference signal, the passage will be interrupted and resumed from the beginning.</li> 
                        <li>The robot should not damage the arena at any point.</li> 
                        <li>Max. Time given will be 5 min. (per bot) in elimination round.</li> 
                        <li>No. trial will be given (testing is allowed)</li> 
                        <li>Surprise element will be there in final roundIf less than 20 teams would be participated, than only first prize would be distributed.</li> 
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                
                </Accordion>
        </section>
        <hr />
        
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Pick} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : PICK AND PLACE</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : ----</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : ----</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
                        <h5>Description</h5>
                        <p>PICK AND PLACE ROBOT IS THE ONE WHICH IS USED TO PICK UP AN OBJECT AND PLACE IT IN THE DESIRE LOCATION. IT CAN BE A ROBOT WITH MOVEMENT IN HORIZONTAL, VERTICAL AND ROTATIONAL AXES.</p>
                        <p>ROBOT SPECIFICATIONS :- </p>
                        <ol>
                            <li>THE DIMENSIONS OF THE BOT SHOULD NOT EXCEED 30CM*30CM*30CM.</li>
                            <li>THE WEIGHT OF THE BOT SHOULD NOT EXCEED MORE THAN 5 KG.</li>
                            <li>THE MAXIMUM VOLTAGE TO POWER THE BOT SHOULD NOT EXCEED 24V(DC POWER SUPPLY ONLY).</li>
                            <li>THE MAXIMUM POWER SHOULD NOT EXCEED 50W.</li>
                        </ol>
                        <h5>EVENT DESCRIPTION</h5>
                        <h6>ROUND 1</h6>  
                        <p>THE PARTICIPANT HAS TO BRING A MANUAL ROBOT THAT CAN PICK UP WEIGHTS FROM A LOCATION AND PLACE THEM IN A DIFFERENT LOCATION IN THE ARENA IN A SPECIFIED TIMEAND DROP IT.</p> 
                        <h6>ROUND 2</h6> 
                        <p>THE PARTICIPANT HAS TO USE HIS ROBOT TO TRANSPORT A SPECIFIC NUMBER OF BLOCKS THROUGH ANOTHER ROUTE THAT CONSIST OF OBSTACLES TO A SPECIFIC DESTINATION IN A SPECIFIED TIME PERIODAND DROP IT. THE OBSTACLES WILL BE DISCLOSED BEFORE THE EVENT.</p>
                        <h6>RE-REGISTRATION RULES:-</h6>
                        <ol>
                            <li>RE-REGISTRATION SHOULD BE DONE WITHIN 45 MINUTE TIME PERIOD OF GETTING DISQUALIFIED.</li>
                            <li>2.	RE-REGISTRATION CAN BE DONE ONLY IF THE TEAM IS DISQUALIFIED IN ROUND 1.</li>
                        </ol>
                    </div>
                    <h4>GUIDELINES</h4>
                    <ol>
                        <li>Teams should register their robots for participating in the event.</li>
                        <li>Changing of Robots will be strictly prohibited and if found to do so leads disqualification.</li>
                        <li>A team can consist of a maximum of 4 members.</li>
                        <li>College ID is mandatory to participate in the event and team of students should be formed from the same college</li>
                        <li>Both Wired and wireless bots are allowed. </li>
                        <li>The machines you build will be first checked for size and safety.</li>
                        <li>The machine must not contain any combustible, corrosive, or otherwise dangerous materials for safety reasons. </li>
                        <li>AC supply of 230V, 50Hz will be provided in the college.</li>
                        <li>No explosive compression or decompression, either internal or external is permitted</li>
                        <li>Judges have the right to disqualify any machine whose working mechanism or game strategy is considered destructive in any way.</li>
                        <li>In case any kind of dispute arises the judge‚ decision will be considered final and binding to all and no argument will be entertained.</li>
                        <li>Number of rounds will depend on number of participants and initial stages will be knockout stages.</li>
                        <li>Knockout stages will continue till there are 5 to 6 teams remaining.</li>
                        <li>In any manner the robot is not supposed to damage the arena, judges can take corresponding actions. </li>
                        <li>Teams should transport the objects in the given time so as to win the match.</li>
                        <li>The objects will be of cuboidal (max. dimensions 10*8*8 (L*B*H cubic centimetre)) and cylindrical shapes (15*3(height*diameter in cubic centimetres)).</li>
                        <li>Track for each level would be revealed 30 minutes before the event take place.</li>
                        <li>Teams are not allowed to test their bot on the track. </li>
                        <li>Registration fees is non-refundable.</li>
                        <li>Minimum 10 entries are must otherwise event will be cancelled and, in that case, registration fees will be refunded.</li>
                        <li>Rules may be subjected to change.</li>
                        <li>If less than 20 teams would be participated, than only first prize would be distributed.</li>
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
                    <img src={Roborace} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : ROBO RACE</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 30</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : ----</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : ----</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <div>
                        <ol>
                            <li>Teams should register their robots for participating in the event.</li>
                            <li>The robot should follow the robot specifications provided. Any deviation from the mentioned specifications will lead to disqualification.</li>
                            <li>Changing of Robots will be strictly prohibited and if found to do so leads disqualification </li>
                            <li>A team can consist of a maximum of 4 members.</li>
                            <li>The competition is based on time trail system. There will be a qualifying round for each team in which the team shall compete with each other to reach checkpoints.</li>
                            <li>Every check-point crossed will be of 10 points.</li>
                            <li>If the Robot crosses a checkpoint, and moves off track, then the Robot would be placed back on the previous checkpoint crossed. A maximum of three chances will be given to each team to place their bot in designated check point. </li>
                            <li>Once the race begins, three hand touches are allowed, if you are taking hand touch you have to start from last check point.</li>
                            <li>During the race, team would be given 3 skips.</li>
                            <li>Top 25 teams from the round two will be qualified for round three. If total teams in round two are less than 50 than only 20 teams will qualify for round three.</li>
                            <li>AC supply of 230V, 50Hz will be provided in the college. </li>
                            <li>If in case, a situation of technical problem related to bot occurs, then the team can take a Technical Break of 1 minute.</li>
                            <li>Only 1 timeout will be given to any participant and the participant will repair it without any outside help.</li>
                            <li>Registration fees is non-refundable</li>
                            <li>Minimum 10 entries are must otherwise event may be cancelled and, in that case, registration fees will be refunded.</li>
                            <li>Unethical behaviour could lead to disqualification. Faculty-coordinators have all the rights to take final decision for any matter during the event. The decision of the judges will be final and abiding. Argument with judges in any form will lead to the disqualification of the team. </li>
                            <li>Rules may subject to change</li>
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
export default Robotics;