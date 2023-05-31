<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Page from '../routes/+page.svelte';
</script>

<Meta title="Pages/Portfolio" component={Page} />

<Template let:args>
	<Page {...args} />
</Template>

<Story name="Home" />
