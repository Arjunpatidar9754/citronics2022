import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../images/imageTop.webp";
import "./aboutUs.css";
import Logo from "../../images/logo.png";
import Logo2 from "../../images/AGRWAL.png";
import Logo3 from "../../images/collegeLogo1.png";

function AboutUs() {
    return(
        <>
        <img src={imageTop} alt="" className="main-img"/>
        <div className="main-h-div">
            <h1 className="main-h" align="center"><span>A</span>bout <span>u</span>s</h1>
        </div>
        <div className="container" style={{marginTop: "10%"}}>
            <Grid container spacing={2}>
               
                <Grid item xs={12} md={6} lg={6}>
                    <b style={{fontSize: "2em"}}> CITRONICS </b><br />
                <p style={{textAlign: "justify"}}>The annual national level techno management fest of CDGI is organized every year with a sole intention of providing
                 an impetus to the talented minds of engineering and management students with an opportunity to showcase their professional brilliance.
                  Citronics provide the right platform for students to showcase their prowess and compete not only at the state level but also with students
                   at national level. Number of high profile events like Robotics, Civil Engineering, Mechatronics, Software, and Management are organized
                    in Citronics</p>
                </Grid>
                <Grid item xs={12} md={6} lg={6} align="center">
                    <img src={Logo} alt="" style={{width: "80%", padding: "10px 20px 10px 20px"}}/>
                </Grid>
            </Grid>
        </div>
        <div className="container" style={{marginTop: "10%"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} align="center">
                    <img src={Logo2} alt="" style={{width: "50%", padding: "10px 20px 10px 20px"}}/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <b style={{fontSize: "2em"}}> OUR HISTORY </b><br />
                    <p style={{textAlign: "justify"}}>The first edition of citronics was launched in the year 2009, the previous editions of this mega event in which more than 100 technomanagement colleges participated, was sponsored by MPCST Bhopal,UCO Bank, Rotomac and Bank of India. Under the banner of citronics, we have organized various state and national level robot design competitions during the previous years.</p>
                </Grid>
            </Grid>
        </div>
        <div className="container" style={{marginTop: "10%"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <b style={{fontSize: "2em", textTransform: "uppercase"}}> Chameli Devi Group of Institutions </b><br />
                    <p style={{textAlign: "justify"}}>Baptized in an endearing spirit, Chameli Devi Group of Institutions took its first step in July 2006 with a vision to design future scientifically. Within a short span of time the Institute has attained a strong footing amongst all the technical colleges of Madhya Pradesh. It is affiliated to RGPV, Bhopal and approved by AICTE, New Delhi.</p>
                </Grid>
                <Grid item xs={12} md={6} lg={6} align="center">
                    <img src={Logo3} alt="" style={{width: "50%", padding: "10px 20px 10px 20px"}}/>
                </Grid>
            </Grid>
        </div>
        
        </>
    );
}
export default AboutUs;