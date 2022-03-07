import '@material-ui/core/styles/createPalette';
import '@material-ui/core/styles/createTypography';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

declare module '@material-ui/core/styles/createPalette' {
    export interface TypeText {
        tertiary?: string;
    }

    export interface PaletteElevation {
        e0: string;
        e0_5: string;
        e1: string;
        e2: string;
        e3: string;
        e4: string;
        e5: string;
        e6: string;
        e7: string;
        e8: string;
        e9: string;
        e10: string;
    }

    export interface PaletteOptions {
        elevation?: PaletteElevation;
    }

    export interface Palette {
        elevation?: PaletteElevation;
    }
}


declare module '@material-ui/core/styles/createTypography' {

    export interface TypographyOptions {
        textExtraSmall: CSSProperties;
        textSmall: CSSProperties;
        textMain: CSSProperties;
        titleSmall: CSSProperties;
        titleMain: CSSProperties;
        titleLarge: CSSProperties;
        titleExtraLarge: CSSProperties;
    }

    export interface Typography {
        textExtraSmall?: CSSProperties;
        textSmall?: CSSProperties;
        textMain?: CSSProperties;
        titleSmall?: CSSProperties;
        titleMain?: CSSProperties;
        titleLarge?: CSSProperties;
        titleExtraLarge?: CSSProperties;
    }
}