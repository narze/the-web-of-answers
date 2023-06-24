import type { PageLoad } from './$types';
import entriesJson from '../../entries.json';
import { error } from '@sveltejs/kit';
export const prerender = true;

export const load = (({ params }) => {
	const id = +params.id;
	const entry = entriesJson.entries[id - 1];

	if (!entry) {
		throw error(404, {
			message: 'Not found',
		});
	}

	return {
		entry: {
			id: params.id,
			content: entry,
		},
	};
}) satisfies PageLoad;
