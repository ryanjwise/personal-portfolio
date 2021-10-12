import React from 'react';
import {identifyIconPath} from "./../Utilities/identifyIconPath"

const Hyperlinkicon = (props) => {
  const { link, name } = props;
  let iconPath = identifyIconPath(name)

  return (
    <article class="link logo-array-item">
          <figure class="logo">
            <a href={link}>
              <img src={iconPath} alt={name}/>
            </a>
          </figure>
        </article>
  );
}

export default Hyperlinkicon;