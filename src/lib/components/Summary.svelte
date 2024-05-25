<script lang="ts">
    export let summaryItems: { id: string, content: string }[];    
</script>


<div class="w-full" id="summary">
    <ul class="w-full flex flex-row gap-2 overflow-x-auto justify-around items-center">
        <li class="hover:glass p-2">
            <a class="block w-full font-text text-blue text-lg p-2" href="#main-content">
                Introduction
            </a>
        </li>
        {#each summaryItems as item}
            <li class="hover:glass p-2 w-full flex">
                <a class="block w-full font-text text-blue text-lg p-2" href="#{item.id}">
                    {item.content}
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
   .visible {
        display: block;
    }
    
   .hidden {
        display: none;
    }
</style>