import React from "react";
import blogIcon from "../blog-icon-flat-fill-set-collection_1223784-21660.avif";

function Logo({ width = "100px" }) {
  return (
    <div className="bg-white rounded-lg p-2 shadow-md">
      <img
        src={blogIcon}
        alt="Blog Logo"
        width={width}
        style={{ display: 'block' }}
      />
    </div>
  );
}

export default Logo;
