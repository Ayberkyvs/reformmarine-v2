export const navData = {
	items: [
		{ name: "Home", href: "/" },
		{ name: "Products", href: "/products" },
		{
			name: "Services",
			items: [
				{
					name: "Electrical Services",
					description:
						"Reform Marine, as a company specialising in electrical systems maintenance and repair, offers tailor-made solutions to the maritime industry",
					image: "/images/electrical.webp",
					href: "/services/electrical",
				},
				{
					name: "Mechanical Services",
					description:
						"Reform Marine, as a company specialized senior engineer are perform to maintenance of ship mechanical services. ",
					image: "/images/mechanical.webp",
					href: "/services/mechanical",
				},
			],
		},
		{ name: "About Us", href: "/about-us" },
	],
};
