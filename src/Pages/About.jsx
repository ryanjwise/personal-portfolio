import React from "react";

const About = () => {
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
          <article class="logo-array">
            <article class="skill logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/icon-powershell.svg"
                  alt="Powershell Logo"
                />
                <figcaption class="logo-description">
                  <h3>
                    Power-
                    <br />
                    Shell
                  </h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img src="./resources/Icons/icon-bash.svg" alt="Bash Logo" />
                <figcaption class="logo-description">
                  <h3>Bash</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img src="./resources/Icons/icon-git.svg" alt="Git Logo" />
                <figcaption class="logo-description">
                  <h3>Git</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img src="./resources/Icons/icon-html5.svg" alt="HTML5 Logo" />
                <figcaption class="logo-description">
                  <h3>HTML 5</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img src="./resources/Icons/icon-css.svg" alt="CSS Logo" />
                <figcaption class="logo-description">
                  <h3>CSS</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img src="./resources/Icons/icon-sass.svg" alt="Sass Logo" />
                <figcaption class="logo-description">
                  <h3>SASS</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/icon-bootstrap.svg"
                  alt="Bootstrap 5 Logo"
                />
                <figcaption class="logo-description">
                  <h3>Bootstrap</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/icon-js.svg"
                  alt="JavaScript Logo"
                />
                <figcaption class="logo-description">
                  <h3>
                    Java-
                    <br />
                    Script
                  </h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/icon-delphi.svg"
                  alt="Delphi Logo"
                />
                <figcaption class="logo-description">
                  <h3>Delphi</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img src="./resources/Icons/icon-java.svg" alt="Java Logo" />
                <figcaption class="logo-description">
                  <h3>Java</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img src="./resources/Icons/icon-ruby.svg" alt="Ruby Logo" />
                <figcaption class="logo-description">
                  <h3>Ruby</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img src="./resources/Icons/icon-rails.svg" alt="Rails Logo" />
                <figcaption class="logo-description">
                  <h3>Rails</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/icon-netlify.svg"
                  alt="Netlify Logo"
                />
                <figcaption class="logo-description">
                  <h3>Netlify</h3>
                </figcaption>
              </figure>
            </article>
            <article class="skill logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/icon-heroku.svg"
                  alt="Heroku Logo"
                />
                <figcaption class="logo-description">
                  <h3>Heroku</h3>
                </figcaption>
              </figure>
            </article>
          </article>
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
          <article class="logo-array">
            <article class="hobby logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/asset-hobby-camping.svg"
                  alt="Camping Icon"
                />
                <figcaption class="logo-description">
                  <h3>Camping</h3>
                </figcaption>
              </figure>
            </article>
            <article class="hobby logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/asset-hobby-compass.svg"
                  alt="Compass Icon"
                />
                <figcaption class="logo-description">
                  <h3>
                    Getting
                    <br />
                    Lost
                  </h3>
                </figcaption>
              </figure>
            </article>
            <article class="hobby logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/asset-hobby-gaming.svg"
                  alt="Gaming Icon"
                />
                <figcaption class="logo-description">
                  <h3>Gaming</h3>
                </figcaption>
              </figure>
            </article>
            <article class="hobby logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/asset-hobby-hiking.svg"
                  alt="Hiking Icon"
                />
                <figcaption class="logo-description">
                  <h3>Hiking</h3>
                </figcaption>
              </figure>
            </article>
            <article class="hobby logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/asset-hobby-motorbike.svg"
                  alt="Motorbike Icon"
                />
                <figcaption class="logo-description">
                  <h3>
                    Moto-
                    <br />
                    Touring
                  </h3>
                </figcaption>
              </figure>
            </article>
            <article class="hobby logo-array-item">
              <figure class="logo">
                <img
                  src="./resources/Icons/asset-hoppy-skiing.svg"
                  alt="Skiing Icon"
                />
                <figcaption class="logo-description">
                  <h3>Skiing</h3>
                </figcaption>
              </figure>
            </article>
          </article>
        </section>
      </section>
    </main>
  );
};

export default About;
