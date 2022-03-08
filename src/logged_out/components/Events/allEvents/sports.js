import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import Red from "./enterprenuership/red2.webp";
import Pushpa from "./enterprenuership/pushpa.webp";
import Money from "./enterprenuership/money.webp";
import Enter from "./enterprenuership/enter.webp";
import Dare2develop from "./enterprenuership/dare2develop.webp";
import Youth from "./enterprenuership/youth.webp";

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
                    Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <br />
                    <br />

                    adipiscing elit, sed do eiusmod
                    
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
                    Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <br />
                    <br />

                    adipiscing elit, sed do eiusmod
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Enter} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Red light green light</h2><hr />
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
                    Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <br />
                    <br />

                    adipiscing elit, sed do eiusmod
                    
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
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Red light green light</h2><hr />
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
                    Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <br />
                    <br />

                    adipiscing elit, sed do eiusmod
                    
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
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Red light green light</h2><hr />
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
                    Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <br />
                    <br />

                    adipiscing elit, sed do eiusmod
                    
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
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Red light green light</h2><hr />
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
                    Lorem ipsum dolor sit amet, consectetur
                    <br />
                    <br />
                    <br />

                    adipiscing elit, sed do eiusmod
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        
        </>
    );
}
export default Sports;