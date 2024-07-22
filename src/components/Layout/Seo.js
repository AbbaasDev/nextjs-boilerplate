import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

/**
 * Custom SEO component
 *
 * Used to seo meta tags for each page
 *
 * @param {Object} seo Seo.
 * @param {string} uri Page URI.
 * @see https://www.npmjs.com/package/next-seo
 *
 * @returns {JSX.Element}
 *
 */
function Seo({
  seo: {
    title = '',
    metaDesc = '',
    opengraphDescription = '',
    opengraphTitle = '',
    opengraphImage = { sourceUrl: '' },
    opengraphSiteName = ''
  } = {},
  uri
}) {
  const currentLocation = typeof window !== 'undefined' ? window.location.origin : null;
  const opengraphUrl =
    (process.env.NEXT_PUBLIC_CANONICAL_URL
      ? process.env.NEXT_PUBLIC_CANONICAL_URL
      : currentLocation) + uri;

  return (
    <NextSeo
      title={title}
      description={opengraphDescription || metaDesc}
      canonical={opengraphUrl}
      noindex={process.env.NEXT_PUBLIC_NEXTJS_SITE_URL !== process.env.NEXT_PUBLIC_CANONICAL_URL} // metaRobotsNoindex}
      nofollow={process.env.NEXT_PUBLIC_NEXTJS_SITE_URL !== process.env.NEXT_PUBLIC_CANONICAL_URL} // metaRobotsNofollow}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: opengraphUrl,
        title: opengraphTitle,
        description: opengraphDescription,
        images: [
          {
            url: opengraphImage?.sourceUrl,
            width: 1280,
            height: 720
          }
        ],
        site_name: opengraphSiteName
      }}
      /* twitter={{
        handle: '@Codeytek',
        site: '@Codeytek',
        cardType: 'summary_large_image'
      }} */
    />
  );
}

Seo.propTypes = {
  seo: PropTypes.shape({
    title: PropTypes.string,
    metaDesc: PropTypes.string,
    opengraphDescription: PropTypes.string,
    opengraphTitle: PropTypes.string,
    opengraphImage: PropTypes.shape({
      sourceUrl: PropTypes.string
    }),
    opengraphSiteName: PropTypes.string
  }),
  uri: PropTypes.string.isRequired
};

export default Seo;
