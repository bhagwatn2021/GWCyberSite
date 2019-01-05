import React from "react";


const Slide = (props) => {
  const imageSrc = props.src;
  const imageText = props.text;

  return (
      <div className="video-list media">
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
