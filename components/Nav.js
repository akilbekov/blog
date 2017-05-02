import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

class Nav extends Component {
  render() {
    return (
      <nav className="f3">
        const <strong>{config.siteAuthorShort}</strong> = (
        <div className="ml4 ml0-ns dib-ns">
          <Link className="link dim dark-gray" to={prefixLink('/')} activeClassName="underline" onlyActiveOnIndex>blog</Link><span>,</span>
        </div>
        <div className="ml4 ml1-ns dib-ns">
          <Link className="link dim dark-gray" to={prefixLink('/readings/')} activeClassName="underline">readings</Link><span>,</span>
        </div>
        <div className="ml4 ml1-ns dib-ns">
          <Link className="link dim dark-gray" to={prefixLink('/about/')} activeClassName="underline">about me</Link>
        </div>
        ) &#61;&gt; &#123;
      </nav>
    );
  }
}

export default Nav;
