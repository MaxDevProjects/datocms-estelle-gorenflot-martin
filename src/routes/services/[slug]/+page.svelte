<script lang="ts">
	import type { PageData } from './$houdini';
	import { onMount, tick } from 'svelte';

	import Header from '$lib/components/Header.svelte';
	import PostHeader from '$lib/components/PostHeader.svelte';
	import PostBody from '$lib/components/PostBody.svelte';
	import Head from '$lib/components/Head.svelte';
	import GenericBg from '$lib/components/GenericBg.svelte';GenericBg
	import Summary from '$lib/components/Summary.svelte';

	export let data: PageData;

	$: ({ ServiceContent } = data);
	$: ({ site, post } = $ServiceContent.data || {
		site: null,
		post: null,
	});

	$: headTags = post && site ? post.seo.concat(site.favicon) : [];

	onMount(async () => {
		const h2Elements = document.querySelectorAll('h2');
		const articleField = document.querySelector('#article-field');
		if (articleField){
			h2Elements.forEach((h2) => {
				h2.className = 'text-blue font-title';
				h2.style.fontSize = '1.5rem';
			const nextElement = h2.nextElementSibling;
			if (nextElement) {
				const sectionBlock = document.createElement('div');
				sectionBlock.className = 'bg-white m-4 p-4 rounded-lg';
				sectionBlock.appendChild(h2);
				sectionBlock.appendChild(nextElement);
				articleField.appendChild(sectionBlock);
			}
			});
		}
	})
</script>

<Head {headTags} />

<div class="h-screen">
	<Header />
	<section>
	<GenericBg/>
	<article class="mt-8">
		{#if post}
			{#if post.content}
			<h1 class="font-title w-full justify-center content-center text-blue text-4xl text-center">{post.title}</h1>
			<section class="lg:my-16 md:my-12 sm:my-8 lg:mx-16 md:mx-12 sm:mx-8 px-4 py-4" id="article-field">
				<PostBody structuredText={post.content} />
			</section>
			{/if}
		{/if}
	</article>
</section>
</div>