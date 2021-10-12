import React from 'react';
import HyperlinkIcon from './HyperlinkIcon';

const Hyperlinkiconarray = (props) => {
  let links = props.links

  return (
    <article class="logo-array">
      {Object.keys(links).map((linkType, i) => 
        <HyperlinkIcon key={i} name={linkType} link={links[linkType]} />
      )}
    </article>
  );
}

export default Hyperlinkiconarray;
