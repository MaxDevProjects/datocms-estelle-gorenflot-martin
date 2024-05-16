<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import PostPreview from '$lib/components/PostPreview.svelte';
    import generiqueBg from '$lib/assets/bg-sky.png';
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
    
    <div>
        <img src="{generiqueBg}" alt="fond flou"
        class='flex inset-0 w-screen h-screen fixed h-screen w-full z-[-1]'
        >
    </div>
    <div class="md:p-18 lg:p-24 p-12">
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

