import { json, type RequestHandler } from '@sveltejs/kit';
import entriesFile from '../../entries.yaml';

const entriesCount = entriesFile.entries.length;

export const GET = (() => {
	const idx = Math.floor(Math.random() * entriesCount);

	const entry = entriesFile.entries[idx];

	return json(
		{ result: entry },
		{
			headers: {
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
			},
		},
	);
}) satisfies RequestHandler;
