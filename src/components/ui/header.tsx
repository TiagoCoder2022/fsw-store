"use client";
import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  LogOutIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
  PackageSearchIcon,
  SearchIcon,
  HeartIcon,
  User,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import Cart from "./cart";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const { status, data } = useSession();

  const { products } = useContext(CartContext);

  const cartQuantityItems = products.length;

  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <>
      <Card className=" fixed top-0 z-50 hidden h-28 w-full bg-background tracking-[0.22px] shadow-lg shadow-[#2A0E61]/50 md:block lg:block">
        <div className="container mx-auto flex flex-row items-center justify-between py-10 text-sm lg:text-base">
          <div>
            <Link href="/">
              <h1 className="text-base font-semibold lg:text-lg">
                <span className="text-primary">FSW</span> Store
              </h1>
            </Link>
          </div>
          <ul className="hidden flex-row items-center justify-end gap-8 md:flex lg:gap-10">
            <li>
              <a
                href="/"
                className=" text-white transition duration-300 hover:text-primary"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="/deals"
                className=" text-white transition duration-300 hover:text-primary"
              >
                Ofertas
              </a>
            </li>
            <li>
              <a
                href="/catalog"
                className=" text-white transition duration-300 hover:text-primary"
              >
                Catálogo
              </a>
            </li>
            <li>
              {status === "authenticated" && data?.user ? (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <p className="text-sm ">
                          <span className="opacity-75">Olá</span>{" "}
                          {data.user.name}!
                        </p>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>
                          <a
                            href="/orders"
                            className="whitespace-no-wrap flex w-full items-center justify-center gap-2 truncate px-[22px] py-3 text-sm hover:bg-accent"
                          >
                            Meus Pedidos
                          </a>
                          <a
                            href="/wishlist"
                            className="whitespace-no-wrap flex w-full items-center justify-center gap-2 truncate px-[22px] py-3 text-sm hover:bg-accent"
                          >
                            Meus Favoritos
                          </a>
                          <a
                            onClick={handleLogoutClick}
                            className="whitespace-no-wrap flex w-full cursor-pointer items-center justify-center gap-2 truncate px-[22px] py-3 text-sm hover:bg-accent"
                          >
                            Fazer Logout
                            <LogOutIcon size={16} />
                          </a>
                        </NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <div>
                  <a
                    onClick={handleLoginClick}
                    className="whitespace-no-wrap h-10 cursor-pointer rounded-md px-4 py-3 text-sm transition duration-300 hover:bg-accent lg:text-base"
                  >
                    <User className="mr-2 inline-block" size={16} />
                    <span>Fazer Login</span>
                  </a>
                </div>
              )}
            </li>
            <li className="">
              <Sheet>
                <SheetTrigger>
                  <a className="rounded-full bg-primary px-5 py-3 text-white md:text-sm">
                    <ShoppingCartIcon className="mr-2 inline-block" />
                    Cart ({cartQuantityItems})
                  </a>
                </SheetTrigger>

                <SheetContent className="w-[350px] lg:w-[600px] lg:max-w-[600px]">
                  <Cart />
                </SheetContent>
              </Sheet>
            </li>
          </ul>
        </div>
      </Card>

      <Card className=" flex items-center justify-between p-[1.875rem] md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data?.user?.image && (
                      <AvatarImage src={data?.user?.image} />
                    )}
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium">{data.user.name}</p>
                    <p className="text-sm opacity-75">Boas compras!</p>
                  </div>
                </div>
                <Separator />
              </div>
            )}

            <div className="mt-4 flex flex-col gap-3">
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} />
                  Fazer Login
                </Button>
              )}
              {status === "authenticated" && (
                <Button
                  onClick={handleLogoutClick}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogOutIcon size={16} />
                  Fazer Logout
                </Button>
              )}

              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              {status === "authenticated" ? (
                <SheetClose asChild>
                  <Link href="/orders">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <PackageSearchIcon size={16} />
                      Meus Pedidos
                    </Button>
                  </Link>
                </SheetClose>
              ) : null}

              {status === "authenticated" ? (
                <SheetClose asChild>
                  <Link href="/wishlist">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <HeartIcon size={16} />
                      Meus Favoritos
                    </Button>
                  </Link>
                </SheetClose>
              ) : null}

              <SheetClose asChild>
                <Link href="/deals">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PercentIcon size={16} />
                    Ofertas
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <h1 className="mt-2 text-lg font-semibold">
            <span className="text-primary">FSW</span> Store
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="outline" className="relative">
              {cartQuantityItems > 0 && (
                <span className="absolute right-[calc(-1.25rem/2)] top-[calc(-1.25rem/2)] flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-sm font-bold">
                  {cartQuantityItems}
                </span>
              )}
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[350px]">
            <Cart />
          </SheetContent>
        </Sheet>
      </Card>
    </>
  );
};

export default Header;
