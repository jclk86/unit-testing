import React from "react";
import "./Split.css";

function Split(props) {
  // this is like typing class=" split " + "left" or "right" depending on the branches in app.js. split is hardcoded.
  // The rest is referenced. adding combinedClassName to div, which is the main branch/parent for this section,
  // exposes the class to split in app.js, where left and right are taken from the combinedClassName in div here below
  const combinedClassName = `split ${props.className}`; // jsx
  const newStyles = { flex: props.flexBasis }; // flexBasis is set to 2 on left in app.js
  return (
    <div className={combinedClassName} style={newStyles}>
      {props.children}
    </div>
  );
}

export default Split;
