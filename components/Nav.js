import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

class Nav extends Component {
  render() {
    return (
      <nav className="f3">
        <p>const <strong>{config.siteAuthorShort}</strong> = (
          <Link className="link dim dark-gray dib" to={prefixLink('/')} activeClassName="underline" onlyActiveOnIndex>blog</Link><span>, </span>
          <Link className="link dim dark-gray dib" to={prefixLink('/readings/')} activeClassName="underline">readings</Link><span>, </span>
          <Link className="link dim dark-gray dib" to={prefixLink('/about/')} activeClassName="underline">about me</Link>
        ) &#61;&gt; &#123;</p>
      </nav>
    );
  }
}

export default Nav;
