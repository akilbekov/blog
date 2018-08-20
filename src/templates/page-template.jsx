import React from 'react';
import Helmet from 'react-helmet';
import PageTemplateDetails from '../components/PageTemplateDetails';
import avatar from '../pages/avatar.jpg';

class PageTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const page = this.props.data.markdownRemark;
    const { title: pageTitle, description: pageDescription } = page.frontmatter;
    const description = pageDescription !== null ? pageDescription : subtitle;

    return (
      <div>
        <Helmet>
          <title>{`${pageTitle} - ${title}`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={avatar} />
        </Helmet>
        <PageTemplateDetails {...this.props} />
      </div>
    );
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
          rss
          so
          linkedin
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
