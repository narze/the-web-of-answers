import type { EntryGenerator, PageLoad } from './$types';
import entriesFile from '../../entries.yaml';
import { error } from '@sveltejs/kit';
export const prerender = true;

export const load = (({ params }) => {
	const id = +params.id;
	const entry = entriesFile.entries[id - 1];

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

export const entries = (() => {
	return entriesFile.entries.map((_, idx) => ({ id: String(idx + 1) }));
}) satisfies EntryGenerator;
