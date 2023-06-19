<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Svg from './svg.svelte';
</script>

<Meta title="Components/SVG" component={Svg} parameters={{ layout: 'centered' }} />

<Template let:args>
	<Svg {...args} />
</Template>

<Story name="Default" />
<Story name="Custom">
	<Svg width={320} height={320}>
		<circle cx="160" cy="160" r="10" color="red" />
	</Svg>
</Story>
