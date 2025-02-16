export type NavItem = {
	name: string;
	href?: string;
	image?: string;
	items?: {
		name: string;
		description: string;
		image?: string;
		href?: string;
	}[];
};
