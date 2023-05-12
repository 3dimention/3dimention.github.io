import type { Colors, Sizes } from '$lib/theme/theme';
import { Height, TextColors, Width } from '$lib/theme/configuration';
import { Size } from '$lib/theme/theme';
import { isColor, isColorState } from '$lib/helper/color.helper';

export const textColor = (color: Colors | string): string => {
	const value = isColor(color) ? TextColors[color] : color;
	return (isColorState(value) ? value.normal : value) || TextColors.black;
};

export const width = (size: Sizes): string => Width[size] || Width[Size.md];

export const height = (size: Sizes): string => Height[size] || Height[Size.md];
