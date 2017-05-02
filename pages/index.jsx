import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';

class SiteIndex extends React.Component {
  render() {
    const pageLinks = [];
    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
        const title = access(page, 'data.title') || page.path;

        pageLinks.push((
          <div key={title}>
            <h3 className="f3">
              <Link className="link dim gray" to={prefixLink(page.path)}>
                {title}
              </Link>
            </h3>
          </div>
        ));
      }
    });

    return (
      <div>
        <Helmet title={config.siteTitle} />
        {pageLinks}
      </div>
    );
  }
}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
};

export default SiteIndex;
