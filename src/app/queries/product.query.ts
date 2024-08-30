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
      let req = new Request("https://honda-bam-api.vercel.app/v1/catalogues", {
        signal,
      });
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
