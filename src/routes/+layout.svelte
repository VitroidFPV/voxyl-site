<script>
	import "../app.css";
	// @ts-ignore
	import Navbar from "$components/Navbar.svelte";
</script>

<div class="dark:text-neutral-100 text-neutral-900">
	<Navbar/>
	
	<div class="pt-32 flex flex-col max-w-screen min-h-screen dark:bg-dark-800 bg-violet-100 duration-300 transition-colors"><slot/></div>
</div>