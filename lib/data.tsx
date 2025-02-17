import GoogleMaps from "@/components/ui/google-map";
import Instagram from "@/components/ui/instagram-logo";
import LinkedIn from "@/components/ui/linkedin-logo";
import WhatsApp from "@/components/ui/whatsapp-logo";
import Image from "next/image";

const navData = {
	items: [
		{ name: "Home", href: "/", isDisabled: false },
		{ name: "Products", href: "/products", isDisabled: true },
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
			isDisabled: false,
		},
		{ name: "About Us", href: "/about-us", isDisabled: false },
	],
};
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
const stickyScrollData = [
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
const services = {
	electricalServices: [
		{
			title: "Tank Radar System",
			description:
				"The core of our liquid cargo monitoring and control systems is the radar based tank gauges. These radar tank gauges takes advantage of the latest radar technology. They are designed to give flexibility, ease of installation and maintenance. As Reform Marine, we are ready for calibration, maintenance and repair services for tank radar systems with our experienced and fully equipped staff.",
		},
		{
			title: "Tank Level Gauging Systems",
			description:
				"Level gauges are sensing and measuring instruments that are used to detect the level of a fluid or gas in a tank. Level gauges are often employed in cases where performing a direct physical measurement of the level of the fluid is either not possible or practical, such as when the fluid being measured is hazardous or when the tank the fluid is sealed and under pressure. As Reform Marine, we are ready for calibration, maintenance and repair services for tank level gauging systems with our experienced and fully equipped staff.",
		},
		{
			title: "High Level and Overfill System",
			description:
				"High Level and Overfill Alarm is designed using the magnetic float switch principle which has been proven very effective. Reed switches inside the stem are activated by the permanent magnetic inside the float which rises and falls with the changes of liquid level. As Reform Marine, we are ready for calibration, maintenance and repair services for high level & overfill systems with our experienced and fully equipped staff.",
		},
		{
			title: "Gas Detection Systems",
			description:
				"Fixed Gas Detection Systems are used to detect an abnormal or dangerous presence of gas in a specific area and to warn the user in the event of potential hazards. Equipped with detectors, they can measure the concentration of one or more types of gas, depending on the model. As Reform Marine, we are ready for calibration, maintenance and repair services for fixed gas detection systems with our experienced and fully equipped staff.",
		},
		{
			title: "Gas Sampling Systems",
			description:
				"Gas sampling systems operate by drawing a gas sample from the desired detection point to a remotely located detector. Typically, the sample is drawn through tubing and some kind of pump is used to move the sample gas stream. As Reform Marine, we are ready for calibration, maintenance and repair services for gas sampling systems with our experienced and fully equipped staff.",
		},
		{
			title: "Fire Detection Systems",
			description:
				"A fire detection system is an alarm system that receives data on, assesses and then responds to events reported by various fire detectors. Fire detection systems are permanently installed systems to detect fires at an early stage, warn those affected and quickly inform the relevant personel. As Reform Marine, we are ready for calibration, maintenance and repair services for fire detection systems with our experienced and fully equipped staff.",
		},
		{
			title: "Oil Discharge Monitoring (ODME) Systems",
			description: "Güç taşıyıcıları ve portların termal analizi.",
		},
		{
			title: "Valve Remote Control Systems (VRCS)",
			description:
				"A valve remote control system directs the transport of fluids (ballast, bilge water, fuel oil, cargo etc.) onboard a ship. Valves are opened or closed by hydraulic, electro-hydraulic, pneumatic or electric actuators. Limit switches (open/close) or positioners (0-100% open) report the valve's status back to the system. As Reform Marine, we are ready for calibration, maintenance and repair services for valve remote control systems with our experienced and fully equipped staff.",
		},
		{
			title: "Ullage Temperature Interface (UTI)",
			description:
				"The Ullage Temperature Interface (UTI) is an important component of tank gauging systems used in the oil and gas industry. UTI measures level and temperature to calculate the volume of cargo in the tank accurately. As Reform Marine, we are ready for calibration, maintenance and repair services for UTI's with our experienced and fully equipped staff.",
		},
		{
			title: "Flowmeters",
			description:
				"Flowmeters are measuring devices that are vital for many commercial functions. Flowmeters are integral to processes that contain liquids, gases, or vapor. Without the ability to monitor fluid flow, marine engineers are often unable to control the throughput. As Reform Marine, we are ready for calibration, maintenance and repair services for flowmeters with our experienced and fully equipped staff.",
		},
		{
			title: "Water Ingress Alarm Systems",
			description:
				"Water ingress alarm system is a system used to detect and control water leaks inside the ship. The purpose of this system is to detect water leaks that may damage the ship as soon as possible and to ensure the safety of the ship by taking the necessary measures. As Reform Marine, we are ready for calibration, maintenance and repair services of water ingress alarm systems with our experienced and fully equipped staff.",
		},
		{
			title: "Ullage Temperature Interface (UTI)",
			description:
				"The Ullage Temperature Interface (UTI) is an important component of tank gauging systems used in the oil and gas industry. UTI measures level and temperature to calculate the volume of cargo in the tank accurately. As Reform Marine, we are ready for calibration, maintenance and repair services for UTI's with our experienced and fully equipped staff.",
		},
		{
			title: "Navigation Lights Control Panels",
			description:
				"All seagoing ships must be equipped with running and signal lights in compliance with the International Regulations for Preventing Collision at Sea (COLREG). A navigational light panel is installed in the wheelhouse for the control of all navigation lights. As Reform Marine, we are ready for calibration, maintenance and repair services of navigation lights control panels with our experienced and fully equipped staff.",
		},
	],
	mechanicalServices: [
		{
			title: "Main Engine",
			description:
				"Main Engine maintenance and attitudes are carried out by Reform Marine service engineers. MAN  MC/MC-C ME-B ME-C Engines maintenance is carried out in accordance with the manual approved by the manufacturer. ",
		},
		{
			title: "Generator",
			description:
				"A generator is a device that produces energy from one source of energy to another. The most common type of generator is an electric generator, which converts mechanical energy into electrical energy. Generators can be used as a backup power source during power outages or to provide energy in remote areas where there is no electrical power.",
		},
		{
			title: "Boiler and Economiser",
			description:
				"Boilers are used to produce steam and play a critical role for the ship with the operation of auxiliary equipment and different tasks on board. This steam drives the ship's turbines and provides movement, allows the flexible ship to discharge cargo and also provides energy for other systems on board.",
		},
		{
			title: "Inert Gas System",
			description:
				"The inert gas generator used on ships produces gas to prevent combustion. This gas usually contains nitrogen, carbon dioxide and a small amount of oxygen. The inert gas system is used on tanker ships to reduce the fire/explosion hazard.",
		},
		{
			title: "Exhaust Gas Scrubber System",
			description:
				"Exhaust Gas Cleaning System are used to clean exhaust gas and have critical role for ship in Enviromental Requirement MARPOL  ANNEX VI. Exhaust Gas Cleaning System (EGCS) is a technology used to clean exhaust gases on ships. These systems minimize the damage to the environment by reducing harmful substances, especially sulfur oxides, found in exhaust gases.",
		},
		{
			title: "Ballast Water Treatment System",
			description:
				"Ballast water treatment is a process used to clean harmful organisms from the water used during ship ballast water operations and prevent them from spreading to the environment. Ballast water is used to ensure the balance and stability of ships, but this water can contain harmful microorganisms, insects, debris and other organisms2. These organisms can spread to new ecosystems as ships travel between different regions and threaten local species.",
		},
		{
			title: "Booster Unit and Viscosity Controller",
			description:
				"The booster Unit on the ships is the system where the fuel pressurization, filtering and fuel change operation of the ship is carried out. The fuel oil on the ship is sucked from the tank thanks to the pumps here and while giving it to the pressure line, it is observed that the fuel is given at maximum cleanliness by passing through candles.",
		},
		{
			title: "Oily Water Seperator System Check",
			description:
				"An oily water separator is a device used primarily in ships and industrial settings to separate oil and other contaminants from water. The main purpose of this device is to ensure that the water being discharged into the environment is clean and free from pollutants, helping to protect ecosystems and comply with environmental regulations.",
		},
		{
			title: "ICCP - MGPS",
			description:
				"Impressed Current Cathodic Protection, ICCP is used to prevent or slow down the corrosion of metal structures. Here's how it works: Current Generation: A continuous electrical current is supplied to the metal structure using an external power source. Anodes and Reference Electrodes: Anodes are placed on the metal structure being protected, and reference electrodes are placed in the surrounding seawater. Corrosion Prevention:ÊAnodes react with corrosive substances in the seawater, slowing down the corrosion process. This system is commonly used in ships, offshore platforms, pipelines, and other marine structures. A properly functioning ICCP system extends the lifespan of metal structures and ensures their safety.",
		},
	],
};

export {
	navData,
	statsData,
	benefits,
	socialLinks,
	stickyScrollData,
	services,
};
