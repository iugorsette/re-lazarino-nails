import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../../public/picture/image-1.png";
import image2 from "../../../public/picture/image-2.png";
import image3 from "../../../public/picture/image-3.png";
import image4 from "../../../public/picture/image-4.png";
import image5 from "../../../public/picture/image-5.png";

export const CarouselComponent = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      showArrows={true}
      showIndicators={true}
      centerMode={true}
    >
      <div>
        <Image src={image1} alt="Renata Nails Design" />
      </div>
      <div>
        <Image src={image2} alt="Renata Nails Design" />
      </div>
      <div>
        <Image src={image3} alt="Renata Nails Design" />
      </div>
      <div>
        <Image src={image4} alt="Renata Nails Design" />
      </div>
      <div>
        <Image src={image5} alt="Renata Nails Design" />
      </div>
    </Carousel>
  );
};
