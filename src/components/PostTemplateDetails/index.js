import React from 'react';
import { Link } from 'gatsby';
import Sidebar from '../Sidebar';
import moment from 'moment';
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-single__date">
              <em>Published {moment(post.frontmatter.date).format('D MMM YYYY')}</em>
            </div>
          </div>
          <div className="post-single__footer">{tagsBlock}</div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
