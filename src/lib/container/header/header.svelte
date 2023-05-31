<!--
	Header Container Component
	@author kuakman <3dimentionar@gmail.com>
-->
<script lang="ts">
	import type { PageData } from '../../../routes/$types';
	import type { MouseEventHandler } from 'svelte/elements';

	import { Color, Size } from '$lib/theme/theme';
	import List from '$lib/container/list/list.svelte';
	import Button from '$lib/input/button/button.svelte';

	export let data: PageData;

	const onMenuClick: MouseEventHandler<EventTarget> = (event) => console.log(event);
</script>

<header class="flex flex-row flex-wrap items-center justify-between w-full font-modern">
	<div class="w-auto"><span class="logo block" /></div>
	<List className="flex flex-row items-end" elements={data.navigation.items} let:element>
		<li data-testId={`menu-${element.id}`}>
			<Button color={Color.transparent} spacing={Size.lg} onClick={onMenuClick}>
				{element.title.toUpperCase()}
			</Button>
		</li>
	</List>
</header>
