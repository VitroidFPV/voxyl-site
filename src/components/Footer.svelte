<script>
	import FooterCredits from "$components/FooterCredits.svelte";
	import FooterLinks from "$components/FooterLinks.svelte";
</script>
<footer class="w-full">
	<div class="h-fit bg-violet-100 dark:bg-dark-800 duration-300">
		<div class="max-w-full origin-bottom top-[2px] relative h-fit md:scale-y-[0.5] z-20">
			<svg
				class="max-w-full h-fit"
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
					class="duration-300 dark:fill-[#2d2441] fill-[#bca2fa]"
				/>
			</svg>
		</div>
		<div class="w-full h-fit dark:bg-[#2d2441] bg-[#bca2fa] duration-300 flex md:flex-row flex-col md:items-center md:p-16 p-8 pt-8">
			<div class="w-1/4 text-4xl font-bold text-violet-500">Voxyl Stats</div>
			<div class="flex flex-col md:w-1/4 md:mr-8">
				<div class="font-semibold text-2xl mb-2 text-violet-500">Credits:</div>
				<FooterCredits name="Vitroid" role="Site Development" link="https://vitroidfpv.com/" />
				<FooterCredits name="SirJosh" role="Site Development" link="/" />
				<FooterCredits name="_lightninq" role="Bot Development" link="https://github.com/lightninq720" />
				<FooterCredits name="FirestarAD" role="Bot Development" link="https://github.com/firestarad" />
				<FooterCredits name="Sin" role="Overlay Development" link="/" />
				<FooterCredits name="ambmt" role="Overlay Development" link="https://github.com/ambmt" />
			</div>
			<div class="flex flex-col md:w-1/4">
				<div class="font-semibold text-2xl mb-2 text-violet-500">Links:</div>
				<FooterLinks name="Support" link="https://discord.com/invite/fBnfWXSDpu" />
				<FooterLinks name="Buymeacoffee" link="https://www.buymeacoffee.com/voxlystats/" />
				<FooterLinks name="BWP Stats Bot" link="https://discord.com/api/oauth2/authorize?client_id=926814210321707028&permissions=277025442816&scope=bot%20applications.commands" />
				<FooterLinks name="BWP Stats Overlay" link="https://github.com/BWP-Stats/Voxyl-Overlay/releases/tag/v1.3.0" />
			</div>		
		</div>
	</div>
</footer>
