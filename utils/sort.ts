import { categoriesOrder } from "./categories";

export const sortByCategories = (array: any) => {
  return array.sort(
    (a: any, b: any) =>
      categoriesOrder[a.category] - categoriesOrder[b.category]
  );
};

export const sortByDate = (array: any) => {
  return array.sort(
    (a: any, b: any) =>
      Date.parse(a.start_timestamp) - Date.parse(b.start_timestamp)
  );
};
