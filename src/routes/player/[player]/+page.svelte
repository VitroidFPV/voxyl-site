<script lang="ts">
	import type { PageData } from './$types';
  	export let data: PageData;
	// console.log(JSON.stringify(data, null, 2));
	console.log(data)

	import { fade, fly } from 'svelte/transition';
	import InfoSmall from '$components/player/InfoSmall.svelte';

	let displayStats = [
		{name: "Wins", value: "wins", color: "text-lime-500"},
		{name: "Weighted", value: "weightedwins", color: "text-sky-500"},
		{name: "Kills", value: "kills", color: "text-rose-700"},
		{name: "Finals", value: "finals", color: "text-pink-600"},
		{name: "Beds", value: "beds", color: "text-purple-500"},
		{name: "Achievements", value: `achievementsAmount`, color: "text-yellow-500", goal: `achievementsGoal`},
	]

	let player: any

	$: {
		player = data.player;

		let totalWins = 0;
		for (const [key, value] of Object.entries(player.stats)) {
			// @ts-ignore
			totalWins += value.wins || 0;
		}
		player.wins = totalWins;

		let totalKills = 0;
		for (const [key, value] of Object.entries(player.stats)) {
			// @ts-ignore
			totalKills += value.kills || 0;
		}
		player.kills = totalKills;

		let totalFinals = 0;
		for (const [key, value] of Object.entries(player.stats)) {
			// @ts-ignore
			totalFinals += value.finals || 0;
		}
		player.finals = totalFinals;

		let totalBeds = 0;
		for (const [key, value] of Object.entries(player.stats)) {
			// @ts-ignore
			totalBeds += value.beds || 0;
		}
		player.beds = totalBeds;

		player.achievementsAmount = player.achievements.length;
		player.achievementsGoal = player.info.length
	}
</script>

<div class="flex flex-col max-w-screen h-full">
	<div class="flex md:flex-row justify-between flex-col md:px-16 px-6 pt-16 md:items-start items-center h-full w-full font-minecraft">
		<div class="transition-container object-contain w-72 mt-8 mr-8 md:mb-0 mb-8">
			{#key player}
				<img
					class=""
					src="https://visage.surgeplay.com/full/720/{player.uuid}"
					alt="Player Skin"
					transition:fade|local={{duration: 300}}
				/>
			{/key}
		</div>
		<div class="flex flex-col items-center">
			<div class="mb-8 w-96 items-center flex flex-col">
				<div class="transition-container">
					{#key player.lastLoginName}
						<div 
							class="md:text-6xl text-4xl mb-2"
							in:fly={{duration: 300, x: 20, delay: 100}}
							out:fly|local={{duration: 300, x: -20, delay: 100}}
						>
							{player.lastLoginName}
						</div>
					{/key}						
				</div>
				<div class="h-1 w-full bg-yellow-500 flex items-center justify-center">
					<div class="text-xl dark:bg-dark-800 bg-violet-100 px-2 mt-2 transition-colors duration-300">{player.level}</div>
				</div>
			</div>
			<div class="grid grid-cols-2 grid-rows-3 gap-y-12">
				<!-- #each for displayStats to display InfoSmall, with increasing delay value -->
				{#each displayStats as stat, i}
					<InfoSmall
						name={stat.name}
						value={player[stat.value]}
						color={stat.color}
						delay={i * 50 + 200}
						goal={player[stat.goal]}
					/>
				{/each}
			</div>
		</div>
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
</style>