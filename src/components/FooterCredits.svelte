<script lang="ts">
	export let name: string
	export let link: string
	export let role: string

	import GitHubLink from '$components/GitHubLink.svelte'
</script>

<div class="flex justify-between w-full text-lg text-white font-medium my-1">
	<a href={link} class="hover:text-violet-500 duration-300">{name}</a>
	<div class="text-white/50 font-normal">{role}</div>
	<!-- <GitHubLink link={link} /> -->
</div>