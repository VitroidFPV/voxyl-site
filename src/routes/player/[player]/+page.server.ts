import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { SECRET_API_KEY } from "$env/static/private"

async function uuidFromIgn(ign: string): Promise<string> {
	const uuid = await fetch (`https://playerdb.co/api/player/minecraft/${ign}`)
		.then((res) => res.json())

	return uuid.data.player.id
}

async function getPlayerInfo(uuid: string): Promise<object> {
	const url = `https://api.voxyl.net/player/stats/overall/${uuid}?api=${SECRET_API_KEY}`;
	const post = await fetch(url)
		.then((res) => res.json())

	return post.level
}

export const load = (async ({ params }) => {

	const uuid: string = (await uuidFromIgn(params.player));
	const level = await getPlayerInfo(uuid);
	const url = `https://api.voxyl.net/player/stats/overall/${uuid}?api=${SECRET_API_KEY}`;

	const query = params;
	
	if (level) {
		return {
			uuid,
			level,
			query,
		}
		// console.log(post)
	}
	
	throw error(404, "Not found");
}) satisfies PageServerLoad;