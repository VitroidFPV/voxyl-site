<script lang="ts">
	import { fly } from 'svelte/transition';

	export let name: string;
	export let value: number;
	export let color: string;
	export let delay: number;
	export let goal: number;
</script>

<div class="pb-6 flex flex-col info-small">
	<div class="md:text-4xl text-2xl {color}">{name}:</div>
	<div class="transition-container">
		{#key value}
			<div class="font-minecraft md:text-xl text-lg flex info-small-text col-span-1 row-span-1" 
			in:fly={{duration: 300, x: 20, delay: delay}}
			out:fly|local={{duration: 300, x: -20, delay: delay}}
			>
			{value}

			{#if goal}
				<span class="text-gray-400">/{goal}</span>
			{/if}
		</div>
		{/key}
	</div>
</div>

<style>
	.transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
	}

	.info-small:nth-of-type(even) {
		align-items: end;
	}
</style>