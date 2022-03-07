import { Card as MuiCard, fade, makeStyles, Theme, useTheme } from '@material-ui/core';
import React, { CSSProperties } from 'react';
import { getColor } from '../helper';
import { Color, Elevation } from '../types';

const useStyles = makeStyles<Theme, {
    color: string,
    colorHover: string,
    elevation: Elevation,
    elevationHover: Elevation
    elevationOpacity: number
}>(theme => ({
    root: props => ({
        color: props.color,
        backgroundColor: fade(theme.palette.elevation[`e${props.elevation}`], props.elevationOpacity),
        '&:hover': {
            color: props.colorHover,
            backgroundColor: fade(theme.palette.elevation[`e${props.elevationHover || props.elevation}`], props.elevationOpacity)
        },
        cursor: (props.elevationHover?.length > 0 || props.colorHover?.length > 0) ? 'pointer' : undefined
    })
}));

export interface CardProps {
    p?: number;
    color?: Color;
    colorHover?: Color;
    elevation?: Elevation;
    elevationHover?: Elevation;
    elevationOpacity?: number;
    width?: number | string;
    style?: CSSProperties;
    onClick?: () => void;
}

export const Card: React.FunctionComponent<CardProps> = ({
    p = 2,
    color,
    colorHover,
    elevation = '1',
    elevationHover,
    elevationOpacity = 1,
    width,
    style = {},
    onClick,
    children
}) => {
    const theme = useTheme();
    const classes = useStyles({
        color: getColor(theme, color),
        colorHover: getColor(theme, colorHover),
        elevation,
        elevationHover,
        elevationOpacity
    });
    return (
        <MuiCard
            style={{ padding: theme.spacing(p), width, ...style }}
            elevation={0}
            classes={classes}
            onClick={onClick}
        >
            {children}
        </MuiCard>
    );
};