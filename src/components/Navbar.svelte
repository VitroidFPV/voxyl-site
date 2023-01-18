<script lang="ts">
	// @ts-ignore
	import ThemeToggle from "$components/ThemeToggle.svelte";
	import { goto } from "$app/navigation";

	let searched:string = "";

	async function search() {
		await goto(`/player/${searched}`);
	}

	async function enter(e:KeyboardEvent) {
		if (e.key === "Enter") {
			search();
		}
	}
</script>

<nav class="h-16 dark:bg-[#533a8a] bg-[#bca2fa] fixed w-full flex items-center px-2 text-xl duration-300">
	<div class="flex w-full ml-14 h-full items-center">
		<a href="/" class="bg-gradient-to-r from-current to-current bg-no-repeat bg-bottom bg-0w hover:bg-100w duration-300 transition-all font-semibold opacity-50 hover:opacity-100">Home</a>
		<div class="flex items-center">
			<input
				type="text"
				name="player"
				id="player"
				placeholder="Player"
				bind:value={searched}
				on:keydown={(e) => enter(e)}
				class="font-semibold ml-16 rounded-full h-10 dark:bg-white/20 bg-black/20 px-4
				placeholder:text-black/30 dark:placeholder:text-white/30 w-48 mr-3 opacity-75 duration-300 outline-none hover:opacity-100 focus-within:opacity-100"
			>
			<button on:click={search}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-8 w-8 opacity-50 hover:opacity-100 duration-300">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
			</button>

		</div>
	</div>
	<ThemeToggle/>
</nav>
<div class="max-w-full z-20 fixed origin-center h-fit md:scale-y-[0.34] md:top-0 top-14">
	<div>
		<svg
			class="max-w-full h-fit rotate-180"
			id="visual"
			viewBox="0 0 2400 300"
			width="2400"
			height="300"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1">
			<rect x="0" y="0" width="2400" height="300" class="hover:-translate-y-2 duration-300 fill-transparent" />
			<path
				d="M0 92L50 91.8C100 91.7 200 91.3 300 112.7C400 134 500 177 600 175.5C700 174 800 128 900 118.5C1000 109 1100 136 1200 151.8C1300 167.7
		1400 172.3 1500 158C1600 143.7 1700 110.3 1800 97.7C1900 85 2000 93 2100 114.8C2200 136.7 2300 172.3 2350 190.2L2400 208L2400 301L2350 301C2300
		301 2200 301 2100 301C2000 301 1900 301 1800 301C1700 301 1600 301 1500 301C1400 301 1300 301 1200 301C1100 301 1000 301 900 301C800 301 700 301
		600 301C500 301 400 301 300 301C200 301 100 301 50 301L0 301Z"
				fill=""
				stroke-linecap="round"
				stroke-linejoin="miter"
				class="duration-300 dark:fill-[#533a8a] fill-[#bca2fa]"
			/>
		</svg>
	</div>
</div>