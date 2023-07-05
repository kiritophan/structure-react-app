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
// import React from 'react'

// export default function Banner() {
//   return (
//       <>
//           <div
//               id="carouselVideoExample"
//               className="carousel slide carousel-fade"
//               data-mdb-ride="carousel"
//           >
//               <div className="carousel-indicators">
//                   <button
//                       type="button"
//                       data-mdb-target="#carouselVideoExample"
//                       data-mdb-slide-to={0}
//                       className="active"
//                       aria-current="true"
//                       aria-label="Slide 1"
//                   />
//                   <button
//                       type="button"
//                       data-mdb-target="#carouselVideoExample"
//                       data-mdb-slide-to={1}
//                       aria-label="Slide 2"
//                   />
//                   <button
//                       type="button"
//                       data-mdb-target="#carouselVideoExample"
//                       data-mdb-slide-to={2}
//                       aria-label="Slide 3"
//                   />
//               </div>
//               <div className="carousel-inner">
//                   <div className="carousel-item active">
//                       <video className="img-fluid" autoPlay="" loop="" muted="">
//                           <source
//                               src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/i1mRN67J9G_HD.mp4"
//                               type="video/mp4"
//                           />
//                       </video>
//                       <div className="carousel-caption d-none d-md-block">
//                           <h5>First slide label</h5>
//                           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                       </div>
//                   </div>
//                   <div className="carousel-item">
//                       <video className="img-fluid" autoPlay="" loop="" muted="">
//                           <source
//                               src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/rmgaMH8RlP_HD.mp4"
//                               type="video/mp4"
//                           />
//                       </video>
//                       <div className="carousel-caption d-none d-md-block">
//                           <h5>Second slide label</h5>
//                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                       </div>
//                   </div>
//                   <div className="carousel-item">
//                       <video className="img-fluid" autoPlay="" loop="" muted="">
//                           <source
//                               src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/rLRLJIyWSW_HD.mp4"
//                               type="video/mp4"
//                           />
//                       </video>
//                       <div className="carousel-caption d-none d-md-block">
//                           <h5>Third slide label</h5>
//                           <p>
//                               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                           </p>
//                       </div>
//                   </div>
//               </div>

//               <button
//                   className="carousel-control-prev"
//                   type="button"
//                   data-mdb-target="#carouselVideoExample"
//                   data-mdb-slide="prev"
//               >
//                   <span className="carousel-control-prev-icon" aria-hidden="true" />
//                   <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                   className="carousel-control-next"
//                   type="button"
//                   data-mdb-target="#carouselVideoExample"
//                   data-mdb-slide="next"
//               >
//                   <span className="carousel-control-next-icon" aria-hidden="true" />
//                   <span className="visually-hidden">Next</span>
//               </button>
//           </div>
//       </>

//   )
// }
