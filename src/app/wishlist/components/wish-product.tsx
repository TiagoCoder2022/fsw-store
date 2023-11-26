"use client";
import { CartContext, CartProduct } from "@/providers/cart";
import { ShoppingCartIcon, TrashIcon } from "lucide-react";
import { useContext, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface CartItemProps {
  product: CartProduct;
}

const WishProduct = ({ product }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);

  const { removeProductFromWishlist, addProductToCart } =
    useContext(CartContext);

  const handleremoveProductFromWishlistClick = () => {
    removeProductFromWishlist(product.id);
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Link href={`/product/${product.slug}`}>
          <div className=" relative flex w-full gap-4">
            <div className=" flex aspect-square h-[77px] w-[100px] items-center justify-center rounded-lg bg-accent lg:h-[130px] lg:w-[150px]">
              <Image
                src={product.imageUrls[0]}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
                alt={product.name}
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <p className="text-base lg:text-lg">{product.name}</p>

              <div className="flex w-full items-center justify-between gap-1">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-bold lg:text-base">
                    R$ {product.totalPrice.toFixed(2)}
                  </p>

                  {product.discountPercentage > 0 && (
                    <p className="text-xs line-through opacity-60 lg:text-sm">
                      R$ {Number(product.basePrice).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            onClick={handleremoveProductFromWishlistClick}
            className="gap-1 text-xs lg:text-sm"
          >
            Remover
            <TrashIcon size={16} />
          </Button>
          <Button
            className="gap-1 text-xs lg:text-sm"
            onClick={handleAddToCartClick}
          >
            Adicionar
            <ShoppingCartIcon size={16} />
          </Button>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default WishProduct;
