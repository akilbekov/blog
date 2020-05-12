import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import avatar from '../pages/avatar.jpg';
import PostTemplateDetails from '../components/PostTemplateDetails';
import Layout from '../components/layout';

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle, url } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const { title: postTitle, description: postDescription, image, path } = post.frontmatter;
    const description = postDescription !== null ? postDescription : subtitle;

    return (
      <Layout>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={`${url}${path}`} />
          <meta
            property="og:image"
            content={image != null ? `${url}${image.childImageSharp.resize.src}` : avatar}
          />
        </Helmet>
        <PostTemplateDetails {...this.props} />
      </Layout>
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
