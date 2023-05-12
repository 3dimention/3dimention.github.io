<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { FaAlignLeft, FaAlignRight } from 'svelte-icons/fa';
	import Button from './button.svelte';
	import { Color, HorizontalAlignment, Size } from '$lib/theme/theme';
</script>

<Meta title="Components/Button" component={Button} parameters={{ layout: 'centered' }} args={{ label: 'Button' }} />

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Default" />
<Story name="Primary" args={{ label: 'Primary', color: Color.primary }} />
<Story name="Secondary" args={{ label: 'Secondary', color: Color.secondary }} />
<Story name="Disabled" args={{ label: 'Disabled', color: Color.primary, disabled: true }} />
<Story name="Spacing" args={{ label: 'XL H Padding', spacing: Size.xl, color: Color.success }} />
<Story
	name="CustomClasses"
	args={{ label: 'Custom', className: 'm-sm border-4 border-secondary-normal', color: Color.black }}
/>
<Story name="SmallerFontSize" args={{ label: 'Small font size', size: Size.xs }} />
<Story name="IconLeft" args={{ label: 'Icon Left', icon: FaAlignLeft }} />
<Story name="IconRight" args={{ label: 'Icon Right', icon: FaAlignRight, iconAlignment: HorizontalAlignment.right }} />
<Story name="HandleClick" args={{ label: 'Handle Click', onClick: () => alert('Clicked!') }} />
