import React from "react";
import IconArray from "../Components/IconArray";

const About = () => {
  const skills = [
    "powershell",
    "bash",
    "git",
    "html5",
    "css",
    "sass",
    "bootstrap5",
    "javascript",
    "delphi",
    "java",
    "ruby",
    "rails",
    "netlify",
    "heroku",
  ];

  const hobbies = [
    "camping",
    "compass",
    "gaming",
    "hiking",
    "motorbike",
    "skiing",
  ];

  return (
    <main id="about-me">
      <section class="intro">
        <h1>Ryan-Wise</h1>
        <h2>Developer../</h2>
      </section>
      {/* <!-- Formatted by main.scss --> */}
      <section class="content">
        <section class="description">
          <h3 class="content-header">About Me:</h3>
          <p>
            Hi! I'm Ryan, a junior web developer studying at Coder Academy
            Melbourne. My background is in contract administration,
            architectural detailing, software support and systems
            administration. Mixed bag I know, but I absolutely love what I'm
            doing, and couldn't think of anything I'd rather be up too than
            solving a good problem!
          </p>
          <p>
            Feel free to check out my resume below. If you'd like to get in
            touch check out my <a href="./contact.html">contacts page</a> or
            drop me a line on my socials!
          </p>
          <article class="cv-link">
            <a href="./resources/RyanWise-Resume.pdf">My CV</a>
          </article>
        </section>
        <section class="Skills">
          <h3 class="content-header">Skills:</h3>
          {/* <!-- formatted by logo-array.scss --> */}
          <IconArray icons={skills} />
        </section>
        <section class="description">
          <h3 class="content-header">Behind the scenes:</h3>
          <p>
            When I'm not coding you'll find me exploring somewhere new. Be it on
            my bike, on foot, or behind a controller, I'm at my happiest when
            the territory is unfamiliar.
          </p>
        </section>
        <section class="hobbies">
          <h3 class="content-header">Hobbies:</h3>
          {/* formatted by logo-array.scss */}
          <IconArray icons={hobbies} />
        </section>
      </section>
    </main>
  );
};

export default About;
