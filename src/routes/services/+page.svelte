<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    import GenericBg from '$lib/components/GenericBg.svelte'
    import PostPreview from '$lib/components/PostPreview.svelte';
    import Card from '$lib/components/Card.svelte'
    import Head from '$lib/components/Head.svelte'

    import  {onMount} from 'svelte';
	import type { PageData } from './$houdini';

    export let data: PageData;

    let services = [
        {
            coverImage: "https://source.unsplash.com/random/300x200/?3D+character&" + 3,
            title: "Mon service",
            shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

        },
        {
            coverImage: "https://source.unsplash.com/random/300x200/?3D+character&" + 2,
            title: "Mon service",
            shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

        },
        {
            coverImage: "https://source.unsplash.com/random/300x200/?3D+character&" + 1,
            title: "Mon service",
            shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        },
    ]
    
    $: ({ServicesContent} = data)

    $: ({site, services} = $ServicesContent.data || {
        site: null,
        services: []
    });

    $: headTags = site ? site.favicon : []    

    onMount(async () => {
        console.log(headTags);
        
    })
</script>
<Head {headTags} />
<Header/>
<div>
    <GenericBg/>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:py-16 md:py-12 sm:py-8 lg:px-16 md:px-12 sm:px-8 px-4 py-4">
        {#each services as service }
            <Card 
                image="{service?.coverImage}"
                title="{service?.title}"
                shortDescription="{service?.seoSettings?.description}"
                />
                <!-- slug="/services/{service?.slug}" -->
        {/each}
    </div>
</div>