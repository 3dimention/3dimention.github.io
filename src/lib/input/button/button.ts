import type { Alignments, Colors, Sizes } from '$lib/theme/theme';
import { BackgroundColors, FontSize, Margin, Padding, TextColors } from '$lib/theme/configuration';
import { Size } from '$lib/theme/theme';
import { isColorState } from '$lib/helper/color.helper';

export const backgroundColor = (color: Colors, disabled: boolean): string => {
	const value = BackgroundColors[color];
	return (isColorState(value) ? (disabled ? value.disabled : value.normal) : value) || BackgroundColors.primary.normal;
};

export const hoverColor = (color: Colors, disabled: boolean): string => {
	const value = BackgroundColors[color];
	return (isColorState(value) ? (disabled ? value.disabled : value.hover) : value) || BackgroundColors.primary.hover;
};

export const textColorByBgColor = (bgColor: Colors): string =>
	bgColor === 'white' ? TextColors.black : TextColors.white;

export const fontSize = (size: Sizes): string => FontSize[size] || FontSize.sm;

export const padding = (spacing: Sizes): string => Padding.horizontal[spacing] || Padding.horizontal[Size.sm];

export const iconPadding = (iconAlignment: Extract<Alignments, 'left' | 'right'>, spacing: Sizes): string =>
	iconAlignment === 'right' ? Margin.right[spacing] : Margin.left[spacing];
