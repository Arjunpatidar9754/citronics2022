import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
// import FeatureSection from "./FeatureSection";
// import PricingSection from "./PricingSection";
import WebPoster from "../../images/website poster-l.jpg";
import "./home.css";
import { Typography } from "@material-ui/core";// eslint-disable-next-line
import EventCards from "../Events/eventCatds"; 
import {Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import Entertainment from "../../images/entertainment/entertainment.webp";
import Enterpreneurship from "../../images/enterprenuership/enterpreneurship.webp";
import Software from "../../images/software/software.webp";
import Mechanical from "../../images/mechanical/mechanical.jpg";
import OnSpot from "../../images/onspot/onspot.webp";
import Robotics from "../../images/robotics/robotics.webp";
import Sports from "../../images/sports/sports.webp";
import Pharma from "../../images/pharma/pharma.webp";
import Adventurous from "../../images/sports/sports.webp";
import Photography from "../../images/sports/photography.webp";
import Civil from "../../images/sports/civil.webp";
import Management from "../../images/sports/sports.webp";
import ShowGallery from "./showgallery/showgallery";
import StuntMania from "./stuntMania";
import MyCarousel from "./carousel";

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
      <section className="container">
        <h1 className="e-head" style={{paddingBottom: "30px"}}>EVENTS</h1>
        <Carousel>
          <Carousel.Item>
            <Link to="/events" >
              <img
                className="d-block w-100"
                src={Entertainment}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/events" >
              <img
                className="d-block w-100"
                src={Enterpreneurship}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Software}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={OnSpot}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Robotics}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Sports}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Pharma}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Adventurous}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Photography}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Civil}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Management}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
          < Link to="/events" >
              <img
                className="d-block w-100"
                src={Mechanical}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
        </Carousel>
        
      </section><hr />
      <section className=" container" style={{paddingTop: "20px", paddingBottom: "100px"}}>
        <h1 className="e-head" style={{paddingTop: "50px"}}>Let's have some fun!</h1>  <br />
        <StuntMania />
        <ShowGallery />
      </section>
      <HeadSection />
      
      <section className="container" style={{paddingTop: "120px"}}>
      <h1 className="e-head" style={{paddingBottom: "-10px"}}>-OUR PREVIOUS SPONSORS-</h1>
        <MyCarousel />
      </section>
    </Fragment>
  );
}

// Home.propTypes = {
//   selectHome: PropTypes.func.isRequired
// };

export default Home;
