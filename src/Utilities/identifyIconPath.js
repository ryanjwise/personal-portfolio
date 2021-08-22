export function identifyIconPath(iconName) {
  let icon = undefined;

  switch (iconName) {
    case "github":
      icon = require("./../Assets/Svg/icon-github.svg").default;
      break;
    case "linkedin":
      icon = require("./../Assets/Svg/icon-linkedin.svg").default;
      break;
    case "twitter":
      icon = require("./../Assets/Svg/icon-twitter.svg").default;
      break;
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
    case "camping":
      icon = require("./../Assets/Svg/asset-hobby-camping.svg").default;
      break;
    case "compass":
      icon = require("./../Assets/Svg/asset-hobby-compass.svg").default;
      break;
    case "gaming":
      icon = require("./../Assets/Svg/asset-hobby-gaming.svg").default;
      break;
    case "hiking":
      icon = require("./../Assets/Svg/asset-hobby-hiking.svg").default;
      break;
    case "motorbike":
      icon = require("./../Assets/Svg/asset-hobby-motorbike.svg").default;
      break;
    case "skiing":
      icon = require("./../Assets/Svg/asset-hobby-skiing.svg").default;
      break;
    default:
      console.error(`Unknown icon ${iconName}`);
      return null;
  }

  return icon;
}
