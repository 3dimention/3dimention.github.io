<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import List from './list.svelte';
	import { mockListElements, customTransform } from './list.mocks';
	import { ListStyle } from '$lib/theme/theme';
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
<Story name="Disc" args={{ style: ListStyle.disc }} />
<Story name="Decimal" args={{ style: ListStyle.decimal }} />
<Story name="Custom">
	<List
		elements={mockListElements}
		className="inline-flex flex-col items-center"
		transform={customTransform}
		let:element
	>
		<li data-testId={element.id}>{element.output}</li>
	</List>
</Story>
