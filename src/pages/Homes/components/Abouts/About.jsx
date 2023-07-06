import React from 'react'
import "./About.scss"
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()
    return (
        <>
            <div className='feature' id='featured'>FEATURED</div>
            <section className="about" id="about">
                <div className="image">
                    <img src="https://vn.louisvuitton.com/images/is/image/35100040v_Art_of_Living_May23_DI3?wid=2048" alt="" />
                </div>
                <div className="content">
                    <div className="icons-container">
                        <div className="icons">
                            <img src="" alt="" />
                            <h1>SNKRDUNK VISIONS</h1>
                        </div>
                        <div className="icons">
                            <img src="" alt="" />
                            <h3>The immersive exhibition playfully portraying 102 years of creativity.</h3>
                        </div>
                        <div className="icons">
                            <img src="" alt="" />
                            <a>READ MORE</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
        
    )
}
