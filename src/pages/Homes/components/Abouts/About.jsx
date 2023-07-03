import React from 'react'
import "./About.scss"

export default function About() {
    return (
        <section className="about" id="about">

            <div className="image">
                <img src="https://vn.louisvuitton.com/images/is/image/35100040v_Art_of_Living_May23_DI3?wid=2048" alt="" />
            </div>

            <div className="content">
                <span>BỘ SƯU TẬP</ span>
                <h3 className="title">J-HOPE VÀ THE KEEPALL</h3>
                <p>Một bài thơ ca về sự di chuyển, Đại sứ nhà Louis Vuitton, j-hope, 
                    trưng bày túi Keepall mang tính biểu tượng trong một chiến dịch biểu diễn múa động lực, 
                    khẳng định sức hấp dẫn đa dụng của bộ sưu tập.</p>
                <a href="#" className="btn">read more</a>
                <div className="icons-container">
                    <div className="icons">
                        <img src="image/serv-1.png" alt="" />
                            <h3>Về chúng tôi</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-2.png" alt="" />
                        <h3>Về chúng tôi</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-3.png" alt="" />
                        <h3>Về chúng tôi</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-4.png" alt="" />
                        <h3>Về chúng tôi</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}
