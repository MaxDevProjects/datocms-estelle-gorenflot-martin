<script>
  import Intro from '$lib/components/Intro.svelte';
  import Burger from '$lib/components/Burger.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import {isOpenNewslettersModal, hasRessourses} from '$lib/stores/store';

</script>

{#if $isOpenNewslettersModal}
<Modal/>
{/if}
<header class="z-[1000] flex w-full mb-4 justify-between justify-items-center items-center sticky top-0 overflow-hidden px-8 glass from-white to-transparent bg-gradient-to-b ">
  <Intro/>

  <div class="flex nowrap justify-center items-center gap-2">
	<Burger/>
  {#if $hasRessourses}
	<button type="button" value="Ressources" class="border-2 border-orange font-text text-blue px-2 h-8 rounded-md" on:click={() => isOpenNewslettersModal.set(true)}>Ressources</button>
  {/if}
</div>    

</header>