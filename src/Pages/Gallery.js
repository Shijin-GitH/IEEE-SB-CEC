import React from 'react'
import Heading from "../Components/Heading/Heading"
import Sidetitle from "../Components/Sidetitle/Sidetitle"
import { Carousel } from 'react-responsive-carousel'
import Line from '../Components/Line/Line'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Styles/Gallery.css"
function Gallery() {
  return (
    <div className='container-fluid'>
      <div className='m-5 gallery row'>
        <Heading title="GALLERY" />
        <Line />
      </div>
      <div className="carousel-part">
        <div data-aos="fade-up" className="carousel">
        <Carousel showArrows={true} interval={3000} infiniteLoop={true} autoFocus={true} stopOnHover={false} autoPlay={true}>
        <div>
          <img data-aos="zoom-in" alt='' src="https://cecieee.org/_next/static/image/public/images/carousal-images/level-1.d2ed50b51f3fc1c95938af46a4400708.jpg?imwidth=3840" />
        </div>
        <div>
          <img alt='' src="https://cecieee.org/_next/static/image/public/images/carousal-images/level-2.6e21e33f33ee60a5591ff9caa68cf69c.jpg?imwidth=3840" />

        </div>
        <div>
          <img alt='' src="https://cecieee.org/_next/static/image/public/images/carousal-images/level-3.46195446c6dc6af8424dcfd359a67e7d.jpg?imwidth=1920" />

        </div>
        <div>
          <img alt='' src="https://cecieee.org/_next/static/image/public/images/carousal-images/level-4.d6a63d41301076175ea355985bb109fd.jpg?imwidth=1920" />

        </div>
        <div>
          <img alt='' src="https://cecieee.org/_next/static/image/public/images/carousal-images/level-5.d761c55219a4c66b4d63f1c28e945954.jpg?imwidth=3840" />

        </div>
      </Carousel>
        </div>
      </div>
      <Sidetitle title="GALLERY" />
    </div>
  )
}

export default Gallery
