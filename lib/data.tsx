import GoogleMaps from "@/components/ui/google-map";
import Instagram from "@/components/ui/instagram-logo";
import LinkedIn from "@/components/ui/linkedin-logo";
import WhatsApp from "@/components/ui/whatsapp-logo";

const statsData = [
	{ value: "500+", label: "Customers" },
	{ value: "1.000+", label: "Products" },
	{ value: "8+", label: "Years Experience" },
];
const benefits = [
	{
		icon: "/icons/quality.svg",
		title: "Quality",
		description:
			"Quality is the standardization of certain customer expectations as a result of a product and service meeting certain standards.",
	},
	{
		icon: "/icons/effective.svg",
		title: "Cost-Effective",
		description:
			"By supplying our products from the first supplier, our customers are provided cost-effective.",
	},
	{
		icon: "/icons/innovative.svg",
		title: "Innovative Products",
		description:
			"It is aimed to ensure long-lasting operation of the systems by providing system upgrades using innovative products.",
	},
	{
		icon: "/icons/expertise.svg",
		title: "Expertise",
		description:
			"With our experienced service engineers, we provide result-oriented services by accurately identifying the needs of the vessel.",
	},
];
const socialLinks = [
	{
		icon: <WhatsApp className="aspect-square w-[1em] h-[1em]" />,
		name: "WhatsApp",
		href: "http://wa.me/905546733676",
	},
	{
		icon: <LinkedIn className="aspect-square w-[1em] h-[1em]" />,
		name: "LinkedIn",
		href: "https://www.linkedin.com/company/reformmarine",
	},
	{
		icon: <Instagram className="aspect-square w-[1em] h-[1em]" />,
		name: "Instagram",
		href: "https://www.instagram.com/reformmarine/",
	},
	{
		icon: <GoogleMaps className="aspect-square w-[1em] h-[1em]" />,
		name: "Google Maps",
		href: "https://www.google.com/maps/place/Reform+Marine/@40.8184183,29.2955793,18.72z/data=!4m6!3m5!1s0x14cadd7659685b97:0x9f8ad867e6e6cc0e!8m2!3d40.8183382!4d29.296018!16s%2Fg%2F11w3tk9ws3?hl=tr&coh=219815&entry=tts&g_ep=EgoyMDI0MDYxOS4xKgBIAVAD",
	},
];

export { statsData, benefits, socialLinks };
