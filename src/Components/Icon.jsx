import React from "react";

const Icon = (props) => {
  const { label, name } = props;
  let icon = undefined;

  switch (name) {
    case "bash":
      icon = require("./../Assets/Svg/icon-bash.svg").default;
      break;
    case "powershell":
      icon = require("./../Assets/Svg/icon-powershell.svg").default;
      break;
    case "git":
      icon = require("./../Assets/Svg/icon-git.svg").default;
      break;
    case "html5":
      icon = require("./../Assets/Svg/icon-html5.svg").default;
      break;
    case "css":
      icon = require("./../Assets/Svg/icon-css.svg").default;
      break;
    case "sass":
      icon = require("./../Assets/Svg/icon-sass.svg").default;
      break;
    case "bootstrap5":
      icon = require("./../Assets/Svg/icon-bootstrap.svg").default;
      break;
    case "javascript":
      icon = require("./../Assets/Svg/icon-js.svg").default;
      break;
    case "delphi":
      icon = require("./../Assets/Svg/icon-delphi.svg").default;
      break;
    case "java":
      icon = require("./../Assets/Svg/icon-java.svg").default;
      break;
    case "ruby":
      icon = require("./../Assets/Svg/icon-ruby.svg").default;
      break;
    case "rails":
      icon = require("./../Assets/Svg/icon-rails.svg").default;
      break;
    case "netlify":
      icon = require("./../Assets/Svg/icon-netlify.svg").default;
      break;
    case "heroku":
      icon = require("./../Assets/Svg/icon-heroku.svg").default;
      break;
    default:
      console.error(`Unknown icon ${name}`);
      return null;
  }

  return (
    <article class="skill logo-array-item">
      <figure class="logo">
        <img src={icon} alt={`${name} logo`} />
        {label ? (
          <figcaption class="logo-description">
            <h3>{name}</h3>
          </figcaption>
        ) : null}
      </figure>
    </article>
  );
};

export default Icon;
