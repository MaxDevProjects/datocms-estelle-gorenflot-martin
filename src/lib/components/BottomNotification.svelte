<script lang="ts">
	export let title: string | null;
	export let slug: string | null;
</script>


<div
        class="
                font-text
                text-sm
                text-blue
                padding-4
                w-full
                block
                absolute
                bottom-0
                left-0
                content-center
                align-center
                z-20
                before:content-['']
                before:w-1/2
                before:absolute
                before:translate-x-0
                before:inset-0
                before:from-white
                before:to-transparent
                before:bg-gradient-to-l
                
                after:content-['']
                after:absolute
                after:translate-x-full
                after:inset-0
                after:w-1/2
                after:from-white
                after:to-transparent
                after:bg-gradient-to-r
                transition-all
                duration-1000
                ease-in-out
                py-4
                "
		>
			<a href="/blog/{slug}" class="relative z-10 block text-center px-8">{title}</a>
		</div>
