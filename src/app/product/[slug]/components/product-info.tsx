"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { useToast } from "@/components/ui/use-toast";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { HeartIcon } from "lucide-react";
import { ChevronLeftIcon, ChevronRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}
const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { toast } = useToast();

  const { addProductToWishList } = useContext(CartContext);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToWishList = () => {
    addProductToWishList({ ...product, quantity });
    toast({
      title: "Sucesso!",
      description: "Item adicionado aos Favoritos",
    });
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
    toast({
      title: "Sucesso!",
      description: "Item adicionado ao carrinho",
    });
  };

  return (
    <div className="flex flex-col px-5 lg:w-[40%] lg:rounded-lg lg:bg-accent lg:p-10">
      <div className="flex justify-between">
        <h2 className="text-lg lg:text-2xl">{product.name}</h2>
        <div className=" bottom-3 right-3 cursor-pointer">
          <HeartIcon onClick={handleAddToWishList} size={24} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          De: R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          onClick={handleDecreaseQuantityClick}
          size="icon"
          variant="outline"
        >
          <ChevronLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          onClick={handleIncreaseQuantityClick}
          size="icon"
          variant="outline"
        >
          <ChevronRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-6 flex items-center justify-between rounded-lg bg-accent px-5 py-2 lg:bg-[#2A2A2A]">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket</span>
            </p>
            <p className="text-xs text-[#8162ff]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
