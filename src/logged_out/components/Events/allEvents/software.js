import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import beatthebug from "./software/beatthebug.webp";
import bestgoogler from "./software/bestgoogler.webp";
import codedecode from "./software/codedecode.webp";
import innomanthan from "./software/innomanthan.webp";
import quiz from "./software/quiz.webp";
import simongame from "./software/simongame.webp";

import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Software () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">s<span>of</span>tware</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={beatthebug} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : beat the bug</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 2000</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000</h3>
                        <h3 style={{textTransform: "uppercase"}}>Third Prize: Rs500/-</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <h3>BEAT THE BUG</h3>
                        <p>This event is all about bug fixing, participants will be challenged with some questions related to the 'C & C++' programming language which they have to solve in the given time and the top scorers will be taken to the next round for fixing a program and make it run the best performers will be awarded in the end of all the competition.</p>
                        <h3>"MAKE IT RUN....MAKE IT RIGHT....MAKE IT FAST.... </h3>
                        
                        <ol>
                            <h3>Guidelines</h3>
                            <li>This is an individual event.</li>
                            <li>There will be two rounds.</li>
                            <li>Participants have to find bugs in the given code with minimum time to get promoted to next round.</li>
                            <li>There will be no IDE provided, participants can only use notepad.</li>
                            <li>Modification in the code is not allowed i.e., actual code should not be changed, if any participant is found doing so then they will be disqualified.</li>
                            <li>Performance will be evaluated on the basis of time taken to find all the bugs.</li>
                            <li>If there any type of nuisance or misbehave with coordinators/ volunteers, the participant will be eliminated from event immediately.</li>
                            <li>Best performer will be decided according to the performer whose points are higher than other competitor’s. </li>
                            <li>Judge’s decision will be final. </li>
                        </ol>
                        <ol>
                            <h4>Updated on date: 25/03/2022</h4>
                            <li> Minimum 10 entries are must otherwise event will be cancelled.</li>
                            <li>The Amount paid is non-refundable.</li>
                            <li> If the event is cancelled then that amount can be used to register in another event.</li>
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
                    <img src={bestgoogler} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : BEST GOOGLER</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 2000</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000</h3>
                        <h3 style={{textTransform: "uppercase"}}>Third Prize : 500</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>BEST GOOGLER</h3>
                        <p>This event is all about the general question, video link and photos have to find out by the participants in same manner as it asked with the help of Google. Participants have to find the answers of question by googling.</p>

                        <h3>“CHOOSE…. JOY, CHOOSE…. HAPPY, CHOOSE….TO…. SHINE….” </h3>
                        <ol>
                            <li>This event is an Individual participation. </li>
                            <li>Participants are not allowed to use their mobile phones or any other electronic device during the event.</li>
                            <li>There are 2 rounds.1st round will be a short-listing round and 2nd round will be the final</li>
                            <li>Participants will be given 15 tasks and a PC with internet connection in 1st round and 2nd round will have separate 10 tasks.</li>
                            <li> The exact text/image/sound/video should be retrieved by searching on Google only.</li>
                            <li>Time limit will be 30 minutes for 1st round and 20 minutes for 2nd round. </li>
                            <li>The one who completes maximum number of tasks in minimum time will be the winner. </li>
                            <li> The decision of judges shall be final. </li>
                            <li>E-Certificate will be provided to each participant.</li>
                        </ol>
                        <ol>
                            <h3>Updated on date: 26/03/2022 </h3>
                            <li>Minimum 15 entries are must otherwise event will be cancelled.</li>
                            <li>The Amount paid is non-refundable.</li>
                            <li>If the event is cancelled then that amount can be used to register in another event</li>
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
                    <img src={codedecode} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : CODE DECODE</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 200</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 1500</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>CODE DECODE</h3>
                        <p>In this event, teams will be given a code and input which they will use to dry run and it will give the output, which will be a hint to the next clue. There will be total 3 clues. After first round only 5 teams will be able to qualify to the second round and only 3 teams will be able to qualify for third round. </p>
                        <h3>“CREATIVITY….IS…. INTELLIGENCE…. HAVING…. FUN” </h3>
                        <ol>
                            <h3>Guidelines </h3>
                            <li>This event is a team event.</li>
                            <li>articipants are not allowed to use their mobile phones or any other electronic device during the event.</li>
                            <li>Each team should have 4 members.</li>
                            <li>The team members cannot split and they need to be altogether. Splitting from team mates will lead to disqualification of team.</li>
                            <li>Time limit will be 90 mins. </li>
                            <li>Team members are not allowed to communicate to other team members, otherwise it will lead to disqualification of that team.</li>
                            <li> The decision of judges shall be final.</li>
                        </ol>
                        <ol>
                            <h3>Updated on date: 26/03/2022</h3>
                            <li>Minimum 10 entries are must otherwise event will be cancelled. </li>
                            <li>The Amount paid is non-refundable.</li>
                            <li>If the event is cancelled then that amount can be used to register in another event</li>
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
                    <img src={innomanthan} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : INNO MANTHAN</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 320</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 3000</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1500</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>INNO MANTHAN</h3>
                        <p>
                        Inno Manthon is a medium that gives techies around the world to learn from
                        others. In short, it's an organized program where people connect and learn
                        with different talented individuals around the world. The sole reason
                        behind organizing “Inno Manthon” is to provide solution for pressing
                        issues in society.
                        </p>
                        <p>
                        It’s only stood a chance of winning when your idea solves problem. An idea
                        will be only called as Inno Manthon idea when it provides a solution for
                        the issue in society with the help of technology or coding.
                        </p>
                        <h3>“READY…. AIM…. FIRE”</h3>
                        <ol>
                        <h3>Guidelines</h3>
                        <li>Participating team should contain maximum 4 participants.</li>
                        <li>
                            On the basis below points the winners will be going to be declared: -
                        </li>
                        <ol>
                            <li>
                            Topic of presentation (include new idea, possible outcome and
                            implemented development)
                            </li>
                            <li>Presentation skills</li>
                            <li>Judges review </li>
                        </ol>
                        <li>Some important things ‐</li>
                        <ol>
                            <li>Professional appearance and poise throughout the presentation.</li>
                            <li>Convey of idea and message should be clear </li>
                            <li>Knowledge of your research topic</li>
                            <li>Ability to answer the questions that are directly or indirectly related to your topic.</li>
                        </ol>
                        <li>Participants are free to bring their own laser pointers, hand pointers, anything regarding to make their presentation effective. </li>
                        <li>Participants are requested to carry their own CD or Pen drive (in which presentation is their) without any issue (Virus, any other). Floppy disk should not be used. </li>
                        <li>After the event the E- certificate will be provided.</li>
                        <li>Any doubt or issues regarding above points or related to INNO-MANTHAN please contact to committee members.</li>
                        <li>In case of any disputes, judge’s decision will be final.</li>
                        </ol>
                        <ol>
                            <h3>Updated on date: 25/03/2022 </h3>
                            <li>Minimum 10 entries are must otherwise event will be cancelled</li>
                            <li>The Amount paid is non-refundable.</li>
                            <li>If the event is cancelled then that amount can be used to register in another event.</li>
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
                    <img src={quiz} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : QUIZOPHILE</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 200</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 1500</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>QUIZOPHILE</h3>
                        <p>
                        This is a team event; each team consists of four members. All the teams
                        will be provided their separate table on which there will be a bell.
                        Questions will be put up on projector screen after seeing which the team
                        which has to be answer.
                        </p>
                        <h3>"WINNER…. NEVER…. QUIT”</h3>
                        <ol>
                        <h3>Guidelines</h3>
                        <li>Each team should have four members.</li>
                        <li>There are total 2 rounds:</li>
                        <ol>
                            <li>Round 1: Quiz</li>
                            <ol>
                                <li>where they have to press buzzer/bell after seeing the question to answer.</li>
                                <li>for correct answer +5 points will be awarded. </li>
                                <li>for wrong answer -5 points will be deducted.</li>
                                <li>If the team is not able to answer, they can pass the question to other          teams.</li>
                                <li> If the teams pass the question to other teams, then -1 will be deducted from score</li>
                                <li>Once a question is passed the team cannot give an answer later. </li>
                                <li> Only 5 teams will be qualified to the next round.</li>
                            </ol>
                            <li>Round 2: Rapid Quiz </li>
                            <ol>
                                <li>Each team get chance of 1 to 2 minutes to answer any number of questions.</li>
                                <li>for correct answer +5 points will be awarded. </li>
                                <li>for wrong answer -5 points will be deducted.</li>
                                <li>If the team pass the question, then question will be changed. </li>
                            </ol>
                        </ol>
                        <li>icipants are not allowed to use their mobile phones or any other electronic device during the event. </li>
                        <li>Judge’s decision will be final.</li>
                        <li>If there any type of nuisance or misbehave with coordinators/ volunteers, the team will be eliminated from event immediately.</li>
                        <li> Best performer/team will be decided according to the team whose points are higher than other teams.</li>
                        </ol>
                        <ol>
                            <h4>Updated on date: 25/03/2022 </h4>
                            <li>Minimum 10 entries are must otherwise event will be cancelled.</li>
                            <li>The Amount paid is non-refundable.</li>
                            <li> If the event is cancelled then that amount can be used to register in another event. </li>
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
                    <img src={simongame} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : SIMON GAME</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100</h3>
                        <h3 style={{textTransform: "uppercase"}}>first Prize : 2000</h3>
                        <h3 style={{textTransform: "uppercase"}}>second Prize : 1000</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>SIMON GAME</h3>
                        <p>This event is all about to check memory skills of participants. Participants can start by pressing ‘A’ from keyboard and it will show them a tile that they have to click on, as they go from level to level, the patterns get more and more complicated and if the player forgets the pattern, then the game is over and maximum level reached by the player is captured. </p>
                        <h3>“BE…. THE…. EXCEPTION”</h3>
                        <ol>
                            <h3>Guidelines </h3>
                            <li>This event is an Individual participation. </li>
                            <li> Once the participants start the game, participant cannot restart the game. </li>
                            <li>Participants are not allowed to bring mobile phone or any type of electronic devices.</li>
                            <li>The decision of judges shall be final. </li>
                            <li>Any type of nuisance or misbehave with judge, coordinator or volunteer, the participant immediately will be disqualified. </li>
                            <li>Maximum time limit of the game will be 15 minutes. </li>
                        </ol>
                        <ol>
                            <h3>Updated on date: 26/03/2022</h3>
                            <li>Minimum 15 entries are must otherwise event will be cancelled</li>
                            <li>The Amount paid is non-refundable.</li>
                            <li>If the event is cancelled then that amount can be used to register in another event.</li>
                        </ol>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        
        </>
    );
}
export default Software;