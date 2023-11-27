"use client";
import React, { useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CartContext } from "@/providers/cart";
import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { HeartIcon } from "lucide-react";
import WishProduct from "./components/wish-product";
import Loading from "./components/loading";

const WishList = () => {
  const [loading, setLoading] = useState(true);

  const handleremoveProductFromCartClick = () => {
    //removeProductFromCart(product.id);
  };
  const { wishlist } = useContext(CartContext);

  useEffect(() => {
    // Simule uma requisição assíncrona para obter os dados da wishlist
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Tempo de simulação de carregamento (pode ser substituído por uma chamada de API real)
  }, []);

  const { data } = useSession();

  return (
    <div className="container mx-auto p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <HeartIcon size={16} />
        Favoritos
      </Badge>
      <div className="m-auto flex h-full w-full max-w-5xl flex-col gap-4 py-6">
        {loading ? (
          <Loading />
        ) : wishlist.length > 0 ? (
          wishlist.map((product) => (
            <WishProduct
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="text-center font-semibold">Lista vazia.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
