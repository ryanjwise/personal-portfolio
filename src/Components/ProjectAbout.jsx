import React from "react";
import IconArray from "./IconArray";
import HyperlinkIconArray from "./HyperlinkIconArray";

const ProjectAbout = ({ project, project_id }) => {
  const {
    title,
    about,
    challenges,
    screenshotPath,
    screenshotText,
    stack,
    links,
  } = project;

  return (
    <article
      id={`project-link-${project_id}`}
      class="project content-array-item"
    >
      <hr />
      <h3 class="content-header">{title}</h3>
      <figure class="content-img">
        <img src={screenshotPath} alt={screenshotText} />
      </figure>
      <section class="description">
        <p class="about">
          <strong>About:</strong>
        </p>
        {about.map((paragraph) => (
          <p class="about"> {paragraph} </p>
        ))}
        {/* {about.map(paragraph => <>{paragraph}<br /></>)} */}
        <p class="challenges">
          <strong>Challenges:</strong>
        </p>
        {challenges.map((challenge) => (
          <>
            <p class="challenges">
              <strong>
                <em>{challenge.title}</em>
              </strong>
              <br />
            </p>
            {challenge.body.map((paragraph) => (
              <p class="challenges"> {paragraph} </p>
            ))}
          </>
        ))}
      </section>
      <h3 class="content-header">Tech Stack:</h3>
      {/* <!-- formatted in logo-array.scss --> */}
      <IconArray icons={stack} labels={true} />
      <h3 class="content-header">Links:</h3>
      <HyperlinkIconArray links={links} />
    </article>
  );
};

export default ProjectAbout;
