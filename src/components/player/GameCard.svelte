<script lang="ts">
	export let name: string
	export let stats: Object

	// console.log(name, JSON.stringify(stats))

</script>

{#if stats !== undefined && Object.values(stats).some((value) => value !== 0)}
	<div class="flex flex-col info-small pl-2 border-l-4 border-violet-500 pt-2 h-fit">
		<div class="text-xl mb-2">{name}:</div>
		<div class="grid grid-cols-2 grid-rows-2">
			{#if stats !== undefined}
				{#each Object.entries(stats) as [name, value]}
					<div class="transition-container mt-2">
						{#if value !== 0}
							<div>
								<div class="font-minecraft text-lg stat-{name} capitalize">
									{name}:
								</div>
								<div class="font-minecraft text-base">
									{value}
								</div>
							</div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</div>
{/if}

<style lang="postcss">
	.stat-beds {
		@apply text-violet-500
	}

	.stat-kills {
		@apply text-rose-700
	}

	.stat-finals {
		@apply text-pink-500
	}

	.stat-wins {
		@apply text-lime-500
	}

</style>