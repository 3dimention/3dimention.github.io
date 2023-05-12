<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import type { ListOptions, ListTransform } from '$lib/container/list/list';
	import List from './list.svelte';
	import type { MockListElement } from './list.mocks';
	import { mockListElements } from './list.mocks';
	import { ListStyle } from '$lib/theme/theme';

	type ResultElement = MockListElement & { output: string };
	const customTransform: ListTransform<ResultElement, MockListElement> = (
		value: MockListElement,
		index: number,
		{ first, last }: ListOptions<MockListElement>
	) => {
		return { ...value, output: `${value.name} ${!first && !last ? value.id : ''}`.trim() };
	};
</script>

<Meta
	title="Containers/List"
	component={List}
	parameters={{ layout: 'centered' }}
	args={{ elements: mockListElements }}
/>

<Template let:args>
	<List {...args} />
</Template>

<Story name="Default" />
<Story name="Disc" args={{ style: ListStyle.disc, className: 'inline-block' }} />
<Story name="Decimal" args={{ style: ListStyle.decimal }} />
<Story name="Custom">
	<List
		style={ListStyle.none}
		elements={mockListElements}
		className="inline-flex flex-col items-center"
		transform={customTransform}
		let:element
	>
		<li data-testId={element.id}>{element.output}</li>
	</List>
</Story>
