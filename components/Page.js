import React from 'react';

class Page extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <h3 className="f3 gray">{post.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    );
  }
}

Page.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default Page;
