import { useState } from "react";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import Link from "next/link";
import PromoBannerSlider from "./components/promo-banner-slider";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <>
      <PromoBannerSlider />

      <div className="mx-auto flex flex-col gap-8 py-8 lg:container lg:gap-10">
        <div className="px-5 lg:mt-2">
          <Categories />
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle className="pl-5">Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className="flex flex-col lg:flex-row">
          <Link href="/category/mouses" className="flex flex-1">
            <PromoBanner
              src="/banner-home-02.png"
              alt="Até 55% de desconto em mouses!"
              className="w-0 flex-1 px-5"
            />
          </Link>

          <Link href="/category/headphones" className="flex flex-1">
            <PromoBanner
              src="/banner-home-03.png"
              alt="Até 55% de desconto em fones!"
              className="hidden w-0 flex-1 lg:block"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle className="pl-5">Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <div>
          <Link href="/category/headphones">
            <PromoBanner
              src="/banner-home-03.png"
              alt="Até 55% de desconto em mouses!"
              className="px-5 lg:hidden"
            />
          </Link>

          <Link href="/catalog">
            <PromoBanner
              src="/free-shipping-banner.png"
              alt="Frete grátis para todo Brasil"
              className="hidden px-5 lg:block"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle className="pl-5">Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </>
  );
}
