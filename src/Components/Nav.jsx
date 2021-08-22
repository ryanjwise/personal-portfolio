import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About me</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/projects">projects</Link></li>
        {/* <li><a href="./blog.html">blog</a></li> */}
      </ul>
    </nav>
  );
}
