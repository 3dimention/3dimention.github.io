<!--
	Icon Component
	@author kuakman <3dimentionar@gmail.com>
-->
<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { Colors, Sizes } from '$lib/theme/theme';

	import { Color, Size } from '$lib/theme/theme';
	import { height, textColor, width } from '$lib/component/icon/icon';

	export let icon: typeof SvelteComponent;
	export let size: Sizes = Size.md;
	export let color: Colors | string = Color.current;
	export let className = '';

	const baseClasses = `inline-block ${className}`.trim();
	const tc = textColor(color),
		w = width(size),
		h = height(size);
</script>

<span class="{baseClasses} {tc} {w} {h}">
	<svelte:component this={icon} />
</span>
