import type { ListElement, ListOptions, ListTransform } from '$lib/container/list/list';

export type MockListElement = ListElement & { name: string };
export const mockListElements = [
	{ id: 1, name: 'Foo' },
	{ id: 2, name: 'Bar' },
	{ id: 3, name: 'Baz' }
];

type ResultElement = MockListElement & { output: string };
export const customTransform: ListTransform<ResultElement, MockListElement> = (
	value: MockListElement,
	index: number,
	{ first, last }: ListOptions<MockListElement>
) => {
	return { ...value, output: `${value.name} ${!first && !last ? value.id : ''}`.trim() };
};
