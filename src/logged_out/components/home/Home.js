import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
// import FeatureSection from "./FeatureSection";
// import PricingSection from "./PricingSection";
import WebPoster from "../../images/website poster-l.jpg";
import "./home.css";
import { Typography } from "@material-ui/core";
import EventCards from "../Events/eventCatds";
import GoogleMap from "../GooglMap";

function Home(props) {
  // const { selectHome } = props;
  // useEffect(() => {
  //   selectHome();
  // }, [selectHome]);
  return (
    <Fragment>
      <img src={WebPoster} alt="" className="webposter"/>
      <section className="container">
        <h1 className="date">Remember the dates <br /><span> 25th &#38; 26th March</span></h1>
        <Typography className="typography">
        "The annual national level techno management fest of CDGI is organized every year with a sole intention of providing an impetus to the talented minds of engineering and management students with an opportunity to showcase their professional brilliance. Citronics provide the right platform for students to showcase their prowess and compete not only at the state level but also with students at national level. Number of high profile events like Robotics, Civil Engineering, Mechatronics, Software, and Management are organized in Citronics"

        </Typography>
        <hr style={{color: "solid black", height: "5px"}}/>
      </section>
      <section className="events container">
        <h1 className="e-head">Let's have some fun!</h1>  <br />
        <EventCards />
      </section>
      <HeadSection />
      <div className="event-head" align="center">
          <h4>EVENT HEAD</h4>
          <h5>ATHARVA HAJARNIS : 00000000000</h5>
        </div>
      <section className="container" style={{marginTop: "120px"}}>
        
        <GoogleMap />
      </section>
    </Fragment>
  );
}

// Home.propTypes = {
//   selectHome: PropTypes.func.isRequired
// };

export default Home;
