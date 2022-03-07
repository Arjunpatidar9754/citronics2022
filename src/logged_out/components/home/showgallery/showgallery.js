import React from 'react';
import "./showimage.css";
import citn7 from "./galleryimage/citn7.jpg";
import citn10 from "./galleryimage/citn10.jpg";
import citn11 from "./galleryimage/citn11.jpg";
import citn12 from "./galleryimage/citn12.jpg";
import citn13 from "./galleryimage/citn13.jpg";
import citn15 from "./galleryimage/citn15.jpg";
import citn16 from "./galleryimage/citn16.jpg";
import citn17 from "./galleryimage/citn17.jpg";
import citn18 from "./galleryimage/citn18.jpg";
import citn34 from "./galleryimage/citn34.jpg";


function ShowGallery () {
    return(
        <section>
      <div class="container">
        <div class="img-container-grid">
        <div class="smallsquare"><img alt="" src={citn7} class="img-grid-c" /></div>
        <div class="smallsquare"><img alt="" src={citn10} class="img-grid-c" /></div>
          <div class="h_rectangle"><img alt="" src={citn11} class="img-grid-c" /></div>
          <div class="smallsquare"><img alt="" src={citn13} class="img-grid-c" /></div>
          <div class="bigsquare"><img alt="" src={citn12} class="img-grid-c" /></div>
          <div class="bigsquare_blank">
            <div class="inner_square"><img alt="" src={citn15} class="img-grid-c" /></div>
            <div class="inner_square"><img alt="" src={citn16} class="img-grid-c" /></div>
            <div class="inner_square"><img alt="" src={citn17} class="img-grid-c" /></div>
            <div class="inner_square"><img alt="" src={citn18} class="img-grid-c" /></div>
          </div>
          <div class="v_rectangle"><img alt='' src={citn34} class="img-grid-c" /></div>
        </div>
      </div>
    </section>
    );
}

export default ShowGallery;