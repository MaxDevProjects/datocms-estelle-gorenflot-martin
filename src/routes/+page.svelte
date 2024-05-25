<script lang="ts">
	import type { PageData } from './$houdini';

	import Head from '$lib/components/Head.svelte';
	import HeroBanner from '$lib/components/HeroBanner.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import BottomNotification from '$lib/components/BottomNotification.svelte';
	
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import {onDestroy} from 'svelte';
	
	
	export let data: PageData;

	$: ({ HomeContent } = data);
	$: ({  site, blog ,allPosts } = $HomeContent.data || {
		blog: null,
		site: null,
		allPosts: []
	});

	$: articles = allPosts.map((post: object) => post);
	$: headTags = blog && site ? blog.seo.concat(site.favicon) : [];
	
	let currentIndex = 0;
    
    let interval = setInterval(() => {
		console.log(articles);
		
        currentIndex = (currentIndex + 1) % articles.length;
    }, 5000);

    $: CurrentArticle = articles[currentIndex]

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<Head {headTags} />

<div  in:fade={{ duration: 600 }}  out:fade={{ delay: 200, duration: 600 }}>
	<HeroBanner/>
</div>
	
	<div>
		<div>
			{#each articles as article, index}    
		<div  in:fade|global={{ duration: index*5000, delay: 1000, easing: cubicInOut }}>
		  <BottomNotification title={CurrentArticle.title} slug={CurrentArticle.slug}/>
		</div>
	  {/each}
	</div>
</div>

<div in:fade={{ delay: 500, duration: 300 }} out:fade={{ duration: 400 }}>
	<Menu size=132/>
</div>