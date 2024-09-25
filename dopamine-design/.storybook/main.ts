// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/nextjs',
  stories: [
    '../components/**/*.mdx', 
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [    
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: 'tag',
  },
};

export default config;