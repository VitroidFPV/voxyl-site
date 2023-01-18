import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { SECRET_API_KEY } from "$env/static/private"

async function uuidFromIgn(ign: string): Promise<string> {
	const uuid = await fetch (`https://playerdb.co/api/player/minecraft/${ign}`)
		.then((res) => res.json())

	return uuid.data.player.id
}

async function getPlayerInfo(uuid: string): Promise<object> {
	const options = `${uuid}?api=${SECRET_API_KEY}`
	const urlInfo = "https://api.voxyl.net/player/info/";
	const urlOverall = "https://api.voxyl.net/player/stats/overall/";
	const urlGame = "https://api.voxyl.net/player/stats/game/";
	const urlAchievements = "https://api.voxyl.net/achievements/player/";
	const urlAchievementsInfo = "https://api.voxyl.net/achievements/info/";

	const playerInfo = await fetch(urlInfo + options)
		.then((res) => res.json())
	const playerOverall = await fetch(urlOverall + options)
		.then((res) => res.json())
	const playerGame = await fetch(urlGame + options)
		.then((res) => res.json())
	const playerAchievements = await fetch(urlAchievements + options)
		.then((res) => res.json())
	const playerAchievementsInfo = await fetch(urlAchievementsInfo + options)
		.then((res) => res.json())


	const player = {
		...playerInfo,
		...playerOverall,
		...playerGame,
		...playerAchievements,
		...playerAchievementsInfo,
		uuid
	}

	return player
}

export const load = (async ({ params }) => {

	const uuid: string = (await uuidFromIgn(params.player));
	const player = await getPlayerInfo(uuid);

	const query = params;
	
	if (player) {
		return {
			player,
			query,
		}
		// console.log(post)
	}
	
	throw error(404, "Not found");
}) satisfies PageServerLoad;