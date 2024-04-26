<script lang="ts">
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import Alert from '$lib/components/Alert.svelte';
	import Analytics from '$lib/analytics.svelte';
	
</script>

<div class="min-h-screen">
	<main>
		<slot />
	</main>
</div>
<Analytics />
<Footer />
