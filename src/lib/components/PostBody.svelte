<script lang="ts">
	import { fragment, graphql, type StructuredTextFragment } from '$houdini';

	import { StructuredText } from '@datocms/svelte';

	import { isBlock } from 'datocms-structured-text-utils';

	import Block from './StructuredText/nodes/Block.svelte';

	export let classes: string = '';

	export let structuredText: StructuredTextFragment;
	$: structuredTextFragment = fragment(
		structuredText,
		graphql(`
			fragment StructuredTextFragment on PostModelContentField {
				value
				blocks {
					__typename
					... on ImageBlockRecord {
						__typename
						id
						image {
							responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }) {
								base64
								src
								width
								height
								alt
								title
							}
						}
					}
				}
			}
		`)
	);
</script>

<div class=" {classes ? classes : ''}" style="transition: all 300ms ease-out;">
	<div class=" prose-lg prose-blue text-md w-full" id="main-content">
		<StructuredText data={$structuredTextFragment} components={[[isBlock, Block]]}/>
	</div>
</div>
