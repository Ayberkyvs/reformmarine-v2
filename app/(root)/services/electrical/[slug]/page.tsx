import { ImageCard } from "@/components/ImageCard";
import ServiceDetail from "@/components/ServiceDetail";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  getRelatedServices,
  getServiceDetailsBySlug,
} from "@/sanity/lib/queries";
import type { Service } from "@/sanity/types";
import type { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
import RelatedServices from "../../../../../components/RelatedServices";
import Loader from "@/components/Loader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params)?.slug || "";
  const service: Service = await client.fetch(getServiceDetailsBySlug, {
    slug,
  });
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [
        {
          url:
            urlFor(service.image).width(300).height(300).url() ||
            "/images/placeholder.webp",
          alt: service.title,
        },
      ],
      url: `https://example.com/services/${service.category.toLowerCase()}/${slug}`,
    },
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params)?.slug || "";

  const serviceData: Service = await client.fetch(getServiceDetailsBySlug, {
    slug,
  });
  const { category } = serviceData;
  const relatedServices: Service[] = await client.fetch(getRelatedServices, {
    category,
    slug,
    number: 4,
  });
  return (
    <>
      <div className="flex w-full flex-col gap-5">
        <Suspense fallback={<Loader className="h-[500px]" />}>
          <ServiceDetail data={serviceData} />
        </Suspense>
        <Suspense fallback={<Loader className="h-[300px]" />}>
          {RelatedServices.length > 0 && (
            <>
              <hr className="w-full" />
              <h5 className="h5 font-semibold">Users also viewed</h5>
              <div className="grid w-full grid-cols-1 gap-5 xs:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr]">
                {relatedServices?.map((service: Service) => (
                  <React.Fragment key={service._id}>
                    <Link href={service.slug.current}>
                      <ImageCard
                        src={
                          urlFor(service.image).width(500).height(500).url() ||
                          "/images/placeholder.webp"
                        }
                        alt={service.title}
                        caption={service.title}
                        className="size-full"
                      />
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default Page;
