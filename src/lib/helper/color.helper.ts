import type { ColorStates } from '$lib/theme/theme';
import { Color } from '$lib/theme/theme';

export const isColorState = (o: string | Record<ColorStates, string>): o is Record<ColorStates, string> =>
	typeof o !== 'string' && Boolean(o.active && o.focus && o.hover && o.normal);

export const isColor = (color: string | Color): color is Color => Object.keys(Color).includes(color);
