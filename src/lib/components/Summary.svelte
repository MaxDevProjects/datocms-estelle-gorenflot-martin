<script lang="ts">
    import {onMount} from 'svelte';
    export let summaryItems: { id: string, content: string }[];
   
</script>

<aside class="h-full">
    <ul class="flex flex-col gap-2">
        <li class="hover:glass p-2">
            <a class="block w-full font-text text-blue text-lg p-2" href="#main-content">
                Introduction
            </a>
        </li>
        {#each summaryItems as item}
            <li class="hover:glass p-2">
                <a class="block w-full font-text text-blue text-lg p-2" href="#{item.id}">
                    {item.content}
                </a>
            </li>
        {/each}
    </ul>
</aside>

