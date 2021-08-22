import React from "react";
import Icon from "./Icon"

const IconArr = (props) => {
  let icons = props.icons
  // Take in the values passed to labels, or default to true
  let label = props.labels ?? true


  return (
    <article class="logo-array">
      {icons.map(icon => <Icon key={icon} name={icon} label={label} />)}
    </article>
  );
};

export default IconArr;
