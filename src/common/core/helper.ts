import { Theme } from '@material-ui/core';
import { Color, Weight } from './types';

export function spacing(theme: Theme, value: number): number {
    if (isNaN(value)) {
        return undefined;
    }
    return theme.spacing(value);
}

export function getWeight(weight: Weight): number {
    switch (weight) {
        case 'regular':
            return 400;
        case 'medium':
            return 500;
        case 'semibold':
            return 600;
        case 'bold':
            return 700;
        default:
            return undefined;
    }
}

export function getColor(theme: Theme, color: Color): string {
    switch (color) {
        case 'primary':
            return theme.palette.primary.main;
        case 'secondary':
            return theme.palette.secondary.main;
        case 'textPrimary':
            return theme.palette.text.primary;
        case 'textSecondary':
            return theme.palette.text.secondary;
        case 'textTertiary':
            return theme.palette.text.tertiary;
        default:
            return color;
    }
}