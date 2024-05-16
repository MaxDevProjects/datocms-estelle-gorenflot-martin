<script lang="ts">
	import type { PageData } from './$houdini';
	import { onMount, tick } from 'svelte';

	import Header from '$lib/components/Header.svelte';
	import PostHeader from '$lib/components/PostHeader.svelte';
	import PostBody from '$lib/components/PostBody.svelte';
	import Head from '$lib/components/Head.svelte';
	import Summary from '$lib/components/Summary.svelte';

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
		h1OffsetHeight = h1Box?.offsetHeight || 0;	})

</script>

<Head {headTags} />

<Header />
<section class="grid grid-cols-1 md:grid-cols-[0.35fr_0.65fr] gap-2 px-4 overflow-hidden">

	<div class="h-[80vh]">
		<PostHeader
		title={post.title}
		coverImage={post.coverImage}
		date={post.date}
		author={post.author}
		/>
		<div class="overflow-y-scroll custom-scrollbar" style="height: calc(80vh - {h1OffsetHeight}px);">
			<Summary summaryItems={summaryItems}/>
		</div>
	</div>
	<article>
		{#if post}

			{#if post.content}
				<PostBody structuredText={post.content} />
			{/if}
		{/if}
	</article>
</section>
	
