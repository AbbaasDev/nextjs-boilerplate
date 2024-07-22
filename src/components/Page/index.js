import { BlockRenderer } from '../BlockRenderer';
import Layout from '../Layout';
export const Page = (props) => {
  const { blocks, layout, seo } = props;
  return (
    <Layout seo={seo} {...layout}>
      <BlockRenderer blocks={blocks} />
    </Layout>
  );
};

export default Page;
