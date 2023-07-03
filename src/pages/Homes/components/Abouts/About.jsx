import React from 'react'
import "./About.scss"

export default function About() {
    return (
        <section className="about" id="about">

            <div className="image">
                <img src="https://vn.louisvuitton.com/images/is/image/35100040v_Art_of_Living_May23_DI3?wid=2048" alt="" />
            </div>

            <div className="content">
                <h1 className="title"> COLLECTION </ h1>
                <h3>J-HOPE AND THE KEEPALL</h3>
                <p>Timelessly elegant in emblematic Taiga leather, Louis Vuitton's iconic Keepall holdall,
                    the original soft travel bag, is a stylish and practical choice for a weekend away.</p>
                <a href="#" className="btn">read more</a>
                <div className="icons-container">
                    <div className="icons">
                        <img src="image/serv-1.png" alt="" />
                            <h3>About</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-2.png" alt="" />
                        <h3>About</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-3.png" alt="" />
                        <h3>About</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-4.png" alt="" />
                        <h3>About</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}
