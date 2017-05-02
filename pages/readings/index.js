import React from 'react';
import sortBy from 'lodash/sortBy';
import Helmet from 'react-helmet';
import access from 'safe-access';
import { config } from 'config';

class Readings extends React.Component {
  render() {
    const pageLinks = [];
    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'readings') {
        const title = access(page, 'data.title') || page.path;
        const body = access(page, 'data.body');

        pageLinks.push((
          <div key={title}>
            <h3 className="gray dim f3">{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: body }} />
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

Readings.propTypes = {
  route: React.PropTypes.object,
};

export default Readings;
