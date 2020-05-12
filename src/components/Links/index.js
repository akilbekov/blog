import React from 'react';
import './style.scss';
import { Github, Gmail, Stackoverflow, Rss, Linkedin } from '../Icons';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      github: author.github,
      email: author.email,
      so: author.so,
      linkedin: author.linkedin,
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <Gmail />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://stackoverflow.com/users/${links.so}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Stackoverflow />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.linkedin.com/in/${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
