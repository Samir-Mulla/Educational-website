import React from "react";

function Button({ content, marginTop,whiteArrow }) {
  return (
    <div>
      <button
        className="btn"
        style={{
          color: "#fff",
          background: "#212EA0",
          marginTop: `${marginTop}`,
        }}
      >
        {content}
        <img src={whiteArrow} alt="arrow" />
      </button>
    </div>
  );
}

export default Button;
