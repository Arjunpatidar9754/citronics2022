import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import BoxCricket from "./sports/boxcricket.webp";
import ChessBoard from "./sports/chessboard.webp";


import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Sports () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">S<span>po</span>rts</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={BoxCricket} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Box Cricket</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 300/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Exciting cash price</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>Guidelines…….!</h3>
                        <ol>
                            <li>Seven Players in a Single Team.</li>
                            <li>One bowler throws 2 over and three bowlers throw 1-1 over.</li>
                            <li>Boys and girls both allow.</li>
                            <li>Except LBW rules all cricket rules are allowed.</li>
                            <li>Bowling action should be overarm (Standing Position).</li>
                            <li>Maintain the discipline in cricket field.</li>
                            <li>In case of any confusion please talk to the event organizers.</li>
                            <li>Umpire's decision during the game is Final and Last decision.</li>
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
                    <img src={ChessBoard} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Chess</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100</h3>
                        <h3 style={{textTransform: "uppercase"}}>Exciting cash price</h3>
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <h3>Guidelines…….!</h3>
                        <ol>
                            <li>Boys and girls both allow.</li>
                            <li>Do not interfere with the game.</li>
                            <li>Turn off your cell phone during the game.</li>
                            <li>In case of any confusion please talk to the event organizers.</li>
                            <li>Maintain the proper discipline</li>
                        </ol>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        
        </>
    );
}
export default Sports;