<script lang="ts">
	import '../app.css';

	import { onDestroy } from "svelte";
	import Footer from '$lib/components/Footer.svelte';
	import Analytics from '$lib/analytics.svelte';
	import {isOpenMenu} from '$lib/stores/store';
	import Menu from '$lib/components/Menu.svelte';	
</script>

<div class="min-h-screen">
	{#if $isOpenMenu}
		<Menu/>
	{/if}
	<main>
		<slot />
	</main>
</div>
<Analytics />
<Footer />
