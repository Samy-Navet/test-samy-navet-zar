export type Weight = 'inherit' | 'regular' | 'medium' | 'semibold' | 'bold';
export type Color = 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'textTertiary' | 'inherit';
export type Elevation = '0' | '0_5' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

export interface MarginProps {
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    m?: number;
}