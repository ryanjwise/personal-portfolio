import React from "react";
import LinkIcons from "../Assets/Svg/LinkIcons";

export default function Socials() {
  return (
    <nav className="socials">
      <a href="https://github.com/ryanjwise">
        <LinkIcons className="social-link" icon="github" />
      </a>
      <a href="https://twitter.com/RyanJWise">
        <LinkIcons className="social-link" icon="twitter" />
      </a>
      <a href="https://www.linkedin.com/in/ryanjwise/">
        <LinkIcons className="social-link" icon="linkedin" />
      </a>
    </nav>
  );
}
