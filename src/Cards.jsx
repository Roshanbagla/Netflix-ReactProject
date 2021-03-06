import React from 'react'

// Created my own custom element in React
function Card(props) {
    return (
        <div className="cards">

            <div className="card">
                <img
                    className="card_img"
                    src={props.imgsrc}
                    alt="mypic"></img>

                <div className="card_info">
                    <span className="card_category"> {props.title} </span>
                    <h3 className="card_title"> {props.seriesName} </h3>
                    <a href={props.link} target="_blank">
                        <button> Watch Now</button>
                    </a>
                </div>

            </div>

        </div>
    )
}
export default Card;