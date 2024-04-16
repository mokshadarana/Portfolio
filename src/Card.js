import React from 'react';
import './card.css';

function Card({ layout, title, description, image, buttons,button, booked, time1, time2, time3, Available, price }) {
  if (layout === 'menu') {
    return (
      <div className='card-box'>
         <div className="card">
          <img src={image} alt="Card" className="card-image" />
        </div>
        <div className='menu-card'>
          <div className='menu-description'>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
          <div className='menu-button'>
            <p className='price'>${price}</p>
            <button className='button'>{buttons}</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='card-box'>
        <div className="card">
          <img src={image} alt="Card" className="card-image" />
        </div>
        <div className='card-contents'>
          <div className="descriptions">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <button className='buttons'>{button}</button>
          </div>
          <div className='booked-menu'>
            <p>{booked}</p>
            {booked !== '' && <p>{time1}</p>}
            <p>{time2}</p>
            <p>{time3}</p>
          </div>
          {/* Conditionally render the "option" div */}
          {booked ? null : (
            <div className='option'>
              <p>{Available}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;