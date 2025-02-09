
import React from "react";
import '../App.css'

function Card({ image = "Немає картинки", title = "Без назви", description = "Опис відсутній" }) {
    return (
        <div className="flex-container">
        <div className="image-container">
            {image && <img src={image} alt={title} />}
            <h2 className="image-title">{title}</h2>
            <p className="image-caption">{description}</p>
            </div>
            </div>
    )
  }
  
  export default Card;




