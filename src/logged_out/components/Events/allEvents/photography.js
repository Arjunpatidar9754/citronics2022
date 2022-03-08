import { Grid } from "@material-ui/core";
import React from "react";
import imageTop  from "../../../images/imageTop.webp";
import Camera from "./photography/camera.webp";
import Mobile from "./photography/mobile.webp";
import Reel from "./photography/reel.webp";

import "../events.css";
import "./allevents.css";
import { Accordion } from 'react-bootstrap';

// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

function Photography () {
    return(
        <>
        <img src={imageTop} alt="" className="event-img"/>
        <div className="container" >
            <div className="event-h-div">
                <h1 className="event-h" align="center">Ph<span>ot</span>ography</h1>
            </div>
        </div>
        <section style={{paddingTop: "150px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Mobile} alt="Camera-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Mobile photography</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 50/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Prize Money : 300/-</h3>                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                    <p>Note : Please read these rules (the Rules) before submitting your photo(s) to Better Photography’s contest. These are General Rules governing all contests hosted by Better Photography, unless so specified in the Specific Rules that may be applicable to individual contests. By participating in the contests, you understand, acknowledge and unconditionally agree to abide by the following Rules:</p>  
                    <li>BASIC SUBMISSIONS GUIDELINES FOR PHOTOGRAPHS</li>
                        <li>1.	You have  cover  upto 20 events form total events.</li>
                        <li>2.	ALL photos data you have to give to Coordinator</li>
                        <li>3.	selected photos given by you for competition is per events 2 to 3 photos without edited.</li>
                        <li>4.	Submissions will not be accepted once the deadline lapses.</li>
                        <li>5.	Photos submitted must be at least 640 pixels on the shorter side, and no more than 2000 pixels on the longer side. Images should be no larger than 15 MB. Photos must be in JPEG format.</li>
                        <li>6.	You are required to provide a unique title and description for each image submitted.</li>
                        <li>7.	. The same photo can be submitted for more than one contest. Photos that have won previous awards, including Better Photography’s prior contests, may be submitted again, unless otherwise mentioned in the contest specific rules.</li>
                        <li>8.	All submitted photos must contain the original EXIF metadata information. However there must be no border(s), logo(s), copyright marks, identifying marks, or any other visible references and/or marks on the image.</li>
                        <li>9.	Basic editing, including colour enhancement, the use of filters, and cropping of the Photo(s) is acceptable, provided any such editing does not affect the authenticity and/or genuineness of the Photo(s).</li>
                        <li>10.	Photos that portray or otherwise include inappropriate and/or offensive content, including provocative nudity, violence, human rights and/or environmental violation, and/or any other contents deemed to be contrary to the law, religious, cultural and moral traditions and practices of India, are strictly prohibited and will be immediately discarded</li>
                        <li>11.	The photograph must be original and no watermark of any kind should be on the photograph.</li>
                        <li>12.	It can be in Landscape/Portrait mode.</li>
                        <li>13.	Reels must be 15sec only  editing is allow only in reels.</li>

                        <p>Note: Any photograph received after march 26, 2022, 11:59 PM will not be considered for the competition.
                            In case of any controversy on a matter not mentioned in the above regulations, the Organizers will decide on the appropriate action. The Organizers' word shall be final and binding
                            </p>
                                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                
                </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Camera} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : Dslr photography</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 150/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Prize Money : 1000/-</h3> 
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>Note : Please read these rules (the Rules) before submitting your photo(s) to Better Photography’s contest. These are General Rules governing all contests hosted by Better Photography, unless so specified in the Specific Rules that may be applicable to individual contests. By participating in the contests, you understand, acknowledge and unconditionally agree to abide by the following Rules:</p>  
                        <li>BASIC SUBMISSIONS GUIDELINES FOR PHOTOGRAPHS</li>
                            <li>1.	You have  cover  upto 20 events form total events.</li>
                            <li>2.	ALL photos data you have to give to Coordinator</li>
                            <li>3.	selected photos given by you for competition is per events 2 to 3 photos without edited.</li>
                            <li>4.	Submissions will not be accepted once the deadline lapses.</li>
                            <li>5.	Photos submitted must be at least 640 pixels on the shorter side, and no more than 2000 pixels on the longer side. Images should be no larger than 15 MB. Photos must be in JPEG format.</li>
                            <li>6.	You are required to provide a unique title and description for each image submitted.</li>
                            <li>7.	. The same photo can be submitted for more than one contest. Photos that have won previous awards, including Better Photography’s prior contests, may be submitted again, unless otherwise mentioned in the contest specific rules.</li>
                            <li>8.	All submitted photos must contain the original EXIF metadata information. However there must be no border(s), logo(s), copyright marks, identifying marks, or any other visible references and/or marks on the image.</li>
                            <li>9.	Basic editing, including colour enhancement, the use of filters, and cropping of the Photo(s) is acceptable, provided any such editing does not affect the authenticity and/or genuineness of the Photo(s).</li>
                            <li>10.	Photos that portray or otherwise include inappropriate and/or offensive content, including provocative nudity, violence, human rights and/or environmental violation, and/or any other contents deemed to be contrary to the law, religious, cultural and moral traditions and practices of India, are strictly prohibited and will be immediately discarded</li>
                            <li>11.	The photograph must be original and no watermark of any kind should be on the photograph.</li>
                            <li>12.	It can be in Landscape/Portrait mode.</li>
                            <li>13.	Reels must be 15sec only  editing is allow only in reels.</li>

                            <p>Note: Any photograph received after march 26, 2022, 11:59 PM will not be considered for the competition.
                                In case of any controversy on a matter not mentioned in the above regulations, the Organizers will decide on the appropriate action. The Organizers' word shall be final and binding
                                </p>
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        <hr />
        <section style={{paddingTop: "50px"}} className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6}>
                    <img src={Reel} alt="red-light green light" style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <div>
                        <br />
                        <h2 style={{textTransform: "uppercase"}}>Event Name : reels (short video)</h2><hr />
                        <h3 style={{textTransform: "uppercase"}}>Entry Fees: 100/-</h3>
                        <h3 style={{textTransform: "uppercase"}}>Prize Money : 500/-</h3> 
                    </div>
                </Grid>
            </Grid>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Show Guidelines</h4></Accordion.Header>
                    <Accordion.Body>
                        <p>Note : Please read these rules (the Rules) before submitting your photo(s) to Better Photography’s contest. These are General Rules governing all contests hosted by Better Photography, unless so specified in the Specific Rules that may be applicable to individual contests. By participating in the contests, you understand, acknowledge and unconditionally agree to abide by the following Rules:</p>  
                        <li>BASIC SUBMISSIONS GUIDELINES FOR PHOTOGRAPHS</li>
                            <li>1.	You have  cover  upto 20 events form total events.</li>
                            <li>2.	ALL photos data you have to give to Coordinator</li>
                            <li>3.	selected photos given by you for competition is per events 2 to 3 photos without edited.</li>
                            <li>4.	Submissions will not be accepted once the deadline lapses.</li>
                            <li>5.	Photos submitted must be at least 640 pixels on the shorter side, and no more than 2000 pixels on the longer side. Images should be no larger than 15 MB. Photos must be in JPEG format.</li>
                            <li>6.	You are required to provide a unique title and description for each image submitted.</li>
                            <li>7.	. The same photo can be submitted for more than one contest. Photos that have won previous awards, including Better Photography’s prior contests, may be submitted again, unless otherwise mentioned in the contest specific rules.</li>
                            <li>8.	All submitted photos must contain the original EXIF metadata information. However there must be no border(s), logo(s), copyright marks, identifying marks, or any other visible references and/or marks on the image.</li>
                            <li>9.	Basic editing, including colour enhancement, the use of filters, and cropping of the Photo(s) is acceptable, provided any such editing does not affect the authenticity and/or genuineness of the Photo(s).</li>
                            <li>10.	Photos that portray or otherwise include inappropriate and/or offensive content, including provocative nudity, violence, human rights and/or environmental violation, and/or any other contents deemed to be contrary to the law, religious, cultural and moral traditions and practices of India, are strictly prohibited and will be immediately discarded</li>
                            <li>11.	The photograph must be original and no watermark of any kind should be on the photograph.</li>
                            <li>12.	It can be in Landscape/Portrait mode.</li>
                            <li>13.	Reels must be 15sec only  editing is allow only in reels.</li>

                            <p>Note: Any photograph received after march 26, 2022, 11:59 PM will not be considered for the competition.
                                In case of any controversy on a matter not mentioned in the above regulations, the Organizers will decide on the appropriate action. The Organizers' word shall be final and binding
                                </p>
                    
                    <Accordion.Header><h4 style={{textAlign: "center", color: "brown" }}>Close</h4></Accordion.Header>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
        <hr /> 
        </>
    );
}
export default Photography;