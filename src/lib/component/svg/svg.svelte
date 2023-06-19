<!--
	Svg Component
	@author kuakman <3dimentionar@gmail.com>
-->
<script lang="ts">
	export let width = 100;
	export let height = 100;

	$: viewBox = `0 0 ${width} ${height}`;
</script>

<svg
	aria-description="Vector Graphics"
	{width}
	{height}
	{viewBox}
	xmlns="http://www.w3.org/2000/svg"
	xml:space="preserve"
>
	<slot />
</svg>
