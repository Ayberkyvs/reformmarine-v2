import { HighlightedHeading } from "@/components/HighlightedHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionHeading from "../../components/SectionHeading";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import FadeIn from "@/components/animations/FadeIn";
import AboutUs from "@/components/AboutUs";
import { benefits, stickyScrollData } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="layout flex flex-col gap-8 !pb-0 pt-8">
          <div className="grid grid-cols-1 items-center justify-between gap-5 lg:grid-cols-12">
            <HighlightedHeading
              text="Your Reliable Service in the Maritime"
              highlightedWord="Service"
              className="h3 sm:h1 text-center font-semibold uppercase lg:col-span-7 lg:text-left"
            />
            <div className="text-center lg:col-span-4 lg:col-end-13">
              <p className="p">
                Reform Marine is a company specialized in maintenance and repair
                of electrical and machinery systems and offers special solutions
                for the maritime.
              </p>
              <Link href="/services">
                <Button className="mt-2 bg-accent-500 text-white hover:bg-accent-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-fit w-full rounded-lg">
            <Image
              src="/images/hero.webp"
              alt="Cargo Ship"
              priority
              width={1300}
              height={800}
              objectFit="cover"
              className="relative size-full rounded-lg"
            />
            <div className="absolute bottom-0 flex h-[70px] w-full items-center justify-center bg-black/60 px-5 backdrop-blur-sm md:h-[90px] md:justify-between">
              <div className="flex items-center justify-between">
                <div className="flex-center size-auto flex-col p-6">
                  <span className="h6 font-semibold text-white">500+</span>
                  <p className="small line-clamp-1 text-neutral-300 md:text-base">
                    Customers
                  </p>
                </div>
                <div className="flex-center size-auto flex-col p-6">
                  <span className="h6 font-semibold text-white">1.000+</span>
                  <p className="small line-clamp-1 text-neutral-300 md:text-base">
                    Products
                  </p>
                </div>
                <div className="flex-center size-auto flex-col p-6">
                  <span className="h6 font-semibold text-white">8+</span>
                  <p className="small line-clamp-1 text-neutral-300 md:text-base">
                    Years Experience
                  </p>
                </div>
              </div>
              <p className="p hidden text-white lg:block">
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
          <div className="grid h-fit grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index: number) => (
              <FadeIn
                delay={0.2 + index * 0.2}
                duration={0.8}
                direction="left"
                className="flex size-full"
                key={index}
              >
                <div className="flex flex-col items-start justify-start gap-2 rounded-lg border border-neutral-100 bg-white p-4 text-left shadow-md">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={50}
                    height={50}
                    className="aspect-square rounded-md bg-primary-500 p-2"
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
