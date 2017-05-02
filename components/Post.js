import React from 'react';
import moment from 'moment';
import ReadNext from './ReadNext';

class Post extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <h3 className="f3">{post.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <ReadNext post={post} {...this.props} />
        <hr />
        <p>
          <em>Published {moment(post.date).format('D MMM YYYY')}</em>
        </p>
      </div>
    );
  }
}

Post.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default Post;
