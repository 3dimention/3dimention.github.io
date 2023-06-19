<!--
	Page Layout
	@author: kuakman <3dimentionar@gmail.com>
-->
<script>
	import '$lib/theme/theme.css';
</script>

<main class="m-auto">
	<slot name="header" />
	<div class="flex flex-row flex-wrap place-content-center text-white font-sans">
		<slot>Page Content</slot>
	</div>
</main>

<style>
	main {
		max-width: 1280px;
	}
</style>
