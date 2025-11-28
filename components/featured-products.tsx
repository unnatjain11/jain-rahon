"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { useCart } from "@/components/cart-provider"
import { productData } from "@/lib/product-data"

type FeaturedProductsProps = {
  category: "foodpacking" | "hygiene" 
}

export function FeaturedProducts({ category }: FeaturedProductsProps) {
  const { addToCart } = useCart()
  let products: typeof productData.foodBeverageContainers = []

  if (category === "foodpacking") {
    products = [
      ...(productData.foodBeverageContainers ?? []), // Use optional chaining to avoid undefined
      ...(productData.wrappingPackingMaterials ?? []),
    ]
  } else if (category === "hygiene") {
    products = [
      ...(productData.cleaningHygieneProducts ?? []),
      ...(productData.fragranceFreshening ?? []),
    ]
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <CardContent className="p-0">
            <div className="relative">
              <Link href={`/products/${product.id}`}>
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>
              {product.badge && (
                <Badge className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs rounded shadow">
                  {product.badge}
                </Badge>
              )}
            </div>
            <div className="p-4">
              <Link href={`/products/${product.id}`}>
                <h3 className="font-medium hover:underline">{product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground">₹{product.price.toLocaleString()}</p>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button
              className="w-full"
              size="sm"
              onClick={() => addToCart({ ...product, image: product.images[0], quantity: 1 })}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
