import React,{useState} from "react";
import "./Card.css";
import food from "../../assets/food.jpg"; // Tell webpack this JS file uses this image
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  

  let liked = true;
  const [image,setImage]= useState(heartOutline);
  const [likeCount,setLikeCount]= useState(props.likeCount)
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
      <img className="card-image" src={props.image} alt="Logo" onClick={()=>{setImage(image==heartOutline ? heartFill : heartOutline); setLikeCount(likeCount==props.likeCount? props.likeCount+1 : props.likeCount) }}/>
      <div className="card-text">{props.description}</div>
      <div className="card-like-bar" >
        <div onClick={()=>{setImage(image==heartOutline ? heartFill : heartOutline); setLikeCount(likeCount==props.likeCount? props.likeCount+1 : props.likeCount) }}>
          <img className="card-like-icon" src={image} alt="Logo" />
      </div>
        <div className="like-text">
          <b>{likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
