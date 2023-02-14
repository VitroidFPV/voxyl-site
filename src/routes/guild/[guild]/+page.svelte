<script lang="ts">
	import type { PageData } from './$types';
  	export let data: PageData
	import { afterNavigate } from '$app/navigation';

	// when data has loaded, log it to the console
	// console.log(JSON.stringify(data, null, 2));
	// console.log(data.guild)

	// go through guild members, find the person with the role "OWNER" and get their stats.lastLoginName and uuid into an object
	let owner: object;
	data.guild.members.forEach(member => {
		if (member.role == "OWNER") {
			owner = {
				name: member.stats.lastLoginName,
				uuid: member.uuid
			}
		}
	})
	// console.log(owner)

	// the "time" key in the guild object is a unix timestamp in seconds of when the guild was created
	// get the amount of days since the guild was created
	let daysSinceCreated = Math.floor((Date.now() / 1000 - data.guild.time) / 86400)
	console.log(daysSinceCreated)

	let navigating: boolean = true
	afterNavigate(() => {
		navigating = false
	})
</script>

<div class="flex flex-col max-w-screen h-full p-16">
	<div class="font-minecraft">
		<div class="flex text-6xl text-amber-500">
			{data.guild.name}
		</div>
		<div class="text-lg mb-2 flex items-center">Owned by: 
			<span class="text-4xl text-violet-500 relative ml-2">{owner.name}</span>
			<img 
				src="https://visage.surgeplay.com/face/720/{owner.uuid}"
				alt="Player Skin"
				class="w-12 h-12 relative bottom-3 ml-4"
			>
		</div>
		<div class="text-lg">Members: 
			<span class="text-2xl text-violet-500 relative top-1.5 ml-2">{data.guild.members.length}</span>
			<span class="text-2xl dark:text-neutral-100 text-neutral-900 top-1.5 relative"> / 50</span>
		</div>
		<div class="text-lg">Total XP: 
			<span class="text-2xl text-violet-500 relative top-1.5 ml-2">{data.guild.xp}
			<span class="text-2xl dark:text-neutral-100 text-neutral-900"> xp</span>
		</div>
		<div class="text-lg">Created: 
			<span class="text-2xl text-violet-500 relative top-1.5 ml-2">{daysSinceCreated}
			<span class="text-2xl dark:text-neutral-100 text-neutral-900"> days ago</span>
		</div>
	</div>
</div>