<script lang="ts">
	export let name: string
	export let link: string
</script>

<div class="flex justify-between w-full text-lg text-white font-medium my-1">
	<a href={link} class="hover:text-violet-500 duration-300">{name}</a>
</div>