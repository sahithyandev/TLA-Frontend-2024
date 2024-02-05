import React from 'react';
import './photoGallery.css';

const ImageGallery = ({ province }) => {
  return (
    <React.Fragment>
    <div className='set-width'>

      <div className="province-container">
      <div className="province-landing-heading1">{province.name}</div>
        <div className="images-container">
          {province.districts.map((district, index) => (
            <div key={index} className="district-container">
              <img src={district.images[0]} alt={`District ${district.name}`} className='imgx' />
              {/* <div className="district1-landing-heading1">{district.name}</div> */}
              <div className="district-name">{district.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default ImageGallery;
