import { Grid } from "@material-ui/core";
import React from "react";
import StuntL from "./stuntmania/stuntmania-l.jpg";
import Stunt from "./stuntmania/stuntmania.jpg";

function StuntMania () {
    return(
        <>
        <section style={{padding: "20px 15px 0px 15px"}}>
            <Grid container spacing={2}>
                <Grid item xs={4} sm={4} lg={4} >
                    <img src={Stunt} alt="" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={8} sm={8} lg={8} >
                    <img src={StuntL} alt="" style={{width: "100%"}} />
                    <br />
                    <p style={{padding: "10px 10px 0px 10px", textAlign: "justify"}}>The adventure continues with Stunt Mania! Hop onto your bike and get ready to hit the gas because you're about to perform extreme stunts!</p>
                </Grid>
            </Grid>
        </section>
        
        </>
    );
}

export default StuntMania;