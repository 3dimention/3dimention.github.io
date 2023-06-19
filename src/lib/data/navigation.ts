export type MenuItem = {
	id: number;
	title: string;
};

export type Navigation = {
	items: MenuItem[];
};

export const navigation: Navigation = {
	items: [
		{ id: 1, title: 'Who Am I' },
		{ id: 2, title: 'What I do' },
		{ id: 3, title: 'Contact' }
	]
};
