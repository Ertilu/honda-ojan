import { useProductService } from "@/app/queries/product.query";

export default async function Sitemap() {
  const baseUrl = "https://honda-bam.com";

  const { getCatalogueList } = useProductService({
    getCatalogueListParams: {
      params: {},
    },
  });
  const detailProduk = getCatalogueList?.data?.results.map((data: any) => {
    return {
      url: `${baseUrl}/detailproduk/${data?.name}`,
      lastModified: new Date(),
    };
  });
  return [
    {
      url: "https://honda-bam.com",
      lastModified: new Date(),
    },
    ...detailProduk,
  ];
}