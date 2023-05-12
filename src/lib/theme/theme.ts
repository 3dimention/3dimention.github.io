export enum Color {
	inherit = 'inherit',
	current = 'current',
	transparent = 'transparent',
	baseline = 'baseline',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	info = 'info',
	warning = 'warning',
	error = 'error',
	black = 'black',
	white = 'white'
}
export type Colors = keyof typeof Color;

export type StatefulColors = 'primary' | 'secondary';
export type StatefulColor = Record<Extract<Colors, StatefulColors>, Record<ColorStates, string>>;

export enum ColorState {
	active = 'active',
	focus = 'focus',
	hover = 'hover',
	normal = 'normal',
	disabled = 'disabled'
}
export type ColorStates = keyof typeof ColorState;

export enum Size {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl'
}
export type Sizes = keyof typeof Size;

export enum Thickness {
	thin = 1,
	normal,
	thick
}
export type Thicknesses = keyof typeof Thickness;

export enum ListStyle {
	none = 'list-none',
	disc = 'list-disc',
	decimal = 'list-decimal'
}
export type ListStyles = keyof typeof ListStyle;

export type Axis = 'both' | 'horizontal' | 'vertical';
export enum HorizontalAlignment {
	left = 'left',
	center = 'center',
	right = 'right'
}
export enum VerticalAlignment {
	top = 'top',
	middle = 'middle',
	bottom = 'bottom'
}
export type Alignments = keyof typeof HorizontalAlignment | keyof typeof VerticalAlignment;
