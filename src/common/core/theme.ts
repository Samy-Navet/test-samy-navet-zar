import { createMuiTheme, fade, ThemeOptions } from '@material-ui/core/styles';

const primaryMain = '#46CBE6';
const primaryLight = '#6BD5EB';
const primaryDark = '#37A7BE';

const secondaryMain = '#E65C73';
const secondaryLight = '#F692A3';
const secondaryDark = '#C84158';

const textPrimary = fade('#EFF1F6', 0.87);
const textSecondary = fade('#CBD2E6', 0.7);
const textTertiary = fade('#9EA5C7', 0.48);

const transparent = 'rgba(0,0,0,0)';

const elevationE0 = '#0C1117';
const elevationE0_5 = '#14171F';
const elevationE1 = '#181C24';
const elevationE2 = '#1C2029';
const elevationE3 = '#1F222B';
const elevationE4 = '#20252E';
const elevationE5 = '#252933';
const elevationE6 = '#272C37';
const elevationE7 = '#2C313B';
const elevationE8 = '#2B323F';
const elevationE9 = '#2D3542';
const elevationE10 = '#3A4252';

const actionSelected = elevationE5;
const actionHover = elevationE10;

const options: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: primaryMain,
            light: primaryLight,
            dark: primaryDark,
            contrastText: textPrimary,
        },
        secondary: {
            light: secondaryLight,
            main: secondaryMain,
            dark: secondaryDark,
            contrastText: textPrimary,
        },
        text: {
            primary: textPrimary,
            secondary: textSecondary,
            tertiary: textTertiary
        },
        background: {
            paper: elevationE1,
            default: transparent
        },
        action: {
            hover: actionHover,
            selected: actionSelected,
        },
        elevation: {
            e0: elevationE0,
            e0_5: elevationE0_5,
            e1: elevationE1,
            e2: elevationE2,
            e3: elevationE3,
            e4: elevationE4,
            e5: elevationE5,
            e6: elevationE6,
            e7: elevationE7,
            e8: elevationE8,
            e9: elevationE9,
            e10: elevationE10,
        },
    },
    typography: {
        htmlFontSize: 16,
        fontFamily: '"Saira Sans","Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: '6rem',
            lineHeight: 1.167,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: '3.75rem',
            lineHeight: 1.2,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.167,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
        },
        h4: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '2rem',
            lineHeight: '1rem'
        },
        h5: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: '1rem'
        },
        h6: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.6,
            letterSpacing: '0em',
        },
        subtitle1: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.75,
            letterSpacing: '0em',
        },
        subtitle2: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.57,
            letterSpacing: '0em',
        },
        body1: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0em',
        },
        body2: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.125rem',
            letterSpacing: '0em',
        },

        textExtraSmall: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '0.75rem',
            lineHeight: '0.5rem',
        },
        textSmall: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '0.875rem',
            lineHeight: '0.625rem',
        },
        textMain: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1rem',
            lineHeight: '0.75rem',
        },

        titleSmall: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1.25rem',
            lineHeight: '0.875rem',
        },
        titleMain: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1.5rem',
            lineHeight: '1rem',
        },
        titleLarge: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '2rem',
            lineHeight: '1.375rem',
        },
        titleExtraLarge: {
            fontFamily: '"Saira","Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '2.5rem',
            lineHeight: '1.75rem',
        }
    },
    shape: {
        borderRadius: 3
    }
}

export const theme = createMuiTheme(options);