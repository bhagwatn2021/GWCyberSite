import React from "react";


const Slide = (props) => {
  const imageSrc = props.property.image;
  const imageText = props.property.text;

  return (
      <div className="media">
        <div className="media">
          <img className="media-object" src={imageSrc} />
        </div>
        <div className="media-body">
          <div className="media-heading">{imageText}</div>
          {props.text}
        </div>
      </div>
  );
};

export default Slide;
