<script lang="ts">
	export let name: string;
</script>

<div>
	<h2 class="text-4xl font-bold mb-2">{@html name}</h2>
	<slot />
</div>