import { HighlightedHeading } from "@/components/HighlightedHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionHeading from "../../components/SectionHeading";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import FadeIn from "@/components/animations/FadeIn";
import AboutUs from "@/components/AboutUs";
import { benefits, stickyScrollData } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
};
const Home = () => {
	return (
		<>
			<section className="hero">
				<div className="layout flex flex-col !pb-0 pt-8 gap-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center justify-between">
						<HighlightedHeading
							text="Your Reliable Service in the Maritime"
							highlightedWord="Service"
							className="h2 sm:h1 text-center lg:col-span-7 lg:text-left font-semibold uppercase"
						/>
						<div className="lg:col-span-4 lg:col-end-13 text-center">
							<p className="p">
								Reform Marine is a company specialized in maintenance and repair
								of electrical and machinery systems and offers special solutions
								for the maritime.
							</p>
							<Button className="mt-2 bg-accent-500 text-white hover:bg-accent-600">
								Learn More
							</Button>
						</div>
					</div>
					<div className="relative rounded-lg w-full h-fit">
						<Image
							src="/images/hero.webp"
							alt="Cargo Ship"
							priority
							width={1300}
							height={800}
							objectFit="cover"
							className="relative w-full h-full rounded-lg"
						/>
						<div className="absolute bottom-0 flex items-center justify-center md:justify-between w-full h-[70px] md:h-[90px] px-5 bg-black/60 backdrop-blur-sm">
							<div className="flex items-center justify-between">
								<div className="flex-center flex-col p-6 size-auto ">
									<span className="h6 text-white font-semibold">500+</span>
									<p className="small md:text-base text-neutral-300 line-clamp-1">
										Customers
									</p>
								</div>
								<div className="flex-center flex-col p-6 size-auto">
									<span className="h6 text-white font-semibold">1.000+</span>
									<p className="small md:text-base text-neutral-300 line-clamp-1">
										Products
									</p>
								</div>
								<div className="flex-center flex-col p-6 size-auto">
									<span className="h6 text-white font-semibold">8+</span>
									<p className="small md:text-base text-neutral-300 line-clamp-1">
										Years Experience
									</p>
								</div>
							</div>
							<p className="p text-white hidden lg:block">
								First priority is the safe navigation and operation of the
								vessels.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="benefits">
				<div className="layout flex flex-col gap-5">
					<SectionHeading
						title="Why Choose Us"
						description="Reform Marine offers high quality products and services in the electrical and mechanical fields. This provides advantages in terms of reliability and performance. "
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 h-fit">
						{benefits.map((benefit: any, index: number) => (
							<FadeIn
								delay={0.2 + index * 0.2}
								duration={0.8}
								direction="left"
								className="w-full h-full flex"
								key={index}
							>
								<div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start justify-start text-left border-neutral-100 border gap-2">
									<Image
										src={benefit.icon}
										alt={benefit.title}
										width={50}
										height={50}
										className="bg-primary-500 p-2 aspect-square rounded-md"
									/>
									<h6 className="h6 mt-2 font-semibold">{benefit.title}</h6>
									<p className="p mt-1">{benefit.description}</p>
								</div>
							</FadeIn>
						))}
					</div>
				</div>
			</section>
			<section className="aboutus">
				<AboutUs />
			</section>
			<section className="services">
				<div className="layout flex flex-col gap-[50px]">
					<SectionHeading
						subtitle="Our Services"
						title="Engineering Services"
						description="Reform Marine is a company that provides service to ship engine and electrical equipment with its team specialized in the maritime. Our aim is to increase the service quality in the maritime and extend the service life of the system."
					/>
					<StickyScroll content={stickyScrollData} />
				</div>
			</section>
		</>
	);
};

export default Home;
