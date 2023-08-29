<script lang="ts">
	export let name: string;
	export let uuid: string;
	export let level: number;
</script>

<a href="/player/{name}"  target="_blank" rel="noreferrer">
	<div class="dark:bg-violet-500 bg-violet-900 !bg-opacity-10 hover:!bg-opacity-20 border-2 border-transparent hover:border-violet-500 group hover:-translate-y-1
		rounded-2xl w-full h-full duration-500 p-4 relative shadow-lg"
	>
		<div class="rounded-[4rem] float-left dark:border-dark-800 border-violet-100 dark:bg-dark-800 bg-violet-100
		border-[10px] group-hover:rounded-2xl duration-500 transition-all overflow-hidden absolute w-fit h-fit
		-top-6 -left-6">
			<img
				src="https://visage.surgeplay.com/face/720/{uuid}"
				class="h-16 w-16"
				alt="Player Skin"
			>
		</div>
		<div class="flex flex-col items-start pl-14">
			<div class="text-xl font-minecraft dark:text-neutral-100 text-neutral-900 w-full tracking-[-0.06em]">
				{name}
			</div>
			<div class="text-lg font-minecraft dark:text-yellow-500">
				{level} <span class="relative bottom-3">⭐</span>
			</div>
		</div>
	</div>
</a>