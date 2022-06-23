import React, { memo } from "react";
import './Description.scss'
function Description(props) {
  const { description } = props;
  return (
    <div className="wrapper-description">
      <h1>UCARS - Revolutionizing The Online Car Marketplace In Singapore</h1>
      {description.map(({ title, content }, index) => (
        <div key={index}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
}

export default memo(Description);
