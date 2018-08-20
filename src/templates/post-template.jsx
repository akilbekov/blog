import React from 'react';
import Helmet from 'react-helmet';
import PostTemplateDetails from '../components/PostTemplateDetails';

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle, url } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const { title: postTitle, description: postDescription, image, path } = post.frontmatter;
    const description = postDescription !== null ? postDescription : subtitle;

    return (
      <div>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={`${url}${path}`} />
          <meta property="og:image" content={`${url}${image.childImageSharp.resize.src}`} />
        </Helmet>
        <PostTemplateDetails {...this.props} />
      </div>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          email
          github
          rss
          so
          linkedin
        }
        menu {
          label
          path
        }
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        path
        tags
        date
        description
        image {
          childImageSharp {
            resize(width: 1200, height: 630) {
              src
            }
          }
        }
      }
    }
  }
`;
