// YourComponent.stories.js

import React from 'react';
import { Nav } from './Nav';

// This default export determines where your story goes in the story list
export default {
  title: 'Example/Nav',
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const View = Template.bind({});

View.args = {
  props: {
    navList: [
      'Home',
      'Board',
      'MyPage',
      'Q&A'
    ]
  }
};
