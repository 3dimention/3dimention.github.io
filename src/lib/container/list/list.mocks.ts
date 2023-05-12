import type { ListElement } from '$lib/container/list/list';

export type MockListElement = { name: string } & ListElement;
export const mockListElements = [
	{ id: 1, name: 'Foo' },
	{ id: 2, name: 'Bar' },
	{ id: 3, name: 'Baz' }
];
