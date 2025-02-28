import "server-only";
import { parseMarkdown } from "@/lib/markdown";
import { ImageCard } from "./ImageCard";
import DOMPurify from "isomorphic-dompurify";
import { urlFor } from "@/sanity/lib/image";
import type { Service } from "@/sanity/types";
import NotFoundAlert from "./NotFoundAlert";

const ServiceDetail = async ({ data }: { data: Service }) => {
  const { title, content, image } = data;
  const parsedContent = parseMarkdown(content?.toString() || "");
  const clean = DOMPurify.sanitize(parsedContent, {
    ALLOWED_ATTR: ["style"],
  });
  return (
    <div>
      {parsedContent ? (
        <div className="relative">
          <h2 className="h5 mb-6 font-semibold">{title}</h2>
          {image && (
            <div className="float-right mb-4 ml-4">
              <ImageCard
                src={
                  urlFor(image).width(300).height(300).url() ||
                  "/placeholder.svg"
                }
                alt={title}
                caption={title}
                className="size-[180px] sm:size-[220px] lg:size-[250px] xl:size-[310px]"
              />
            </div>
          )}
          <article
            className="prose:leading-3 prose w-full !max-w-none break-all prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:text-sm prose-blockquote:italic prose-blockquote:text-gray-600 prose-strong:font-bold prose-strong:text-gray-900 prose-code:text-blue-800 prose-pre:bg-gray-100 prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-gray-700 prose-ul:list-disc prose-ul:pl-6 prose-ul:text-gray-700 prose-li:text-gray-700 prose-hr:border-gray-300 prose-hr:text-gray-300"
            dangerouslySetInnerHTML={{ __html: clean }}
          />
        </div>
      ) : (
        <NotFoundAlert
          title="No Details Found!"
          description={`We are sorry, but there are no details about ${title} at the moment.`}
        />
      )}
    </div>
  );
};

export default ServiceDetail;
