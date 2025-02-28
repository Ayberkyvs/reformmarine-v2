import { defineQuery } from "next-sanity";

const getServicesByCategory = defineQuery(`
    *[_type == "service" && category == $category] | order(title desc) {
        _id,
        title,
        description,
        slug,
        category,
    }
`);

const getRelatedServices = defineQuery(`
    *[_type == "service" && category == $category && slug.current != $slug] [0...$number] {
        _id,
        title,
        description,
        image,
        slug,
    }
`);

const getServiceDetailsBySlug = defineQuery(`
    *[_type == "service" && slug.current == $slug] [0]
`);

export const getProductsQuery = defineQuery(`
  *[_type == "product"] {
    _id,
    title,
    compareAtPrice,
    description,
    slug,
    price,
    mainImage,
    isOnSale,
    isFeatured,
    categories[]->{
      _id,
      slug,
    }
  }
`);

export const getCategoriesQuery = defineQuery(`
  *[_type == "category"] {
    _id,
    title,
    slug,
    "parentCategory": parentCategory->{_id, title},
    "subCategories": *[_type == "category" && references(^._id)]{
      _id,
      title,
      slug
    }
  }
`);

export { getServicesByCategory, getRelatedServices, getServiceDetailsBySlug };
