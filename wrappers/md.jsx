import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import Post from '../components/Post';
import Page from '../components/Page';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    if (layout !== 'page') {
      template = <Post {...this.props} />;
    } else {
      template = <Page {...this.props} />;
    }

    return (
      <div>
        <Helmet title={`${post.title} - ${config.siteTitle}`} />
        {template}
      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
};

export default MarkdownWrapper;
