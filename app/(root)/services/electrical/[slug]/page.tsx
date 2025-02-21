import ServiceDetail from "@/components/ServiceDetail";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  getRelatedServices,
  getServiceDetailsBySlug,
} from "@/sanity/lib/queries";
import type { Service } from "@/sanity/types";
import type { Metadata } from "next";
import React, { Suspense } from "react";
import RelatedServices from "@/components/RelatedServices";
import Loader from "@/components/Loader";

export const experimental_ppr = true;
export const revalidate = 120;

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
      <div className="flex h-fit w-full flex-col gap-5">
        <Suspense fallback={<Loader className="h-[500px]" />}>
          <ServiceDetail data={serviceData} />
        </Suspense>
        <Suspense fallback={<Loader className="h-[300px]" />}>
          {RelatedServices.length > 0 && (
            <RelatedServices data={relatedServices} />
          )}
        </Suspense>
      </div>
    </>
  );
};

export default Page;
