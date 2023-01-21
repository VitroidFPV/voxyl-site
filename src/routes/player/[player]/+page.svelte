<script lang="ts">
	import type { PageData } from './$types';
  	export let data: PageData;
	// console.log(JSON.stringify(data, null, 2));
	// console.log(data)
	console.log(Object.entries(data.player.stats).map(([key, value]) => key))

	import { fade, fly } from 'svelte/transition';
	import InfoSmall from '$components/player/InfoSmall.svelte';
	import GameCard from '$components/player/GameCard.svelte';

	let displayStats = [
		{name: "Wins", value: "wins", color: "text-lime-500"},
		{name: "Weighted", value: "weightedwins", color: "text-sky-500"},
		{name: "Kills", value: "kills", color: "text-rose-700"},
		{name: "Finals", value: "finals", color: "text-pink-500"},
		{name: "Beds", value: "beds", color: "text-violet-500"},
		{name: "Achievements", value: `achievementsAmount`, color: "text-yellow-500", goal: `achievementsGoal`},
	]

	let gamemodes = 
	[
		{name: "1v1 Bed Bridge Fight", value: "bridgesSingle"},
		{name: "2v2 Bed Bridge Fight", value: "bridgesDouble"},
		{name: "1v1 Comp Bed Bridge Fight", value: "compBridgeSingle"},
		{name: "1v1 Flat Fight", value: "flatFightSingle"},
		{name: "2v2 Ground Fight", value: "groundDouble"},
		{name: "Party Games", value: "partyGames"},
		{name: "1v1 Old Resource Collect", value: "resourceOldSingle"},
		{name: "1v1 Bed Rush", value: "bedRushSingle"},
		{name: "1v1 Resource Collect", value: "resourceSingle"},
		{name: "2v2 Bed Rush", value: "bedRushDouble"},
		{name: "2v2 Pearl fight", value: "pearlFightDouble"},
		{name: "Normal Block Sumo", value: "sumo"},
		{name: "2v2 Ladder Fight", value: "ladderFightDouble"},
		{name: "2v2 Resource Collect", value: "resourceDouble"},
		{name: "Obstacles", value: "obstacleSingle"},
		{name: "1v1 Void Fight", value: "voidSingle"},
		{name: "1v1 Ladder Fight", value: "ladderFightSingle"},
		{name: "Bedwars Normal Solo", value: "bedwarsNormalSingle"},
		{name: "2v2 Bow Fight", value: "bowFightDouble"},
		{name: "Miniwars 2s", value: "miniwarsDouble"},
		{name: "Bedwars Late Game 2s", value: "bedwarsLateDouble"},
		{name: "1v1 Pearl Fight", value: "pearlFightSingle"},
		{name: "2v2 Flat Fight", value: "flatFightDouble"},
		{name: "2v2 Stick Fight", value: "stickFightDouble"},
		{name: "2v2 Old Resource Collect", value: "resourceOldDouble"},
		{name: "1v1 Ground Fight", value: "groundSingle"},
		{name: "1v1 Stick Fight", value: "stickFightSingle"},
		{name: "Bedwars Normal 2s", value: "bedwarsNormalDouble"},
		{name: "2v2 Void Fight", value: "voidDouble"},
		{name: "Beta Block Sumo", value: "betaSumo"},
		{name: "Miniwars Solo", value: "miniwarsSolo"},
		{name: "1v1 Bow Fight", value: "bowFightSingle"},
		{name: "Bedwars Late Game Solo", value: "bedwarsLateSingle"},
		{name: "Overall Sumo Duels", value: "sumoduels"},
		{name: "1v1 Sumo Duels", value: "sumoDuelsSolo"},
		{name: "2v2 Sumo Duels", value: "sumoDuelsDouble"},
	]

	let player: any
	let description: string
	let title: string
	let prefix: string
	let color: string
	let image: string

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
		prefix = "Voxyl Stats • "
		title = `${player.lastLoginName} • ${player.level}⭐`
		description = 
			`
			Wins: ${player.wins}
			Weighted: ${player.weightedwins}
			Kills: ${player.kills}
			Finals: ${player.finals}
			Beds: ${player.beds}
			Achievements: ${player.achievementsAmount}/${player.achievementsGoal}
			`
		color = "#6B46C1"
	}


</script>

<svelte:head>
	<title>{prefix}{title}</title>
	<meta property="og:image" content="https://visage.surgeplay.com/full/720/{player.uuid}" />
	<meta name="twitter:card" content="summary_large_image">
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Voxyl Stats" />
	<meta property="og:title" content="{prefix}{title}" />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta content="https://vitroidfpv.com/" property="og:url" />
	<meta name="theme-color" content={color} />
</svelte:head>

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

	<div class="grid md:grid-cols-4 grid-cols-2 justify-between gap-4 gap-y-8 pt-16 h-full w-full font-minecraft">
		{#each gamemodes as gamemode}
			<GameCard
				name={gamemode.name}
				stats={player.stats[gamemode.value]}
			/>
		{/each}
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