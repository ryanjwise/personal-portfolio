import React from 'react';
import {identifyIconPath} from "./../Utilities/identifyIconPath"
import LinkIcons from "../Assets/Svg/LinkIcons";

const Hyperlinkicon = (props) => {
  const { link, name } = props;
  let iconPath = identifyIconPath(name)

  return (
    <article class="link logo-array-item">
          <figure class="logo">
            <a href={link}>
              <img src={iconPath} alt={name}/>
              <LinkIcons className="social-link" icon={name} />
            </a>
          </figure>
        </article>
  );
}

export default Hyperlinkicon;