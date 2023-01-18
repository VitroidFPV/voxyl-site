<script lang="ts">
	import { browser } from '$app/environment';

	let dark = true;

	function handleSwitchDarkMode() {
		dark = !dark;

		localStorage.setItem('theme', dark ? 'dark' : 'light');

		dark
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			dark = true;
		} else {
			document.documentElement.classList.remove('dark');
			dark = false;
		}
	}
</script>

<button
	on:click={handleSwitchDarkMode}
	class="bg-contain text-[0px] bg-no-repeat h-9 w-9 bg-[url('https://img.icons8.com/material-outlined/64/ffffff/sun--v1.png')] dark:bg-[url('https://img.icons8.com/material-outlined/64/ffffff/moon--v1.png')] opacity-80 hover:opacity-100 md:hover:-translate-y-1 duration-300"
	>Change Theme
</button>