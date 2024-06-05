import React from "react";
import "./Campus.css";
import gallery_1 from "/gallery-1.png";
import gallery_2 from "/gallery-2.png";
import gallery_3 from "/gallery-3.png";
import gallery_4 from "/gallery-4.png";
import Button from "../Button/Button";
import whiteArrow from "/white-arrow.png";

function Campus() {
  return (
    <>
      <div className="campus">
        <div className="gallery">
          <img src={gallery_1} alt="gallery photo" />
          <img src={gallery_2} alt="gallery photo" />
          <img src={gallery_3} alt="gallery photo" />
          <img src={gallery_4} alt="gallery photo" />
        </div>
        <Button
          content="See more here"
          marginTop="30px"
          whiteArrow={whiteArrow}
        />
      </div>
    </>
  );
}

export default Campus;
