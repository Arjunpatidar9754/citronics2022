import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./events.css";
import { Grid } from "@material-ui/core";
import Entertainment from "../../images/entertainment/entertainment.webp";
import Enterpreneurship from "../../images/enterprenuership/enterpreneurship.webp";
import Software from "../../images/software/software.webp";
import Mechanical from "../../images/mechanical/mechanical.jpg";
import OnSpot from "../../images/onspot/onspot.webp";
import Robotics from "../../images/robotics/robotics.webp";
import Sports from "../../images/sports/sports.webp";
import Pharma from "../../images/pharma/pharma.webp";
import Adventurous from "../../images/sports/roadies.webp";
import Photography from "../../images/sports/photography.webp";
import Civil from "../../images/sports/civil.webp";
import Management from "../../images/sports/management.webp";





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
                        <div><b>Core:</b>Jay Kumar Patidar [ 9755975565 ]</div>
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
                        <div><b>Core:</b>Aman Kushwah [ 7974392752 ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Harshita Parmar [ 8871062393 ]</div>
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
                        <div><b>Core:</b>Nikhil Shinde [ 9179086764 ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Aman Bundela [ 8962202886 ]</div>
                        <Link to="/events/pharma" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Adventurous} alt="Adventurous events"/>
                    
                    <Card.Body>
                        <Card.Title className="card-title">Adventurous Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Rahul Prajapat [ 8085150011 ]</div>
                        <Link to="/events/adventurous" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Photography} alt="Photography events"/>
                    
                    <Card.Body>
                        <Card.Title className="card-title">Photography Events</Card.Title>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Pranav Singh [ 9993823010 ]</div>
                        <Link to="/events/photography" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
            
            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Civil} alt="Civil events"/>
                    <Card.Body>
                        <Card.Title className="card-title">Civil Events</Card.Title>
                        <div><b>Core:</b>Ritik Sharma [ 6266190929 ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Ritik Prajapat [ 9977930622 ]</div>
                        <Link to="/events/civil" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>

            <Grid item sm={6} lg={4} xs={12} >
                <Card>
                    <Card.Img variant="top" src={Management} alt="Management events"/>
                    <Card.Body>
                        <Card.Title className="card-title">Management Events</Card.Title>
                        <div><b>Core:</b>Arpit Sharma [ 9109257252 ]</div>
                        <div><b>Core:</b>Harshit malakaar [ 9340440348 ]</div>
                        <div style={{marginBottom: "10px"}}><b>Core:</b>Nirmal Patidar [ 7224868243 ]</div>
                        <Link to="/events/management" className="card-link">Know More</Link>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid>
        
        </>
    );
}

export default EventCards;