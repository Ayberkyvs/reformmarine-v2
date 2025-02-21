import type { Service } from "@/sanity/types";
import Link from "next/link";
import React from "react";
import { ImageCard } from "./ImageCard";
import { urlFor } from "@/sanity/lib/image";

const RelatedServices = ({ data }: { data: Service[] }) => {
  return (
    <>
      <hr className="w-full" />
      <h5 className="h5 font-semibold">Users also viewed</h5>
      <div className="grid w-full grid-cols-[1fr_1fr] gap-5 md:grid-cols-[1fr_1fr_1fr_1fr]">
        {data.map((service: Service) => (
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
  );
};

export default RelatedServices;
