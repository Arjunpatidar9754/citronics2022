import React, { memo, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

const Home = lazy(() => import('./home/Home'));
const Events = lazy(() => import('./Events/events'));
const AboutUs = lazy(() => import('./AboutUs/aboutUs'));
const Entertainment = lazy(() => import('./Events/allEvents/entertainment'));
const Mechanical = lazy(() => import('./Events/allEvents/mechanical'));
const Software = lazy(() => import('./Events/allEvents/software'));
const Robotics = lazy(() => import('./Events/allEvents/robotics'));
const OnSpot = lazy(() => import('./Events/allEvents/onSpot'));
const Sports = lazy(() => import('./Events/allEvents/sports'));
const Pharma = lazy(() => import('./Events/allEvents/pharma'));
const Enterprenuership = lazy(() => import('./Events/allEvents/Enterprenuership'));
const Adventurous = lazy(() => import('./Events/allEvents/adventurous'));
const Photography = lazy(() => import('./Events/allEvents/photography'));
const Civil = lazy(() => import('./Events/allEvents/civil'));
const Management = lazy(() => import('./Events/allEvents/Management'));

function Routing() {
  const location = useLocation();

  return (
    <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Citronics 2k22
              </div>
            </div>
          }>
    <Switch location={location} key={location.pathname}>
      <Redirect exact from="/" to="/home" />
      
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/home" component={Home} />
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
    </Suspense>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
