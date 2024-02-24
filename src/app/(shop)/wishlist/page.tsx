"use client";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "@/providers/cart";
import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { HeartIcon } from "lucide-react";
import WishProduct from "./components/wish-product";
import Loading from "./components/loading";

const WishList = () => {
  const [loading, setLoading] = useState(true);

  const { wishlist } = useContext(CartContext);

  useEffect(() => {
    // Aguarda 2 segundos para que os produtos sejam carregados
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto p-5">
      <Badge variant="heading">
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
