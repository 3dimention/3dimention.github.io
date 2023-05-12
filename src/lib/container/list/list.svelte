<!--
	List Container component
	@author kuakman <3dimentionar@gmail.com>
-->
<script lang="ts">
	import type { ListElement, ListTransform } from '$lib/container/list/list';
	import { ListStyle } from '$lib/theme/theme';
	import { listOptions } from '$lib/container/list/list';

	export let elements: ListElement[] = [];
	export let transform: ListTransform<$$Generic, $$Generic> = (element: $$Generic) => element;
	export let className = '';
	export let style = ListStyle.none;
</script>

<ul class="{style} {className}">
	{#each elements as element, ix}
		<slot element={transform(element, ix, listOptions(ix, elements), elements)}>
			<li>{element.id}</li>
		</slot>
	{/each}
</ul>
