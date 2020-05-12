import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import Layout from '../components/layout';
import avatar from './avatar.jpg';

class IndexRoute extends React.Component {
  render() {
    const items = [];
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={avatar} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">{items}</div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          github
          so
          linkedin
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
