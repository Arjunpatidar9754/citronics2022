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

function Routing() {
  return (
    <Switch>
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/" component={Home} />
      <Route exact path="/events/entertainment" component={Entertainment} />
      <Route exact path="/events/software" component={Software} />
      <Route exact path="/events/mechanical" component={Mechanical} />

    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
