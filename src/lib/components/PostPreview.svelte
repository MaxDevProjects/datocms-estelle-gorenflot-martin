<script lang="ts">
	import type { AuthorFragment, ImageFragment } from '$houdini';

	import Avatar from './Avatar.svelte';
	import Date from './Date.svelte';
	import CoverImage from './CoverImage.svelte';

	export let title: string | null;
	export let coverImage: ImageFragment | null = null;
	export let date: string | null;
	export let excerpt: string | null;
	export let author: AuthorFragment | null = null;
	export let slug: string | null;
</script>

<div class="glass">
	{#if coverImage}
		<div>
			<CoverImage slug={slug} title={title} coverImage={coverImage} />
		</div>
	{/if}
	<div class="px-2">

		<h3 class="text-lg font-title pt-2 leading-snug text-blue">
			<a href={`/blog/${slug}`} class="hover:underline">{title}</a>
		</h3>
		{#if date}
		<div class="text-sm font-text text-orange py-2">
			<Date dateString={date} />
		</div>
		{/if}
		<!-- <p class="text-lg leading-relaxed mb-4">{excerpt}</p>
			{#if author}
			<Avatar {author} />
			{/if} -->
		</div>
	</div>
