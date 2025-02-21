import { defineQuery } from "next-sanity";

const getServicesByCategory = defineQuery(`
    *[_type == "service" && category == $category] | order(title desc) {
        title,
        description,
        slug,
        category,
    }
`);

const getRelatedServices = defineQuery(`
    *[_type == "service" && category == $category && slug.current != $slug] [0...$number] {
        title,
        description,
        image,
        slug,
    }
`);

const getServiceDetailsBySlug = defineQuery(`
    *[_type == "service" && slug.current == $slug] [0]
`);

export { getServicesByCategory, getRelatedServices, getServiceDetailsBySlug };
