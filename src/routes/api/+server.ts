import { json, type RequestHandler } from '@sveltejs/kit';
import entriesFile from '../../entries.yaml';

const entriesCount = entriesFile.entries.length;

export const GET = (() => {
	const idx = Math.floor(Math.random() * entriesCount);

	const entry = entriesFile.entries[idx];

	return json({ result: entry });
}) satisfies RequestHandler;
