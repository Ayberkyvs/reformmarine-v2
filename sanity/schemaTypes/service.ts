import { Ship } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: Ship,
  fields: [
    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      placeholder: "Enter a short description",
      type: "string",
      validation: (Rule) => Rule.required().min(130).max(350),
    }),
    defineField({
      name: "content",
      title: "Content",
      placeholder: "Enter blog content",
      type: "markdown",
      validation: (Rule) => Rule.min(500),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Electrical", "Mechanical"],
      },
      placeholder: "Electrical or Mechanical Service",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
