import { makeStyles, PropTypes, Theme, Typography as MuiTypography, useTheme } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { getColor, getWeight, spacing } from '../helper';
import { Color, MarginProps, Weight } from '../types';

const useStyles = makeStyles<Theme, {
    color: string,
    colorHover: string,
    weight: number,
    lineClamp: number
} & MarginProps>(theme => ({
    root: props => ({
        marginTop: spacing(theme, props.mt || props.m),
        marginRight: spacing(theme, props.mr || props.m),
        marginBottom: spacing(theme, props.mb || props.m),
        marginLeft: spacing(theme, props.ml || props.m),
        color: props.color,
        fontWeight: props.weight,
        '&:hover': {
            color: props.colorHover
        }
    }),

    textExtraSmall: {
        ...theme.typography.textExtraSmall,
        '&$paragraph': {
            lineHeight: '1.5rem'
        }
    },
    textSmall: {
        ...theme.typography.textSmall,
        '&$paragraph': {
            lineHeight: '1.5rem'
        }
    },
    textMain: {
        ...theme.typography.textMain,
        '&$paragraph': {
            lineHeight: '1.5rem'
        }
    },

    titleSmall: {
        ...theme.typography.titleSmall,
        '&$paragraph': {
            lineHeight: '1.75rem'
        }
    },
    titleMain: {
        ...theme.typography.titleMain,
        '&$paragraph': {
            lineHeight: '1.8125rem'
        }
    },
    titleLarge: {
        ...theme.typography.titleLarge,
        '&$paragraph': {
            lineHeight: '2rem'
        }
    },
    titleExtraLarge: {
        ...theme.typography.titleExtraLarge,
        '&$paragraph': {
            lineHeight: '2.5rem'
        }
    },

    paragraph: {},

    lineClamp: props => ({
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': props.lineClamp,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }),
}));

export type TypefaceVariant =
    'textExtraSmall' | 'textSmall' | 'textMain' |
    'titleSmall' | 'titleMain' | 'titleLarge' | 'titleExtraLarge';

export type TypefaceWeight = Weight;
export type TypefaceColor = Color;

export interface TypefaceProps extends MarginProps {
    variant?: TypefaceVariant,
    weight?: TypefaceWeight;
    color?: TypefaceColor;
    colorHover?: TypefaceColor;

    className?: string;
    style?: React.CSSProperties;

    lineHeight?: number | string;
    lineClamp?: number;
    noWrap?: boolean;
    align?: PropTypes.Alignment;
    paragraph?: boolean;

    component?: React.ElementType;
    onClick?: (event: React.MouseEvent) => void;
}

export const Typography: React.FC<TypefaceProps> = ({
    variant = 'textMain',
    weight = 'regular',
    color = 'textPrimary',
    colorHover,

    className = '',
    style = {},

    mt, mr, mb, ml, m,

    lineHeight,
    lineClamp,
    noWrap = false,
    align,
    paragraph,

    component = 'p',
    onClick,
    children
}) => {
    const theme = useTheme();

    const classes = useStyles({
        color: getColor(theme, color),
        colorHover: getColor(theme, colorHover),
        weight: getWeight(weight),
        mt, mr, mb, ml, m, lineClamp
    });

    return (
        <MuiTypography
            className={classNames(className, classes.root, classes[variant], {
                [classes.paragraph]: paragraph,
                [classes.lineClamp]: lineClamp > 0
            })}
            style={{ lineHeight, ...style }} variant='inherit'
            component={component} align={align} noWrap={noWrap}
            onClick={onClick}
        >
            {children}
        </MuiTypography>
    );
};