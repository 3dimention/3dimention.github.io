/**
 * Theme Configuration
 */
import type { Alignments, Axis, Colors, Sizes, StatefulColor, StatefulColors } from '$lib/theme/theme';

/** Sizes **/

export const Width: Record<Sizes, string> = { xs: 'w-xs', sm: 'w-sm', md: 'w-md', lg: 'w-lg', xl: 'w-xl' };
export const Height: Record<Sizes, string> = { xs: 'h-xs', sm: 'h-sm', md: 'h-md', lg: 'h-lg', xl: 'h-xl' };

export const Padding: Record<Axis | Exclude<Alignments, 'center' | 'middle'>, Record<Sizes, string>> = {
	both: { xs: 'p-xs', sm: 'p-sm', md: 'p-md', lg: 'p-lg', xl: 'p-xl' },
	horizontal: { xs: 'px-xs', sm: 'px-sm', md: 'px-md', lg: 'px-lg', xl: 'px-xl' },
	vertical: { xs: 'py-xs', sm: 'py-sm', md: 'py-md', lg: 'py-lg', xl: 'py-xl' },
	top: { xs: 'pt-xs', sm: 'pt-sm', md: 'pt-md', lg: 'pt-lg', xl: 'pt-xl' },
	bottom: { xs: 'pb-xs', sm: 'pb-sm', md: 'pb-md', lg: 'pb-lg', xl: 'pb-xl' },
	left: { xs: 'pl-xs', sm: 'pl-sm', md: 'pl-md', lg: 'pl-lg', xl: 'pl-xl' },
	right: { xs: 'pr-xs', sm: 'pr-sm', md: 'pr-md', lg: 'pr-lg', xl: 'pr-xl' }
};

export const Margin: Record<Axis | Exclude<Alignments, 'center' | 'middle'>, Record<Sizes, string>> = {
	both: { xs: 'm-xs', sm: 'm-sm', md: 'm-md', lg: 'm-lg', xl: 'm-xl' },
	horizontal: { xs: 'mx-xs', sm: 'mx-sm', md: 'mx-md', lg: 'mx-lg', xl: 'mx-xl' },
	vertical: { xs: 'my-xs', sm: 'my-sm', md: 'my-md', lg: 'my-lg', xl: 'my-xl' },
	top: { xs: 'mt-xs', sm: 'mt-sm', md: 'mt-md', lg: 'mt-lg', xl: 'mt-xl' },
	bottom: { xs: 'mb-xs', sm: 'mb-sm', md: 'mb-md', lg: 'mb-lg', xl: 'mb-xl' },
	left: { xs: 'ml-xs', sm: 'ml-sm', md: 'ml-md', lg: 'ml-lg', xl: 'ml-xl' },
	right: { xs: 'mr-xs', sm: 'mr-sm', md: 'mr-md', lg: 'mr-lg', xl: 'mr-xl' }
};

export const FontSize: Record<Sizes, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-md',
	lg: 'text-lg',
	xl: 'text-xl'
};

export const BorderWidth: Record<Sizes, string> = {
	xs: 'border-xs',
	sm: 'border-sm',
	md: 'border-md',
	lg: 'border-lg',
	xl: 'border-xl'
};

/** Colors **/

export const BackgroundColors: Record<Exclude<Colors, StatefulColors>, string> & StatefulColor = {
	inherit: 'bg-inherit',
	current: 'bg-current',
	transparent: 'bg-transparent',
	baseline: 'bg-baseline',
	primary: {
		normal: 'bg-primary-normal',
		active: 'active:bg-primary-active',
		focus: 'focus:bg-primary-focus',
		hover: 'hover:bg-primary-hover',
		disabled: 'bg-primary-disabled'
	},
	secondary: {
		normal: 'bg-secondary-normal',
		active: 'active:bg-secondary-active',
		focus: 'focus:bg-secondary-focus',
		hover: 'hover:bg-secondary-hover',
		disabled: 'bg-secondary-disabled'
	},
	success: 'bg-success',
	info: 'bg-info',
	warning: 'bg-warning',
	error: 'bg-error',
	black: 'bg-black',
	white: 'bg-white'
};

export const TextColors: Record<Exclude<Colors, StatefulColors>, string> & StatefulColor = {
	inherit: 'text-inherit',
	current: 'text-current',
	transparent: 'text-transparent',
	baseline: 'text-baseline',
	primary: {
		normal: 'text-primary-normal',
		active: 'active:text-primary-active',
		focus: 'focus:text-primary-focus',
		hover: 'hover:text-primary-hover',
		disabled: 'text-primary-disabled'
	},
	secondary: {
		normal: 'text-secondary-normal',
		active: 'active:text-secondary-active',
		focus: 'focus:text-secondary-focus',
		hover: 'hover:text-secondary-hover',
		disabled: 'text-secondary-disabled'
	},
	success: 'text-success',
	info: 'text-info',
	warning: 'text-warning',
	error: 'text-error',
	black: 'text-black',
	white: 'text-white'
};

export const BorderColors: Record<Colors, string> = {
	inherit: 'border-inherit',
	current: 'border-current',
	transparent: 'border-transparent',
	baseline: 'border-baseline',
	primary: 'border-primary-normal',
	secondary: 'border-secondary-normal',
	success: 'border-success',
	info: 'border-info',
	warning: 'border-warning',
	error: 'border-error',
	black: 'border-black',
	white: 'border-white'
};
