<!--
	Single Page Application
	@author kuakman <3dimentionar@gmail.com>
-->
<script lang="ts">
	import Layout from '$lib/container/layout/layout.svelte';
	import Header from '$lib/container/header/header.svelte';
	import { navigation } from '$lib/data/navigation';
</script>

<Layout>
	<Header slot="header" data={{ navigation }} />
	<div class="flex flex-row flex-nowrap items-start justify-start m-lg w-full">
		<img alt="Profile" class="profile-picture rounded-full" src="/images/profile-pf.jpg" />
		<h1>Home - Content</h1>
	</div>
</Layout>
