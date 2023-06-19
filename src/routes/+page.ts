import type { PageLoad } from './$types';
import { navigation } from '$lib/data/navigation';

export const prerender = true;
export const ssr = false;

/**
 * Top Level Page Data
 */
export const load: PageLoad = () => {
	return { navigation };
};
