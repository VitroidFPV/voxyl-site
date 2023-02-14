<script lang="ts">
	export let name: string
	export let link: string
	export let role: string

	import GitHubLink from '$components/GitHubLink.svelte'
</script>

<div class="flex justify-between w-full text-lg text-white font-medium">
	{name}
	<div class="text-white/50 font-normal">{role}</div>
	<GitHubLink link={link} />
</div>