export const categories: {
  [key: string]: string;
} = {
  na: "🎲 Ungrouped",
  hot: "🔥 Hot Events",
  soon: "⏳ Happening Soon",
  fy: "❤ For You",
};

export const categoriesOrder: {
  [key: string]: number;
} = {
  hot: 0,
  fy: 1,
  soon: 2,
  na: 100,
};

export const sortByCategories = (array: any) => {
  return array.sort(
    (a: any, b: any) =>
      categoriesOrder[a.category] - categoriesOrder[b.category]
  );
};
