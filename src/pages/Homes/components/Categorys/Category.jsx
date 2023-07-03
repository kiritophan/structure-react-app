import React from 'react'
import "./Category.scss"
import { useNavigate, useParams } from 'react-router'

export default function Category() {
    const navigate = useNavigate()
    
    return (
        <section className="category" id="category">

            <a className="box" onClick={() => navigate("/menu/balenciaga")}>
                <img src="image/balenciaga/triples/triples_01.jpeg" alt="" />
                <h3>Balenciaga</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/louisVuitton")}>
                <img src="image/louis_vuitton/lv_01.jpeg" alt="" />
                <h3>Louis Vuitton</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/nike")}>
                <img src="image/nike/air_force_1/air_force_1_ambush.jpg" alt="" />
                <h3>Nike</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/jordan")}>
                <img src="image/nike/air_jordan/air_jordan_1/air_jordan_height_8.jpeg" alt="" />
                <h3>Jordan</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/adidas")}>
                <img src="image/adidas/nmd/nmd_01.jpeg" alt="" />
                <h3>Adidas</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/vans")}>
                <img src="image/vans/style_36/vans_style_36_3.jpeg" alt="" />
                <h3>Vans</h3>
            </a>

        </section>
    )
}
