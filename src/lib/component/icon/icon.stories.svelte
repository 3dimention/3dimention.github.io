<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Icon from './icon.svelte';
	import { FaApple as defaultIcon, FaSearch } from 'svelte-icons/fa';
	import { Color, Size } from '$lib/theme/theme';
</script>

<Meta title='Components/Icon'
	component={Icon}
	parameters={{ layout: 'centered' }}
	args={{ icon: defaultIcon }} />

<Template let:args>
	<Icon {...args} />
</Template>

<Story name='Default' />
<Story name='With Color' args={{ color: Color.primary }} />
<Story name='With Size' args={{ icon: FaSearch, size: Size.lg }} />