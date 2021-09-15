import React from "react";
import ProjectLink from "./../Components/ProjectLink"
import ProjectAbout from "./../Components/ProjectAbout"

const Projects = () => {
  const projects = [{
    title: "Personal Website",
    screenshotPath: "/img/design-mobile-about.png",
    screenshotText: "Screenshot of Mobile Display",
    stack: [
      "html5",
      "git",
      "netlify"
    ]},
    {
    title: "Routinely",
    screenshotPath: "/img/design-routinely.png",
    screenshotText: "Routinely UI Demo",
    stack: [
      "ruby",
      "git"
    ]},
    {
    title: "Oil In Wax",
    screenshotPath: "/img/design-oilinwax.png",
    screenshotText: "Oil In Wax Landing Page",
    stack: [
      "sass",
      "html5",
      "bootstrap5",
      "git",
      "rails",
      "heroku"
    ]
    }]

  return (
    <main id="projects">
      <section class="intro">
        <h2>Projects</h2>
      </section>
      <section class="content">
        {/* <!-- formatted in nav-array.scss --> */}
        <nav class="nav-array">
          {projects.map((project, index) => <ProjectLink key={index} project_id={index + 1} project={project} />)}
        </nav>
        {/* <!-- formatted in content-array.scss with signigicant overrides in projects.scss --> */}
        <section class="projects content-array">
          {projects.map((project, index) => <ProjectAbout key={index} project_id={index + 1} project={project} />)}
          <article id="project-title-1" class="project content-array-item">
            <hr />
            <h3 class="content-header">Personal Website</h3>
            <figure class="content-img">
              <img
                src="./resources/Images/design-mobile-about.png"
                alt="Screenshot of Website"
              />
            </figure>
            <section class="description">
              <p class="about">
                <strong>About:</strong>
                <br />
              </p>
              <p class="about">
                Welcome!
                <br />I created this portfolio to showcase both myself and my
                work. Though it came with the added benefit of allowing me to
                improve and develop my foundational web development skillset.
                Through this project, I learnt about Semantic HTML, Compiled
                CSS, Responsive Design, Git Workflows and Web Deployment
                Pipelines! Though there's still work to be done, and things that
                could be improved, I'm proud of the result and hope you like it
                too!
              </p>
              <p class="challenges">
                <strong>Challenges:</strong>
                <br />
              </p>
              <p class="challenges">
                <strong>
                  <em>Theme:</em>
                </strong>
                <br />
                From the outset, I wanted to have a strong theme or aesthetic to
                base my design around. After going down a bit of a research
                rabbit hole, I settled on a terminal theme. Though I like the
                result it did impose heavy restrictions on the colour pallet (I
                know the green text isn't for everyone!) and demand very rigid
                styling.
                <br />
                Ultimately the need for consistent styling proved a boon because
                it encouraged me to design through the use of 'componants' that
                could be used in multiple different places. If I were to do a
                similar project again in the future I would put more energy into
                repeatable components that could be used ubiquitously, they're
                all still a little unique here!
                <br />
                <strong>
                  <em>Scoping & Specificity:</em>
                </strong>
                There are a lot of cool features in CSS 3 that I wanted to
                explore, however, given project deadlines I was unable to
                implement all of them. A big challenge here was being selective
                in the application of content and features to ensure that whilst
                incomplete the final product felt both consistent and complete
                to the viewer.
                <br />
                Working with SASS too, and I got a little over-enthusiastic with
                the power of CSS nesting. As a result, a lot of components are
                styled using much higher levels of specificity than I would
                like. To circumvent this and override component styling each
                page needed to be assigned its own ID tag for the SASS to
                target.
                <br />
                Both of these issues could be solved with a little more time and
                a less novice approach to the site. Which is exactly what I
                intend to do! In the coming month I would love to rebuild this
                site with tighter styling and database in the backend, allowing
                me to update, edit, and tweak this content a little more freely.
              </p>
            </section>
            <h3 class="content-header">Tech Stack:</h3>
            {/* <!-- formatted in logo-array.scss --> */}
            <article class="logo-array">
              <article class="link logo-array-item">
                <figure class="logo">
                  <img src="./resources/Icons/icon-sass.svg" alt="SASS Icon" />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img src="./resources/Icons/icon-html5.svg" alt="HTML Icon" />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img src="./resources/Icons/icon-git.svg" alt="Git Icon" />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img
                    src="./resources/Icons/icon-netlify.svg"
                    alt="Netlify Icon"
                  />
                </figure>
              </article>
            </article>
            <h3 class="content-header">Links:</h3>
            <article class="logo-array">
              <article class="link logo-array-item">
                <figure class="logo">
                  <a href="#">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <a href="https://github.com/ryanjwise">
                    <i class="fab fa-github-square"></i>
                  </a>
                </figure>
              </article>
            </article>
          </article>
          <article id="project-title-3" class="project content-array-item">
            <hr />
            <h3 class="content-header">Routinely</h3>
            <figure class="content-img">
              <img
                src="./resources/Images/design-routinely.png"
                alt="Routinely UI Demo Image"
              />
            </figure>
            <section class="description">
              <p class="about">
                <strong>About:</strong>
                <br />
              </p>
              <p class="about">
                Routinely was a time management tool, designed and built as a
                means of learning the ins and outs of backend programming and
                basic CRUD operations. At its core Routinely aims to provide a
                method for users to quickly create and reorder sequences of
                events or tasks.
              </p>
              <p class="challenges">
                <strong>Challenges:</strong>
                <br />
              </p>
              <p class="challenges">
                <strong>
                  <em>Environment:</em>
                </strong>
                <br />
                Operating in a shell terminal environment, Routinely falls
                victim to the effects of a user’s theme. Whilst I think that the
                application looks great in my environment, some of the graphical
                displays can appear a little off in some shells.
                <br />
                Given the ruby and bundler dependency, I haven't been able to
                get this to work properly on a Windows Operating system. Though
                I'm not sure that's an issue at this stage. I think the next
                step for routinely to work as part of a web application to allow
                it to work in any environment. Rather than building it for
                multiple different terminal environments.
              </p>
            </section>
            <h3 class="content-header">Tech Stack:</h3>
            <article class="logo-array">
              <article class="link logo-array-item">
                <figure class="logo">
                  <img src="./resources/Icons/icon-ruby.svg" alt="Ruby Icon" />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img src="./resources/Icons/icon-git.svg" alt="Git Icon" />
                </figure>
              </article>
            </article>
            <h3 class="content-header">Links:</h3>
            <article class="logo-array">
              <article class="link logo-array-item">
                <figure class="logo">
                  <a href="https://github.com/ryanjwise/routinely">
                    <i class="fab fa-github-square"></i>
                  </a>
                </figure>
              </article>
            </article>
          </article>
          <article id="project-title-4" class="project content-array-item">
            <hr />
            <h3 class="content-header">Oil in Wax</h3>
            <figure class="content-img">
              <img
                src="./resources/Images/design-oilinwax.png"
                alt="Oil in Wax Landing Page"
              />
            </figure>
            <section class="description">
              <p class="about">
                <strong>About:</strong>
                <br />
              </p>
              <p class="about">
                Oil in Wax is a 2 sided marketplace, designed and built as a
                means of learning Ruby on Rails and its integration with
                PostgreSQL and database design
              </p>
              <p class="challenges">
                <strong>Challenges:</strong>
                <br />
              </p>
              <p class="challenges">
                <strong>
                  <em>Shopping Cart:</em>
                </strong>
                <br />
                Designing a shopping cart in PostgreSQL proved a difficult
                challenge. I had to rationalise how to build a transient element
                into the database, whilst still maintaining a persistent record
                of sale. In the end, I resolved this by duplicating the tables;
                the permanent records I kept in a one to many relationship with
                the shopper, and the transient records on a one to one
                relationship with the shopper.
              </p>
            </section>
            <h3 class="content-header">Tech Stack:</h3>
            <article class="logo-array">
              <article class="link logo-array-item">
                <figure class="logo">
                  <img src="./resources/Icons/icon-sass.svg" alt="SASS Icon" />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img src="./resources/Icons/icon-html5.svg" alt="HTML Icon" />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img
                    src="./resources/Icons/icon-bootstrap.svg"
                    alt="Bootstrap 5 Icon"
                  />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img src="./resources/Icons/icon-git.svg" alt="Git Icon" />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img
                    src="./resources/Icons/icon-rails.svg"
                    alt="Rails Icon"
                  />
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <img
                    src="./resources/Icons/icon-heroku.svg"
                    alt="Heroku Icon"
                  />
                </figure>
              </article>
            </article>
            <h3 class="content-header">Links:</h3>
            <article class="logo-array">
              <article class="link logo-array-item">
                <figure class="logo">
                  <a href="https://oil-in-wax.herokuapp.com/">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                </figure>
              </article>
              <article class="link logo-array-item">
                <figure class="logo">
                  <a href="https://github.com/ryanjwise/oil-in-wax">
                    <i class="fab fa-github-square"></i>
                  </a>
                </figure>
              </article>
            </article>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Projects;
