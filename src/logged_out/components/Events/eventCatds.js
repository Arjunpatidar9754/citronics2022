import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./events.css";
import { Grid } from "@material-ui/core";
import Entertainment from "../../images/entertainment/entertainment.jpg";
import Enterpreneurship from "../../images/enterprenuership/enterpreneurship.jpg";
import Software from "../../images/software/software.jpg";
import Mechanical from "../../images/mechanical/mechanical.jpg";
import OnSpot from "../../images/onspot/onspot.jpg";
import Robotics from "../../images/robotics/robotics.jpg";
import Sports from "../../images/sports/sports.jpg";
import Pharma from "../../images/sports/sports.jpg";
import Adventurous from "../../images/sports/sports.jpg";
import Photography from "../../images/sports/sports.jpg";
import Civil from "../../images/sports/sports.jpg";
import Management from "../../images/sports/sports.jpg";





function EventCards() {
    return(
        <>
        
        <Grid container spacing={2}>
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Entertainment} alt="Entertainment events"/>
                    <Card.Body>
                        <Card.Title className="card-title">Entertainment Events</Card.Title>
                        <div><b>Core:</b>Arjun Patidar [ 9926285954 ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Pragya Bopche [ 9098605105 ]</div>
                        <Link to="/events/entertainment" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>    
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Enterpreneurship} alt="Enterpreneurship events"/>
                    <Card.Body>
                        <Card.Title className="card-title">Enterpreneurship Events</Card.Title>
                        <div><b>Core:</b>Jay Patidar [ 9755975565 ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Mansi Parmar [ 7477085667 ]</div>
                        <Link to="/events/enterprenuership" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>  
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Software} alt="Software events"/>
                    <Card.Body>
                        <Card.Title className="card-title">Software Events</Card.Title>
                        <div><b>Core:</b>Aman kushwah [ 7974392752 ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Harshita parmar [ 8871062393 ]</div>
                        <Link to="/events/software" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>  
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Mechanical} alt="Mechanical events"/>
                    <Card.Body>
                        <Card.Title className="card-title">mechanical Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Ritik jaiswal [ 8120027119 ]</div>
                        <Link to="/events/mechanical" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>  
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={OnSpot} alt="OnSpot events"/>
                    
                    <Card.Body>
                        <Card.Title className="card-title">On-Spot Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Kunal Gourav [ 8120951155 ]</div>
                        <Link to="/events/onSpot" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>  
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Robotics} alt="Robotics events"/>
                    <Card.Body>
                        <Card.Title className="card-title">Robotics Events</Card.Title>
                        <div><b>Core:</b>Ajay Bangar [ 7869476374 ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Kailash choudhary [ 9575542300 ]</div>
                        <Link to="/events/robotics" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Sports} alt="Sports events"/>
                    
                    <Card.Body>
                        <Card.Title className="card-title">Sports Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Anshika Mishra [ 8450060915 ]</div>
                        <Link to="/events/sports" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>   
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Pharma} alt="Pharma events"/>
                    
                    <Card.Body>
                        <Card.Title className="card-title">Pharma Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Anshika Tiwari [ ----------- ]</div>
                        <Link to="/events/pharma" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Adventurous} alt="Adventurous events"/>
                    
                    <Card.Body>
                        <Card.Title className="card-title">Adventurous Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Rahul Prajapat [ --------- ]</div>
                        <Link to="/events/adventurous" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Photography} alt="Photography events"/>
                    
                    <Card.Body>
                        <Card.Title className="card-title">Photography Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Pranav Singh [ --------- ]</div>
                        <Link to="/events/entertainment" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
            
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Civil} alt="Civil events"/>
                    <Card.Body>
                        <Card.Title className="card-title">Civil Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Ritik Prajapat [ ------- ]</div>
                        <Link to="/events/civil" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Management} alt="Management events"/>
                    <Card.Body>
                        <Card.Title className="card-title">Management Events</Card.Title>
                        <div><b>Core:</b>Arpit Sharma [ ------ ]</div>
                        <div><b>Core:</b>Harsh Sen [ ------ ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Nirmal Patidar [ ------ ]</div>
                        <Link to="/events/management" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid>
            
        
        
        </>
    );
}

export default EventCards;