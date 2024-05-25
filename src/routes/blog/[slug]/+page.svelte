<script lang="ts">
	import type { PageData } from './$houdini';
	import { onMount, tick } from 'svelte';
	import { fly } from 'svelte/transition';

	import Header from '$lib/components/Header.svelte';
	import PostHeader from '$lib/components/PostHeader.svelte';
	import PostBody from '$lib/components/PostBody.svelte';
	import Head from '$lib/components/Head.svelte';
	import Summary from '$lib/components/Summary.svelte';

	$: y = 0;
	$: innerHeight = 0;

	export let data: PageData;

	$: ({ PostContent } = data);
	$: ({ site, post, morePosts } = $PostContent.data || {
		site: null,
		post: null,
		morePosts: []
	});

	$: headTags = post && site ? post.seo.concat(site.favicon) : [];
	let summaryItems: { id: string, content: string }[] = [];
	let h1OffsetHeight: number;

	let summaryVisible = true;
    let summaryCollapsed = false;
    let summaryTop = 0;

    function toggleSummary() {
        summaryVisible = !summaryVisible;
        summaryCollapsed = !summaryCollapsed;
    }

    function handleScroll() {
        const bodyScroll = summaryTop + window.scrollY;
        
        if (bodyScroll <= 500) {
            summaryVisible = true;
            summaryCollapsed = false;
        } else {
            summaryVisible = false;
            summaryCollapsed = true;
        }
    }

    let headerOffsetHeight: number;
	
	onMount(async () => {
		let  header = document.querySelector('header');
		headerOffsetHeight = header?.offsetHeight + 16 || 0;
		const all_h2 = document.querySelectorAll("h2");
		Array.from(all_h2).forEach((h2, index) => {
			h2.id = `item-${index + 1}`;
		});
		summaryItems = Array.from(all_h2).map((h2) => ({
			'content': h2.textContent || '',
			'id': h2.id
		}));
		let h1Box = document.querySelector('#the-title');
		h1OffsetHeight = h1Box?.offsetHeight || 0;		
	})

	console.log(y);
	$: postBodyClasses = y >= innerHeight -headerOffsetHeight ? 'bg-white px-12 py-4' : 'lg:my-16 md:my-12 sm:my-8 lg:mx-16 md:mx-12 sm:mx-8 px-4 py-4 glass';

</script>

<Head {headTags} />
<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight}/>
<div class="fixed top-0 z-[10000]">{y}===>{innerHeight}</div>
<div class="h-screen">
	<Header />
	<section>
	<article class="relative">
		<PostHeader
		title={post?.title}
		coverImage={post?.coverImage}
		date={post?.date}
		author={post?.author}
		/>
		{#if post}
			{#if post.content}
				{#if y >= innerHeight + headerOffsetHeight}
					<div class="overflow-y-scroll sticky top-0 bg-white z-10" transition:fly={{ y: -200, duration: 250 }}>
						<Summary summaryItems={summaryItems}/>
					</div>
				{/if}
				<PostBody structuredText={post.content} classes={postBodyClasses}/>
			{/if}
		{/if}
	</article>
</section>
</div>