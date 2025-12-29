"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useCart } from "@/components/cart-provider"
import { Menu, ShoppingCart } from "lucide-react"
import { CartBadge } from "./cart-badge"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

type UserType = {
  id: number
  firstName: string
  lastName: string
  email: string
  isAdmin: boolean
} | null

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { cartItems, getCartQuantity } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<UserType>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/products",
      label: "Products",
      active: pathname.startsWith("/products"),
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto px-4 flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="grid gap-6 text-lg font-medium">
              <a href="/" className="flex items-center space-x-2 text-sm font-bold" onClick={() => setIsOpen(false)}>
                <span>Jain Traders</span>
              </a>
              {routes.map((route) => (
                <a
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    route.active ? "text-foreground" : "text-foreground/60",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">Jain Traders</span>
        </a>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/products"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">All Products</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Browse our complete collection of Disposable and Hygiene products
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/products/food-beverage-containers">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Food & Beverage Containers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Quality containers for serve Food and Drinks
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/products/party-items">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Party Items</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Decoration items for Special Occasions
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/products/paper-printing-items">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Paper & Printing Items</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Printing, Branding and Communication
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/products/cleaning-hygiene-products">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cleaning & Hygiene Products</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Personal or Environmental Cleanliness
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/products/fragrance-freshening">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Fragrance & Freshening</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            For Improving the smell of a room or area
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="/products/carry-box-bags">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Carry Bags & Boxes</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Used for carrying or presenting Something
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/about" className={navigationMenuTriggerStyle()}>
                  About
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <a href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <CartBadge />
                <span className="sr-only">Cart</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}