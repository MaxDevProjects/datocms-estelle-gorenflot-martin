<script lang="ts">
    import {isOpenNewslettersModal} from '$lib/stores/store';
</script>
<div
    class="glass fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-white before:opacity-50 overflow-auto font-text transition-all duration-300">
    <div class="w-full max-w-lg bg-transparent shadow-lg rounded-md p-6 relative z-[2] glass">
    <svg xmlns="http://www.w3.org/2000/svg"
    on:click={() => isOpenNewslettersModal.set(false)}
        class="w-3.5 cursor-pointer shrink-0 fill-blue hover:fill-orange float-right" viewBox="0 0 320.591 320.591">
        <path
        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
        data-original="#000000"></path>
        <path
        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
        data-original="#000000"></path>
    </svg>
    <div class="my-8 text-center">
        <h4 class="text-3xl text-blue font-title font-semibold">Subscribe to our Newsletter</h4>
        <p class="text-sm text-blue mt-4">Join thousands getting emails in their inbox.</p>
        <input type="email" placeholder="Enter Email"
        class="px-4 py-3 mt-6 ] text-blue w-full text-sm outline-blue rounded" />
    </div>
    <button type="button"
    class="px-6 py-2.5 min-w-[150px] w-full rounded text-white text-sm font-semibold border-none outline-none bg-orange hover:transition-all duration-150 hover:bg-blue">
    Yeah,thanks!
</button>
</div>
<svg xmlns="http://www.w3.org/2000/svg" class="w-full absolute bottom-0 object-cover z-[1]" viewBox="0 0 1200 396" fill="none">
    <path d="M1200 395.5V0C1200 0 1165.5 9.42363 1140.5 41C1115.44 72.6597 1107 119.5 1052 135.5C957 151.5 893.5 107 818 119.5C742.5 132 645 222 586.5 225C528 228 519 182 451.5 172.5C384 163 269.5 210.5 212.5 199.5C155.5 188.5 114.5 147 87 138.5C59.5 130 0 135 0 135V395.5H1200Z" fill="#FFBD59"/>
</svg>
</div>

