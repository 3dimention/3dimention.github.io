<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Layout from './layout.svelte';
</script>

<Meta title="Containers/Layout" component={Layout} parameters={{ layout: 'centered' }} />

<Template let:args>
	<Layout {...args} />
</Template>

<Story name="Default" />
<Story name="Decorated">
	<Layout>Decorated Layout Content</Layout>
</Story>
