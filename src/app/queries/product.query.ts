"use client";

import { useQuery } from "@tanstack/react-query";

export const useProductService = ({
  getCatalogueListParams,
}: {
  getCatalogueListParams: any;
}) => {
  const getCatalogueList = useQuery({
    queryKey: ["getCatalogues", getCatalogueListParams.params],
    queryFn: async ({ signal }) => {
      console.log(
        "getCatalogueListParams.params",
        getCatalogueListParams.params
      );
      const params = new URLSearchParams();
      if (getCatalogueListParams.params.search) {
        params.append("search", getCatalogueListParams.params.search);
      }
      if (getCatalogueListParams.params.category) {
        params.append("category", getCatalogueListParams.params.category);
      }
      const queryString = params.toString();
      let req = new Request(
        `https://honda-bam-api.vercel.app/v1/catalogues?${queryString}`,
        {
          signal,
        }
      );
      const response = await fetch(req);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return {
    getCatalogueList,
  };
};
