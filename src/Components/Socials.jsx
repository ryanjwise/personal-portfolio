import React from "react";
import SocialIcons from "../Assets/Svg/SocialIcons";

export default function Socials() {
  return (
    <nav className="socials">
      <a href="https://github.com/ryanjwise">
        <SocialIcons className="social-link" icon="github" />
      </a>
      <a href="https://twitter.com/RyanJWise">
        <SocialIcons className="social-link" icon="twitter" />
      </a>
      <a href="https://www.linkedin.com/in/ryanjwise/">
        <SocialIcons className="social-link" icon="linkedin" />
      </a>
    </nav>
  );
}
