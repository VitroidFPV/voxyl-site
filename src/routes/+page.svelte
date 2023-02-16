<script>
	import AboutCard from "$components/AboutCard.svelte";
</script>

<svelte:head>
	<title>Voxyl Stats</title>
	<meta name="description" content="Track your BWP progress, the easy way!">
</svelte:head>

<div class="p-16">
	<div class="py-16 -mt-8">
		<h1 class="text-[100px] font-bold text-violet-500">Voxyl Stats</h1>
		<h2 class="dark:text-violet-200 text-violet-900/40 text-3xl">Track your BWP progress, the easy way!</h2>
	</div>
	
	<div class="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 gap-16">
		<AboutCard
			name={`
				<span class="text-violet-500">Stat</span> tracker for all your needs
			`}
		>
			<p class="text-lg">
				Check your stats, and compare them to other players. You can see total wins, finals, stars, and even a detailed breakdown of your stats per game mode!<br><br>
				You can also see the top leaderboards, and check server info and status
			</p>
		</AboutCard>
	
		<AboutCard
			name={`
				<span class="text-violet-500">Extensive</span> features and functionality
			`}
		>
			<p class="text-lg">
				Not only can you see your game stats, but you can also find and track your achievement progress, get info about every achievement, and even check the guilds and their players and stats.<br><br>
	
			</p>
		</AboutCard>
	
		<AboutCard
			name={`
				<span class="text-violet-500">Integration</span> ingame, and on Discord
			`}
		>
			<p class="text-lg">
				We have a discord bot you can invite to see info about other players: Rank, stars, wins finals, and much more all in one place in your own server.<br><br>There's also an ingame overlay to automatically show you basic info about your oponnent(s)
			</p>
		</AboutCard>
	
	</div>
</div>