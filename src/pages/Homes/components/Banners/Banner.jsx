import React, { useState } from "react";
import { Carousel } from "antd";
import './Banner.scss'
export default function Banner() {
    const [banners, setBanners] = useState([
        {
            id: 1,
            url: "../image/slider/slider_1.jpg",
            
        },
        {
            id: 2,
            url: "../image/slider/slider_2.jpeg",
          
        },
        {
            id: 3,
            url: "../image/slider/slider_3.jpeg",
            
        },
        {
            id: 4,
            url: "../image/slider/slider_4.jpeg",
           
        },
    ]);
    return (
        <Carousel className="home" id="home" autoplay autoplaySpeed={2500} >
            {banners.map((banner, index) => (
                <div key={banner.id + index}>
                    <img className="home-img" src={banner.url} />
                </div>
            ))}
        </Carousel>
    )
}

