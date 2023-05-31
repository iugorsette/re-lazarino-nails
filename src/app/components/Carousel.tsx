import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../../public/picture/image-1.jpeg";
import image2 from "../../../public/picture/image-2.jpeg";
import image3 from "../../../public/picture/image-3.jpeg";
import image4 from "../../../public/picture/image-4.jpeg";
import image5 from "../../../public/picture/image-5.jpeg";
import image6 from "../../../public/picture/image-6.jpeg";

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
      className="w-full h-full"
    >
      <div>
        <Image src={image1} alt="Renata Nails Design"  />
      </div>
      <div>
        <Image src={image2} alt="Renata Nails Design"  />
      </div>
      <div>
        <Image src={image3} alt="Renata Nails Design"  />
      </div>
      <div>
        <Image src={image4} alt="Renata Nails Design"  />
      </div>
      <div>
        <Image src={image5} alt="Renata Nails Design"  />
      </div>
      <div>
        <Image src={image6} alt="Renata Nails Design"  />
      </div>
    </Carousel>
  );
};