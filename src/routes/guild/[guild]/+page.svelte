<script lang="ts">
	import type { PageData } from './$types';
  	export let data: PageData
	import { afterNavigate } from '$app/navigation';
	import PlayerCard from '$components/player/PlayerCard.svelte';

	let navigating: boolean = true
	afterNavigate(() => {
		navigating = false;
		// @ts-ignore
		guild = data.guild;
		sortPlayers();
	})

	console.log(data.guild)
	// console.log(JSON.stringify(data.guild, null, 2));

	// @ts-ignore
	let guild: Guild = data.guild

	interface Guild {
		success: boolean,
		id: number,
		name: string,
		desc: string,
		xp: number,
		ownerUUID: string,
		time: number,
		members: Members[],
	}

	interface Members {
		role: string,
		uuid: string,
		time: number,
		stats: Stats
	}

	interface Stats {
		success: boolean,
		lastLoginName: string,
		lastLoginTime: number,
		role: string,
		level: number,
		exp: number,
		weightedwins: number,
	}

	interface Owner {
		name: string,
		uuid: string
	}

	let owner: Owner;

	$: {
		guild.members.forEach(member => {
			if (member.role == "OWNER") {
				owner = {
					name: member.stats.lastLoginName,
					uuid: guild.ownerUUID
				}
			}
		})
	}
	// console.log(owner)

	let daysSinceCreated = 0
	$: {
		daysSinceCreated = Math.floor((Date.now() / 1000 - guild.time) / 86400)
	}
	console.log(daysSinceCreated)

	const sortOptions = ["name", "level"]
	const sortOrders = ["asc", "desc"]
	let sortOption: any = sortOptions[1]
	let sortOrder: any = sortOrders[1]

	function sortPlayers() {
		// sort by Option, then by Order
		// @ts-ignore
		guild.members.sort((a, b) => {
			if (sortOption == "name") {
				if (sortOrder == "asc") {
					return a.stats.lastLoginName.localeCompare(b.stats.lastLoginName)
				} else {
					return b.stats.lastLoginName.localeCompare(a.stats.lastLoginName)
				}
			} else if (sortOption == "level") {
				if (sortOrder == "asc") {
					return a.stats.level - b.stats.level
				} else {
					return b.stats.level - a.stats.level
				}
			}
		})
	}

	sortPlayers();

	// let top ten be the first 10 players in the array with their name and level
	let topPlayers = guild.members.slice(0, 5).map(player => {
		return {
			name: player.stats.lastLoginName,
			level: player.stats.level
		}
	})

	let prefix: string
	let title: string
	let description: string
	let color: string

	$: {
		prefix = "Voxyl Stats • "
		title = guild.name
		description = 
	`
${guild.desc}

Owner: ${owner.name}
${guild.members.length}/50 members
Total XP: ${guild.xp}
Created: ${daysSinceCreated} days ago

Top players: 
${topPlayers.map(player => player.name + " (" + player.level + ")").join("\n")}
	`
		color = "#6B46C1"
	}

</script>

<svelte:head>
	<title>{prefix}{title}</title>
	<!-- <meta property="og:image" content="https://visage.surgeplay.com/full/720/{player.uuid}" /> -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Voxyl Stats" />
	<meta property="og:title" content="{prefix}{title}" />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta content="https://vitroidfpv.com/" property="og:url" />
	<meta name="theme-color" content={color} />
</svelte:head>

<div class="flex flex-col max-w-screen h-full md:p-16 px-8">

{#await guild}
	<div class="flex flex-col items-center justify-center h-full">
		<div class="text-4xl text-violet-500">Loading...</div>
		<div class="text-2xl text-violet-500">Please wait...</div>
	</div>
{:then guild}
	<div class="font-minecraft">
		<div class="flex text-6xl text-amber-500">
			<!-- @ts-ignore -->
			{guild.name}
		</div>
		<p class="text-xl w-1/2 my-4">{guild.desc}</p>
		<div class="text-lg mb-4 flex items-center">Owned by: 
			<span class="hover:text-violet-400 duration-300 text-4xl text-violet-500 relative ml-2"><a href="/player/{owner.name}">{owner.name}</a></span>
			{#key owner.uuid}
				<img 
					src="https://visage.surgeplay.com/face/720/{owner.uuid}"
					alt="Player Skin"
					class="w-12 h-12 relative bottom-3 ml-4"
				>
			{/key}
		</div>
		{#key guild}
			<div class="text-lg">Members: 
				<span class="text-2xl text-violet-500 relative top-1.5 ml-2">{guild.members.length}</span>
				<span class="text-2xl dark:text-neutral-100 text-neutral-900 top-1.5 relative"> / 50</span>
			</div>
			<div class="text-lg">Total XP: 
				<span class="text-2xl text-violet-500 relative top-1.5 ml-2">{guild.xp}
				<span class="text-2xl dark:text-neutral-100 text-neutral-900"> xp</span>
			</div>
			<div class="text-lg">Created: 
				<span class="text-2xl text-violet-500 relative top-1.5 ml-2">{daysSinceCreated}
				<span class="text-2xl dark:text-neutral-100 text-neutral-900"> days ago</span>
			</div>
		{/key}
		<div class="text-3xl text-violet-500 mt-4">Members:</div>
		<div class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-4 gap-8">
			<!-- <PlayerCard 
				name="Velkri" 
				uuid="ad98bef7-f287-4a7c-8ff8-d3bad456e7a0" 
				level={6969}
			/> -->
			{#each guild.members as member}
				<PlayerCard 
					name={member.stats.lastLoginName} 
					uuid={member.uuid} 
					level={member.stats.level}
				/>
			{/each}
		</div>
	</div>
{/await}
</div>