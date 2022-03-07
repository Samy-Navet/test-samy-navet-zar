import { MockedProvider } from '@apollo/client/testing';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../src/common/core/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    apolloClient: {
        MockedProvider
    }
}

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    )
];