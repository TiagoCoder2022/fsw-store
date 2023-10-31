import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="relative">
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
          />
        ))}
      </div>
      <div className="absolute left-5 top-[40%] -translate-x-0 translate-y-[-50%] cursor-pointer text-2xl">
        <ChevronLeftIcon size={36} />
      </div>
      <div className="absolute right-5 top-[40%] -translate-x-0 translate-y-[-50%] cursor-pointer text-2xl">
        <ChevronRightIcon size={36} />
      </div>
    </div>
  );
};

export default ProductList;
