// YourComponent.stories.js

import React from 'react';
import { Home } from './Home';

// This default export determines where your story goes in the story list
export default {
  title: 'Example/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const View = Template.bind({});

View.args = {
  /* the args you need here will depend on your component */
};