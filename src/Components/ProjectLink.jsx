import React from "react";
import IconArray from "./IconArray";

const ProjectLink = ({project, project_id}) => {
  return (
    <article class="nav-array-item">
      <div class="nav-btn">
        <a href={`#project-link-${project_id}`}>{project.title}</a>
      </div>
      <div class="nav-img">
        <img
          src={project.screenshotPath}
          alt={project.screenshotText}
        />
      </div>
      <div class="nav-extra">
        {/* <!-- formatted in logo-array.scss --> */}
        <IconArray icons={project.stack} labels={false} />
      </div>
    </article>
  );
};

export default ProjectLink;
