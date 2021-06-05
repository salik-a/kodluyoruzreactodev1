import React from "react";
import "./Card.css";
import food from "../../assets/food.jpg"; // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  

  let liked = true;
  
   
  return (
    
    <div className="card"  >
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.image} alt="Logo" />
      <div className="card-text">{props.description}</div>
      <div className="card-like-bar" >
        
          <img className="card-like-icon" src={liked ? heartFill:heartOutline} alt="Logo" />
      
        <div className="like-text">
          <b>{props.likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
