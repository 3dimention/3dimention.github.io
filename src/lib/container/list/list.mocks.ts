import type { ListElement } from '$lib/container/list/list';

export type MockListElement = ListElement & { name: string };
export const mockListElements = [
	{ id: 1, name: 'Foo' },
	{ id: 2, name: 'Bar' },
	{ id: 3, name: 'Baz' }
];
