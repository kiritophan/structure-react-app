import React, { useState } from "react";
import { Carousel } from "antd";
import './Banner.scss'
export default function Banner() {
    const [banners, setBanners] = useState([
        {
            id: 1,
            url: "../image/slider/slider_1.jpg",
            urlHistory: "SPING / SUMMONER COLLECTION 2023",
            des: "Get up to 30% Off New Arrivals",
        },
        {
            id: 2,
            url: "../image/slider/slider_2.jpeg",
            urlHistory: "SPING / SUMMONER COLLECTION 2023",
            des: "Get up to 30% Off New Arrivals",
        },
        {
            id: 3,
            url: "../image/slider/slider_3.jpeg",
            urlHistory: "SPING / SUMMONER COLLECTION 2023",
            des: "Get up to 30% Off New Arrivals",
        },
        {
            id: 4,
            url: "../image/slider/slider_4.jpeg",
            urlHistory: "SPING / SUMMONER COLLECTION 2023",
            des: "Get up to 30% Off New Arrivals",
        },
    ]);
    return (
        <Carousel className="home" id="home" autoplay autoplaySpeed={2500} >
            {banners.map((banner, index) => (
                <div key={banner.id + index}>
                    <img className="home-img" src={banner.url} />
                    <div className="items-content">
                        <span className="history">{banner.urlHistory.toUpperCase()}</span>
                        <span className="des">{banner.des}</span>
                    </div>
                    <button type="button" class="btn btn-success order-now">
                        Order Now
                    </button>
                </div>
            ))}
        </Carousel>
    )
}