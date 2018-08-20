import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="Dauren's personal blog">
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Dauren's personal blog" />
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default Layout;
