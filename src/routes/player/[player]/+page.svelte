<script lang="ts">
	import type { PageData } from './$types';
  	export let data: PageData;
	console.log(data);

	import { slide } from 'svelte/transition';

</script>

<div class="flex flex-col justify-center max-w-screen min-h-screen">
	<div class="flex flex-col items-start">
		<div class="text-6xl font-semibold text-violet-500/50 flex">
			<h1>Hi </h1>
			<div class="relative w-fit">
				{#key data.query.player}
					<span class="text-violet-500 absolute w-fit pl-2" out:slide|local={{duration: 300}} in:slide={{duration: 300}}>{data.query.player}</span>
				{/key}
			</div>
		</div>
		<div class="text-3xl font-semibold text-violet-500/50 flex">
			<h2>You are level </h2>
			<div class="relative w-fit">
				{#key data.level}
					<span class="text-violet-500 absolute w-fit pl-2" out:slide|local={{duration: 300}} in:slide={{duration: 300}}>{data.level}</span>
				{/key}
			</div>
		</div>
	</div>
</div>