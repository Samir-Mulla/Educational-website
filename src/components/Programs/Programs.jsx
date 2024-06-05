import React from "react";
import "./Programs.css";
import program_1 from "/program-1.png";
import program_2 from "/program-2.png";
import program_3 from "/program-3.png";
import program_icon_1 from "/program-icon-1.png";
import program_icon_2 from "/program-icon-2.png";
import program_icon_3 from "/program-icon-3.png";

function Programs() {
  return (
    <>
      <div className="programs">
        <div className="program">
          <img src={program_1} alt="program-1 img" />
          <div className="caption">
            <img src={program_icon_1} alt="program_icon_1" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program_2} alt="program-2 img" />
          <div className="caption">
            <img src={program_icon_2} alt="program_icon_2" />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program_3} alt="program-3 img" />
          <div className="caption">
            <img src={program_icon_3} alt="program_icon_3" />
            <p>Postgraduation Degree</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programs;
