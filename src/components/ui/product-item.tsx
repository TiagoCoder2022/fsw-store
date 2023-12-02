import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discount-badge";
import { cn } from "@/lib/utils";
import ProductItemImg from "./product-item-img";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  className?: string;
}
const ProductItem = ({ product, className }: ProductItemProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn("flex min-w-[156px] flex-col gap-3", className)}
    >
      <div className="relative">
        <ProductItemImg src={product.imageUrls[0]} alt={product.name} />

        {product.discountPercentage > 0 && (
          <DiscountBadge className="absolute left-3 top-3">
            {product.discountPercentage}
          </DiscountBadge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="truncate text-sm">{product.name}</p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="truncate font-semibold lg:text-lg">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="truncate text-xs line-through opacity-75 lg:text-sm">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="truncate text-sm font-semibold">
              R$ {product.basePrice.toString()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
