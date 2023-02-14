import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { SECRET_API_KEY } from "$env/static/private"

async function uuidFromIgn(ign: string): Promise<string> {
	const uuid = await fetch (`https://playerdb.co/api/player/minecraft/${ign}`)
		.then((res) => res.json())

	return uuid.data.player.id
}

async function ignFromUuid(uuid: string): Promise<string> {
	const ign = await fetch (`https://playerdb.co/api/player/minecraft/${uuid}`)
		.then((res) => res.json())

	return ign.data.player.username
}

async function getPlayerInfo(uuid: string): Promise<object> {
	const options = `${uuid}?api=${SECRET_API_KEY}`
	const urlInfo = "https://api.voxyl.net/player/info/";
	const urlOverall = "https://api.voxyl.net/player/stats/overall/";

	const playerInfo = await fetch(urlInfo + options)
		.then((res) => res.json())
	const playerOverall = await fetch(urlOverall + options)
		.then((res) => res.json())


	const player = {
		...playerInfo,
		...playerOverall,
	}

	return player
}

async function getGuildInfo(tag: string):Promise<object> {
	const options = `${tag}?api=${SECRET_API_KEY}`
	const urlInfo = "https://api.voxyl.net/guild/info/";
	const urlMembers = "https://api.voxyl.net/guild/members/";

	const guildInfo = await fetch(urlInfo + options)
		.then((res) => res.json())
	const guildMembers = await fetch(urlMembers + options)
		.then((res) => res.json())

	// for each member in guildMembers, get their stats and add them to the object
	for (const member of guildMembers.members) {
		const player = await getPlayerInfo(member.uuid)
		member.stats = player
	}

	const guild = {
		...guildInfo,
		...guildMembers,
	}

	return guild
}

export const load = (async ({ params }) => {

	// const uuid: string = (await uuidFromIgn(params.player));
	const guild = await getGuildInfo(params.guild);

	const query = params;
	
	if (guild) {
		console.log(guild)
		return {
			guild,
			query,
		}
	}
	
	throw error(404, "Not found");
}) satisfies PageServerLoad;