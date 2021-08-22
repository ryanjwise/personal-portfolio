import React from "react";
import Icons from "../Assets/Svg/Icons";

export default function Socials() {
  return (
    <nav className="socials">
      <a href="https://github.com/ryanjwise">
        <Icons className="social-link" icon="github" />
      </a>
      <a href="https://twitter.com/RyanJWise">
        <Icons className="social-link" icon="twitter" />
      </a>
      <a href="https://www.linkedin.com/in/ryanjwise/">
        <Icons className="social-link" icon="linkedin" />
      </a>
    </nav>
  );
}
