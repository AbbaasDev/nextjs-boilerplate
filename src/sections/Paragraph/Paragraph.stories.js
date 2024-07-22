import * as React from 'react';

import Paragraph from './Paragraph';

export default {
  title: 'Sections/Paragraph',
  component: Paragraph
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = { content: 'NextJs Boilerplate' };
