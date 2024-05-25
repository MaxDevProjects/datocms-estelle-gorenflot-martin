<script lang="ts">
	import { fragment, graphql, ImageFragment } from '$houdini';
	import {onMount} from "svelte";

	import { Image } from '@datocms/svelte';

	export let coverImage: ImageFragment;
	export let title: string | null = null;
	export let slug: string | null = null;

	let isPostPage: boolean = false;
	onMount(() => {
		isPostPage = slug !== null || "";
	});

	$: coverImageFragment = fragment(
		coverImage,
		graphql(`
			fragment ImageFragment on FileField {
				responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }) {
					base64
					src
					width
					height
					alt
					title
				}
			}
		`)
	);
</script>

<div class="{isPostPage ? 'flex inset-0 h-full w-full rounded-md' : 'flex inset-0 w-screen h-screen fixed h-screen w-full z-[-1] blur-lg opacity-50 '}">
	<Image
		data={{
			...$coverImageFragment?.responsiveImage,
			alt: `Cover Image for ${title}`,
		}}
		class="{isPostPage ? 'w-full h-full rounded-md' : 'h-screen w-screen'}"
	/>
</div>