import React from "react";
import {identifyIconPath} from "./../Utilities/identifyIconPath"

const Icon = (props) => {
  const { label, name } = props;
  let iconPath = identifyIconPath(name)

  return (
    <article class="skill logo-array-item">
      <figure class="logo">
        <img src={iconPath} alt={`${name} logo`} />
        {label ? (
          <figcaption class="logo-description">
            <h3>{name}</h3>
          </figcaption>
        ) : null}
      </figure>
    </article>
  );
};

export default Icon;
