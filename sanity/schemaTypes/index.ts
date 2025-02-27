import { type SchemaTypeDefinition } from "sanity";
import service from "./service";
import category from "./category";
import product from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, category, product],
};
