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
	$: ({ allPosts, site, blog } = $HomeContent.data || {
		allPosts: [],
		site: null,
		blog: null
	});

	$: posts = allPosts;
	console.log(posts)
	$: headTags = blog && site ? blog.seo.concat(site.favicon) : [];
	$: articles = posts.map((post: object) => post);

	let currentIndex = 0;
    
    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % articles.length;
    }, 5000);

    $: CurrentArticle = articles[currentIndex]

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<Head {headTags} />

<HeroBanner/>

<div>
    <div>
		{#each articles as {title, slug}, index}    
		<div  in:fade|global={{ duration: index*5000, delay: 1000, easing: cubicInOut }}>
		  <BottomNotification title={CurrentArticle.title} slug={CurrentArticle.slug}/>
		</div>
	  {/each}
	</div>
</div>

<Menu size=132/>