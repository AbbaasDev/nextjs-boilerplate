import Page from '../components/Page';
import client from '../../lib/apollo/client';
import { ALL_PAGES_NODE_URI_QUERY, PAGE_QUERY } from '../queries/index';
import { cleanAndTransformBlocks } from '../utils/cleanAndTransformBlocks';

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: ALL_PAGES_NODE_URI_QUERY,
    fetchPolicy: 'no-cache'
  });

  const paths = [...data?.pages?.nodes]
    .filter((page) => !['/'].includes(page?.uri))
    .map((page) => {
      return {
        params: {
          uri: page?.uri?.substring(1, page?.uri?.length - 1).split('/')
        }
      };
    });

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps = async (context) => {
  try {
    const uri = context.params?.uri ? `/${context.params.uri.join('/')}/` : '/';

    const pageQuery = await client.query({
      query: PAGE_QUERY,
      variables: {
        uri
      },
      fetchPolicy: 'no-cache'
    });

    const [page] = await Promise.all([pageQuery]);
    const nodeByUri = page?.data?.nodeByUri;
    const sitewideSettings = page?.data?.acfOptionsSitewideSettings?.sitewideSettings;

    if (!nodeByUri || Object.values(nodeByUri).length === 1) {
      return { notFound: true, props: {} };
    }
    let blocks = nodeByUri?.blocks ? await cleanAndTransformBlocks(nodeByUri?.blocks) : [];
    return {
      props: {
        pageSchema: nodeByUri.pageSchema || {},
        seo: nodeByUri?.seo || '',
        title: nodeByUri?.title || '',
        blocks: blocks,
        layout: sitewideSettings
      },
      revalidate: false
    };
  } catch (error) {
    console.error('Error fetching static props:', error);
    throw error;
  }
};

export default Page;
