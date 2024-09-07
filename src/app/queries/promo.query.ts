"use client";

import { useQuery } from "@tanstack/react-query";

export const usePromoService = ({
  getPromoListParams,
}: {
  getPromoListParams: any;
}) => {
  const getPromoList = useQuery({
    queryKey: ["getPromos"],
    queryFn: async ({ signal }) => {
      let req = new Request("https://honda-bam-api.vercel.app/v1/promos", {
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
    getPromoList,
  };
};
