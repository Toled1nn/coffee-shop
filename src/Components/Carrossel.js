import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../Images/banner1.jpg';
import banner2 from '../Images/banner2.jpg';
import banner3 from '../Images/banner3.jpg';

function Carrossel() {
  return (
    <div className="carrossel">
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        <div>
          <img src={banner1} alt="Imagem 1" />
        </div>
        <div>
          <img src={banner2} alt="Imagem 2" />
        </div>
        <div>
          <img src={banner3} alt="Imagem 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carrossel;
