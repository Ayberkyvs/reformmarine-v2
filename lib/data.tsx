import GoogleMaps from "@/components/ui/google-map";
import Instagram from "@/components/ui/instagram-logo";
import LinkedIn from "@/components/ui/linkedin-logo";
import WhatsApp from "@/components/ui/whatsapp-logo";
import Image from "next/image";

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
		icon: <WhatsApp className="aspect-square" />,
		name: "WhatsApp",
		href: "http://wa.me/905546733676",
	},
	{
		icon: <LinkedIn className="aspect-square" />,
		name: "LinkedIn",
		href: "https://www.linkedin.com/company/reformmarine",
	},
	{
		icon: <Instagram className="aspect-square" />,
		name: "Instagram",
		href: "https://www.instagram.com/reformmarine/",
	},
	{
		icon: <GoogleMaps className="aspect-square" />,
		name: "Google Maps",
		href: "https://www.google.com/maps/place/Reform+Marine/@40.8184183,29.2955793,18.72z/data=!4m6!3m5!1s0x14cadd7659685b97:0x9f8ad867e6e6cc0e!8m2!3d40.8183382!4d29.296018!16s%2Fg%2F11w3tk9ws3?hl=tr&coh=219815&entry=tts&g_ep=EgoyMDI0MDYxOS4xKgBIAVAD",
	},
];
const services = [
	{
		title: "Electrical Service",
		description:
			"Reform Marine, as a company specialising in electrical systems maintenance and repair, offers tailor-made solutions to the maritime industry. Our professional teams optimise the travel experience by improving the safety and performance of vessels with electrical maintenance services.",
		content: (
			<Image
				src="/images/electrical_scroll.webp"
				alt="Image"
				fill
				className="h-full w-full"
			/>
		),
	},
	{
		title: "Mechanical Service",
		description:
			"Reform Marine, as a company specialized senior engineer are perform to maintenance of ship mechanical services. This power includes engine maintenance and repair, regular checks of performance and results, maintenance of hydraulic systems,fuel system,quality of lubrication oil and also pneumatic equipment maintenance.",
		content: (
			<Image
				src="/images/mechanical_scroll.webp"
				alt="Image"
				fill
				className="h-full w-full"
			/>
		),
	},
	{
		title: "Spare Parts",
		description:
			"Reform Marine offers quality services, products and spare parts for ships. We increase our service quality by providing you with all the parts you need after the service.",
		content: (
			<Image
				src="/images/sparepart_scroll.webp"
				alt="Image"
				fill
				className="h-full w-full"
			/>
		),
	},
	{
		title: "Products",
		description:
			"Extensive product selection, superior workmanship, fast turnaround and on-time delivery make us your one-stop shop.Regardless of brand, the close follow-up of each customer is at the heart of our offering.",
		content: (
			<Image
				src="/images/products_scroll.webp"
				alt="Image"
				fill
				className="h-full w-full"
			/>
		),
	},
];

export { statsData, benefits, socialLinks, services };
