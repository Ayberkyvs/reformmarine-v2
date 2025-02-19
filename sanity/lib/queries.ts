import { defineQuery } from "next-sanity";

const getServicesByCategory = defineQuery(`
    *[_type == "services" && category == $category] | order(title desc) {
        title,
        description,
        slug,
    }
`);

const getRelatedServices = defineQuery(`
    *[_type == "services" && category == $category && slug.current != $slug] | order(title desc) [$number] {
        title,
        description,
        image,
        slug,
    }
`);

const getServiceDetailsBySlug = defineQuery(`
    *[_type == "services" && slug.current == $slug] [0]
`);

export { getServicesByCategory, getRelatedServices, getServiceDetailsBySlug };
