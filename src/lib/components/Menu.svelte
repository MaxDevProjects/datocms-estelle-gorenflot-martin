<script lang="ts">
	import Logo from "./Logo.svelte";
    import {onMount, afterUpdate} from "svelte";
    import {isOpenMenu, menuList} from '$lib/stores/store';
    
    export let size = 100;

</script>
<div class=" glass z-10 fixed h-screen top-0 end-0 px-16 flex flex-col justify-center text-center items-center w-full sm:w-1/2 lg:w-1/3 gap-4 end-0 lg:end-16 ">
    <h1 class="text-6xl text-blue font-title">Estelle Gorenflot Martin</h1>
    <Logo size="{size}"  on:click={() => isOpenMenu.set(false)}/>
    {#if $menuList.length > 0}
        <nav class="w-full">
            <ul class="flex flex-col gap-4">
                {#each $menuList as {title,slug,  enabled}, key }
                    {#if enabled}
                        <li class="w-full position-relative overflow-hidden">
                            <a href={slug}
                            on:click={() => isOpenMenu.set(false)}
                            class="
                                font-text 
                                text-blue 
                                text-2xl 
                                padding-4 
                                h-full 
                                w-full 
                                block 
                                relative

                                before:content-[''] 
                                before:w-1/2 
                                before:absolute 
                                before:translate-x-0
                                before:inset-0 
                                hover:before:from-white
                                hover:before:to-transparent 
                                hover:before:bg-gradient-to-l 

                                after:content-[''] 
                                after:absolute 
                                after:translate-x-full
                                after:inset-0 
                                after:w-1/2 
                                hover:after:from-white 
                                hover:after:to-transparent 
                                hover:after:bg-gradient-to-r
                                hover:transition-all 
                                hover:duration-1000 
                                hover:ease-in-out 
                                ">
                                <span class="relative z-10">{title}</span>
                            </a>
                        </li>
                        {/if}
                    {/each}
            </ul>
        </nav> 
    {/if}
    <div class="w-auto absolute bottom-0 right-0 overflow-hidden bg-white rounded p-2">
        <a href="https://www.linkedin.com/in/estelle-gorenflot-martin/" target="_blank" rel="noreferrer" class="padding-4 h-full w-full block relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
            <g transform="matrix(.424533 0 0 .424533 8.778874 17.021191)">
                <path d="M26.896 43.398v8.704H0V9.043h9.433v34.355zM31.062 22.9h9.066v29.2h-9.066zm4.534-14.505a5.26 5.26 0 0 1 5.259 5.257c0 2.906-2.356 5.255-5.26 5.255s-5.256-2.35-5.256-5.255a5.26 5.26 0 0 1 5.256-5.257m61.76 14.502h11.1l-11.9 13.5L108.207 52.1H96.825l-9.62-14.425h-.117V52.1h-9.063V9.04h9.063v25.735zm-52.212.017h8.702v4h.12c1.208-2.297 4.17-4.713 8.58-4.713 9.188 0 10.88 6.043 10.88 13.898v16H64.36V37.903c0-3.386-.062-7.735-4.716-7.735-4.713 0-5.436 3.687-5.436 7.493v14.43h-9.066V22.914zm82.407 11.194c.06-3.022-2.298-5.56-5.564-5.56-3.987 0-6.164 2.72-6.403 5.56zm7.674 12.93c-2.9 3.687-7.673 5.804-12.4 5.804-9.064 0-16.317-6.047-16.317-15.414s7.253-15.4 16.317-15.4c8.468 0 13.78 6.043 13.78 15.4v2.84h-21.032c.72 3.445 3.323 5.68 6.83 5.68 2.962 0 4.955-1.5 6.467-3.567zm20.27-17.072c-4.53 0-7.248 3.024-7.248 7.432 0 4.416 2.72 7.434 7.248 7.434 4.536 0 7.257-3.018 7.257-7.434-.001-4.408-2.72-7.432-7.257-7.432m15.6 22.12h-8.342v-3.87h-.118c-1.395 2.115-4.897 4.594-9.008 4.594-8.706 0-14.446-6.283-14.446-15.17 0-8.16 5.076-15.654 13.416-15.654 3.75 0 7.255 1.027 9.3 3.867h.118V9.04h9.07z"/><path d="M236.78 0h-52.107c-2.5 0-4.513 1.974-4.513 4.406v52.327c0 2.435 2.023 4.41 4.513 4.41h52.107c2.494 0 4.526-1.976 4.526-4.41V4.406C241.307 1.974 239.275 0 236.78 0z" fill="#0177b5"/><path d="M189.226 22.923h9.07v29.18h-9.07zm4.537-14.505a5.26 5.26 0 0 1 5.255 5.257 5.26 5.26 0 0 1-5.255 5.259 5.26 5.26 0 0 1-5.26-5.259 5.26 5.26 0 0 1 5.26-5.257m10.22 14.505h8.698V26.9h.12c1.2-2.294 4.17-4.713 8.58-4.713 9.184 0 10.88 6.044 10.88 13.9v16.005H223.2v-14.2c0-3.384-.062-7.737-4.713-7.737-4.72 0-5.443 3.686-5.443 7.492v14.435h-9.06v-29.18z" fill="#fff"/>
            </g>
        </svg>
    </div>
</div>
