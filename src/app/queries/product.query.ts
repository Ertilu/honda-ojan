"use client";

import { useQuery } from "@tanstack/react-query";

export const useProductService = ({
  getCatalogueListParams,
}: {
  getCatalogueListParams: any;
}) => {
  const getCatalogueList = useQuery({
    queryKey: ["getCatalogues"],
    queryFn: async ({ signal }) => {
      console.log("getCatalogueListParams", getCatalogueListParams);
      let req = new Request("https://honda-bam-api.vercel.app/v1/catalogues", {
        signal,
      });
      const response = await fetch(req);
      console.log("response", response);
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
