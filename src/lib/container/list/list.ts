export type ListElement = { id: number };
export type ListOptions<T> = { first: boolean; last: boolean; prev: T | null; next: T | null };
export type ListTransform<U, T extends ListElement> = (value: T, index: number, opts: ListOptions<T>, array: T[]) => U;

export const listOptions = <T>(index: number, elements: T[]): ListOptions<T> => {
	const first = index === 0,
		last = elements.length === index + 1;
	const prev = !first ? elements[index - 1] : null,
		next = !last ? elements[index + 1] : null;
	return { first, last, prev, next };
};
