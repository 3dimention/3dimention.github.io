<!--
	Button Component
	@author kuakman <3dimentionar@gmail.com>
-->
<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import type { Alignments, Sizes } from '$lib/theme/theme';

	import { Color, Size } from '$lib/theme/theme';
	import Icon from '$lib/component/icon/icon.svelte';
	import {
		backgroundColor,
		hoverColor,
		textColorByBgColor,
		padding,
		fontSize,
		iconPadding
	} from '$lib/input/button/button';

	export let label = 'Label';
	export let name = '';
	export let className = '';
	export let color: Color = Color.primary;
	export let size: Exclude<Sizes, 'lg' | 'xl'> = 'sm';
	export let spacing: Size = Size.sm;
	export let disabled = false;
	export let icon: ComponentType<Icon> | null = null;
	export let iconAlignment: Extract<Alignments, 'left' | 'right'> = 'left';
	export let onClick: MouseEventHandler<EventTarget> = () => void 0;

	const baseClasses = `inline-flex flex-row items-center rounded-full py-xs ${className}`.trim();
	const bgc = backgroundColor(color, disabled),
		hvc = hoverColor(color, disabled),
		tc = textColorByBgColor(color),
		fs = fontSize(size),
		p = padding(spacing),
		ip = icon ? iconPadding(iconAlignment, spacing) : null;
</script>

<button aria-disabled={disabled} {disabled} class="{baseClasses} {bgc} {tc} {hvc} {p} {fs}" {name} on:click={onClick}>
	{#if icon && iconAlignment === 'left'}<Icon {icon} color={tc} {size} />{/if}
	<span class={ip}><slot>{label}</slot></span>
	{#if icon && iconAlignment === 'right'}<Icon {icon} color={tc} {size} />{/if}
</button>

<style>
	button {
		/** a11y-compliant **/
		min-height: 44px;
	}
</style>
