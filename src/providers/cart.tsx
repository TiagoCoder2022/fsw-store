"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState, useMemo, useEffect } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}
export interface WishProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  wishlist: CartProduct[];
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subtotal: number;
  totaldiscount: number;
  addProductToCart: (product: CartProduct) => void;
  addProductToWishList: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
  removeProductFromWishlist: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  wishlist: [],
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  total: 0,
  subtotal: 0,
  totaldiscount: 0,
  addProductToCart: () => {},
  addProductToWishList: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
  removeProductFromWishlist: () => {},
});

const PRODUCTS_STORAGE_KEY = "@fsw-store/products";
const PRODUCT_WISHLIST_KEY = "@fsw-store/wishlist";

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>(
    JSON.parse(
      (typeof localStorage !== "undefined" &&
        localStorage.getItem(PRODUCTS_STORAGE_KEY)) ||
        "[]",
    ),
  );
  const [wishlist, setWishlist] = useState<CartProduct[]>(
    JSON.parse(
      (typeof localStorage !== "undefined" &&
        localStorage.getItem(PRODUCT_WISHLIST_KEY)) ||
        "[]",
    ),
  );

  useEffect(() => {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    // Atualize o localStorage sempre que a lista de desejos mudar
    localStorage.setItem(PRODUCT_WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  // Total sem descontos
  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);

  // Total com descontos
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity;
    }, 0);
  }, [products]);

  const totaldiscount = subtotal - total;

  const addProductToCart = (product: CartProduct) => {
    //se o produto já estiver no carrinho, apenas aumente a sua quantidade
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        }),
      );

      return;
    }

    // se nao, adicione o produto a lista
    setProducts((prev) => [...prev, product]);
  };

  const addProductToWishList = (product: CartProduct) => {
    //se o produto já estiver no carrinho, apenas aumente a sua quantidade

    // se nao, adicione o produto a lista
    setWishlist((prev) => [...prev, product]);
    console.log(wishlist);
  };

  const decreaseProductQuantity = (productId: string) => {
    // se a quantidade  for 1, remova o produto do carrinho
    // se nao, diminua a quantidade
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const increaseProductQuantity = (productId: string) => {
    // se a quantidade  for 1, remova o produto do carrinho
    // se nao, diminua a quantidade
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  const removeProductFromWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.filter((wishlistProduct) => wishlistProduct.id !== productId),
    );
  };
  return (
    <CartContext.Provider
      value={{
        wishlist,
        products,
        addProductToCart,
        addProductToWishList,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        removeProductFromWishlist,
        total,
        subtotal,
        totaldiscount,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
