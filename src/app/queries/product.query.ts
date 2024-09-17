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
      const params = new URLSearchParams();
      if (getCatalogueListParams.params.search) {
        params.append("search", getCatalogueListParams.params.search);
      }
      const queryString = params.toString();
      let req = new Request(
        `https://honda-bam-api.vercel.app/v1/catalogues?${queryString}`,
        {
          signal,
        }
      );
      const response = await fetch(req);
      console.log("awdad", req);

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
