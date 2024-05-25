<script lang="ts">
  import { onMount } from 'svelte';
  let isScrolled = false;
  let scrollPosition = 0;
  let smooth = 0;
  onMount(() => {
    document.body.addEventListener('scroll', () => {
      smooth = -0.009
      scrollPosition = document.body.scrollTop;
      isScrolled = scrollPosition > 0;
      
    });
  });
</script>

<h1 id="the-title" class="font-title h-screen w-full justify-center content-center text-blue text-4xl text-center" style="transform: scale({isScrolled ? 1 - ((scrollPosition * smooth)) : 1}); opacity: {isScrolled ? 1 - ((scrollPosition *  -smooth / 2)) : 1}; ">
  <slot />
</h1>