import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import Home from "./home/Home";
import Events from "./Events/events";
import AboutUs from "./AboutUs/aboutUs";

import { Route } from "react-router"
import Entertainment from "./Events/allEvents/entertainment";
import Mechanical from "./Events/allEvents/mechanical";
import Software from "./Events/allEvents/software";
import Robotics from "./Events/allEvents/robotics";
import OnSpot from "./Events/allEvents/onSpot";
import Sports from "./Events/allEvents/sports";
import Pharma from "./Events/allEvents/pharma";
import Enterprenuership from "./Events/allEvents/Enterprenuership";
import Adventurous from "./Events/allEvents/adventurous";
import Photography from "./Events/allEvents/photography";
import Civil from "./Events/allEvents/civil";
import Management from "./Events/allEvents/Management";

function Routing() {
  return (
    <Switch>
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/" component={Home} />
      <Route exact path="/events/entertainment" component={Entertainment} />
      <Route exact path="/events/software" component={Software} />
      <Route exact path="/events/mechanical" component={Mechanical} />
      <Route exact path="/events/robotics" component={Robotics} />
      <Route exact path="/events/onSpot" component={OnSpot} />
      <Route exact path="/events/sports" component={Sports} />
      <Route exact path="/events/pharma" component={Pharma} />
      <Route exact path="/events/enterprenuership" component={Enterprenuership} />
      <Route exact path="/events/adventurous" component={Adventurous} />
      <Route exact path="/events/photography" component={Photography} />
      <Route exact path="/events/civil" component={Civil} />
      <Route exact path="/events/management" component={Management} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
