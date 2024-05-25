<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import PostPreview from '$lib/components/PostPreview.svelte';
    import GenericBg from '$lib/components/GenericBg.svelte';
	import type { PageData } from './$houdini';

    export let data: PageData;
    
    $: ({BlogContent} = data)

    $: ({site, posts} = $BlogContent.data || {
        site: null,
        posts: []
    });

    $: headTags = site ? site.favicon : []    

</script>

<div class="w-full h-screen blog">
    <Header/>
    
    <GenericBg/>
    <div class="lg:py-16 md:py-12 sm:py-8 lg:px-16 md:px-12 sm:px-8 px-4 py-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
            {#each posts as post}
                <PostPreview
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    slug={post.slug}
                    excerpt={post.excerpt}
                />
            {/each}
        </div>
    </div>
</div>

