import Paragraph from '../../sections/Paragraph/Paragraph';

export const BlockRenderer = ({ blocks = [] }) => {
  return blocks?.map((block) => {
    switch (block?.name) {
      case 'core/block': {
        if (block.innerBlocks.length) {
          return <BlockRenderer key={block?.id} blocks={block.innerBlocks} />;
        }
        break;
      }
      case 'core/paragraph': {
        return <Paragraph key={block?.id} {...block?.attributes} />;
      }
      default: {
        return null;
      }
    }
  });
};
