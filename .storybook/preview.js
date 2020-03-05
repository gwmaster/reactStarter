import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
// less styles for all starterProject stories
import '../src/appsDevelop/starterProject/styles/index.less'

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});