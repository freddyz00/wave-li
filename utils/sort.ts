import { Event } from "../typings";
import { categoriesOrder } from "./categories";

export const sortByCategories = (array: any) => {
  return array.sort(
    (a: Event, b: Event) =>
      categoriesOrder[a.category] - categoriesOrder[b.category]
  );
};

export const sortByDate = (array: any) => {
  return array.sort(
    (a: Event, b: Event) =>
      Date.parse(a.start_timestamp) - Date.parse(b.start_timestamp)
  );
};
