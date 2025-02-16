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
						"Electrical services for residential and commercial buildings",
					image: "/images/electrical.webp",
					href: "/services/electrical",
				},
				{
					name: "Mechanical Services",
					description:
						"Mechanical services for residential and commercial buildings",
					image: "/images/mechanical.webp",
					href: "/services/mechanical",
				},
			],
		},
		{ name: "About Us", href: "/about-us" },
	],
};
