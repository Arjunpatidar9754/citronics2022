import React from 'react';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import abacus from './carousel-logo/abacus.jpg';
import angel from './carousel-logo/angel.jpg';
import appin from './carousel-logo/appin.jpg';
import brain from './carousel-logo/brain.jpg';
import chl from './carousel-logo/chl.jpg';
import codeMantra from './carousel-logo/codeMantra.jpg';
import dominos from './carousel-logo/dominos.jpg';
import edgeMaker from './carousel-logo/edgeMaker.jpg';
import engineers from './carousel-logo/engineersCircle.jpg';
import hans from './carousel-logo/hansTravel.jpg';
import ind from './carousel-logo/ind24.jpg';
import indiaBazar from './carousel-logo/indiaBazar.jpg';
import lakme from './carousel-logo/lakme.jpg';
import mec from './carousel-logo/mec.jpg';
import nakhrali from './carousel-logo/nakhrali.jpg';
import nen from './carousel-logo/nen.jpg';
import ola from './carousel-logo/ola.jpg';
import oto from './carousel-logo/oto.jpg';
import oyo from './carousel-logo/oyo.jpg';
import robotic from './carousel-logo/robotic.jpg';
import ssi from './carousel-logo/ssi.jpg';
import titanEye from './carousel-logo/titanEye.jpg';
import tvs from './carousel-logo/tvs.jpg';
import universal from './carousel-logo/universal.jpg';

function MyCarousel(){
  return(
    <Carousel className='caro'>
      <Carousel.Item interval={500}>
        <img className="w-40 logo-img" src={abacus} alt="First slide" />
        <img className="w-40 logo-img" src={angel} alt="First slide" />
        <img className="w-40 logo-img" src={appin} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="w-40 logo-img" src={brain} alt="Second slide" />
        <img className="w-40 logo-img" src={chl} alt="second slide" />
        <img className="w-40 logo-img" src={codeMantra} alt="econd slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="w-40 logo-img" src={dominos} alt="Third slide" />
        <img className="w-40 logo-img" src={edgeMaker} alt="Third slide" />
        <img className="w-40 logo-img" src={engineers} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="w-40 logo-img" src={hans} alt="Fourth slide" />
        <img className="w-40 logo-img" src={ind} alt="Fourth slide" />
        <img className="w-40 logo-img" src={indiaBazar} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="w-40 logo-img" src={lakme} alt="Five slide" />
        <img className="w-40 logo-img" src={mec} alt="Five slide" />
        <img className="w-40 logo-img" src={nakhrali} alt="Five slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="w-40 logo-img" src={nen} alt="Six slide" />
        <img className="w-40 logo-img" src={ola} alt="Six slide" />
        <img className="w-40 logo-img" src={oto} alt="Six slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="w-40 logo-img" src={oyo} alt="Seven slide" />
        <img className="w-40 logo-img" src={robotic} alt="Seven slide" />
        <img className="w-40 logo-img" src={ssi} alt="Seven slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="w-40 logo-img" src={titanEye} alt="Eight slide" />
        <img className="w-40 logo-img" src={tvs} alt="Eight slide" />
        <img className="w-40 logo-img" src={universal} alt="Eight slide" />
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel;





