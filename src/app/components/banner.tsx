"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import Image from "next/image";
import Banner1 from "@/image/banner1.jpg";
import Banner2 from "@/image/banner2.jpg";
import axios from "axios";

export default function Banner() {
  const [products, setProducts] = useState([
    { id: 1, img: "../../image/banner1.jpg" },
    { id: 2, img: "../../image/banner2.jpg" },
  ]);
  const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;
  const UNSPLASH_ROOT = "https://api.unsplash.com";

  useEffect(() => {
    const getPhotosByQuery = async ({ query }: { query: string }) => {
      const { data } = await axios.get(
        `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=20`
      );

      setProducts(data);
      return data;
    };
  }, []);

  // const productTemplate = (product) => {
  //   return (
  //     <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
  //       <div className="mb-3">
  //         <img
  //           src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
  //           alt={product.name}
  //           className="w-6 shadow-2"
  //         />
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div>
      <Carousel
        value={products}
        numVisible={1}
        numScroll={1}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        // itemTemplate={productTemplate}
      />
    </div>
  );
}
