<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Header from '$lib/container/header/header.svelte';
	import { navigation } from '$lib/data/navigation';
</script>

<Meta
	title="Containers/Header"
	component={Header}
	parameters={{ layout: 'centered' }}
	args={{ data: { navigation } }}
/>

<Template let:args>
	<Header {...args} />
</Template>

<Story name="Default" />
