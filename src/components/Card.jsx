import React from 'react';
import '../styles/card.css';
import { Navigate } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <img src={props.image} alt="product-img" className='productImage' />

        <span className='productCard__like'><i class="ri-heart-line"></i></span>
        
        <span className='productCard__tag'>{props.tag}</span>

        <div className="productCard__content">
          <span className='productCard__location'><i class="ri-map-pin-2-line">{props.location}</i></span>
          <h3 className='productName'>{props.name}</h3>
          <div className="displayStack__1">
            <div className="productMeasures">
              <i class="ri-community-line"></i>
              <span>{props.room} Room</span>
            </div>
            <div className="productMeasures">
              <i class="ri-hotel-bed-line"></i>
              <span>{props.bed} Bed</span>
            </div>
            <div className="productMeasures">
              <i class="ri-space"></i>
              <span>{props.bath} Bath</span>
            </div>
            <div className="productMeasures">
              <i class="ri-drag-move-2-line"></i>
              <span>{props.area} sft</span>
            </div>
          </div>
          <div className='displayStack__2'>
            <div className='productPrice'>${props.price} <span>/month</span></div>
            <div className="readMore">Read More</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card;