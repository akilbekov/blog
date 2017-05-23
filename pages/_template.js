import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../static/css/app.css';
import '../static/css/highlight.css';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="code center mw7-l pt4 ph4">
        <Nav {...this.props} />
        <div className="ph4 pv3 min-h-50">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
};

export default Template;
