<script lang="ts">
    export let image: string = "https://source.unsplash.com/random/300x200";
    export let title: string = "https://source.unsplash.com/random/300x200";
    export let shortDescription: string = "https://source.unsplash.com/random/300x200";
    import CoverImage from '$lib/components/CoverImage.svelte';
    export let slug: string = "";
</script>
<div class="grid grid-rows-auto md lg:grid-rows-[.45fr_1fr_.10fr] sm:grid-rows-[.25fr_.65fr_.10fr] h-full max-h-screen rounded-lg glass justify-between ">
<CoverImage 
    coverImage={image}
    title={title}
    slug={slug}
    />
<div class="flex flex-col gap-4 p-4">
    <h3 class="font-title text-blue text-xl">{title}</h3>
    <p>{shortDescription}</p>
</div>
<div class="flex justify-start p-4">
    <a href="{slug}" class="flex items-center gap-2 justify-between border border-2 border-orange text-orange rounded-full px-6 py-1 w-fit">En savoir + 
        <span>
            <svg class="stroke-orange fill-orange" xmlns="http://www.w3.org/2000/svg" width="23" height="12" viewBox="0 0 46 24" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5147 1.39336L45.0607 10.9393C45.6464 11.5251 45.6464 12.4748 45.0607 13.0606L35.5147 22.6066C32.1903 25.931 38.4892 15.3895 40.3787 13.5C40.3787 13.5 3.5 13.5 3.5 12C3.5 10.5 40.3787 10.5 40.3787 10.5C38.4892 8.61048 32.1903 -1.93103 35.5147 1.39336Z" />
                <path d="M2 12C2 12.5523 1.55228 13 1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11C1.55228 11 2 11.4477 2 12Z"/>
            </svg>
        </span>
</a>
</div>
</div>

<style scoped>
    a {
        width: 75%;
        justify-content: start;
        transition: all 300ms ease-in-out;
    }
    a:hover>span>svg {
        fill: white;
        stroke: white;
    }
    a:hover,
    a:active {
        width: 100%;
        color: white;
        background: #FFBD59;
       justify-content: space-between;
    }
    a:active>span>svg {
        fill: white;
        stroke: white;
    }
    a:not(:hover):not(:active) {
        width: 75%;
    }
    a:not(:hover):not(:active)>span>svg {
        fill: #FFBD59;
        stroke: #FFBD59;
    }
</style>
