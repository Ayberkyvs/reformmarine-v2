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

export type Stat = {
	value: string;
	label: string;
};

export type SocialLink = {
	icon?: React.ReactNode;
	name: string;
	href: string;
};
