"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { productData, Product } from "@/lib/product-data"

export default function ProductsPage() {
  const { addToCart } = useCart()
  const { toast } = useToast()
  
  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, image: product.images[0], quantity: 1 })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }
  
  // Create a list of featured products from all categories with safe fallback to empty array
  const featuredProducts = [
    ...(productData.foodBeverageContainers ?? []).slice(0, 2),
    ...(productData.partyItems ?? []).slice(0, 2),
    ...(productData.paperPrintingItems ?? []).slice(0, 1),
    ...(productData.cleaningHygieneProducts ?? []).slice(0, 1),
    ...(productData.fragranceFreshening ?? []).slice(0, 1),
    ...(productData.carryBoxBags ?? []).slice(0, 1),
  ]

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
          <p className="text-muted-foreground">Browse our collection of products across categories</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/products/food-beverage-containers">
            <Button variant="outline">Food & Beverage Containers</Button>
          </Link>
          <Link href="/products/party-items">
            <Button variant="outline">Party Items</Button>
          </Link>
          <Link href="/products/paper-printing-items">
            <Button variant="outline">Paper & Printing Items</Button>
          </Link>
          <Link href="/products/cleaning-hygiene-products">
            <Button variant="outline">Cleaning & Hygiene Products</Button>
          </Link>
          <Link href="/products/fragrance-freshening">
            <Button variant="outline">Fragrance & Freshening</Button>
          </Link>
          <Link href="/products/carry-box-bags">
            <Button variant="outline">Carry & box Bags</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative">
                <Link href={`/products/${product.id}`}>
                  <div className="overflow-hidden">
                    <Image
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
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <CategoryCard 
            title="Food & Beverage Containers" 
            image="/products/containername.jpeg" 
            href="/products/food-beverage-containers" 
          />
          <CategoryCard 
            title="Party Items " 
            image="/products/partyitems.png" 
            href="/products/party-items" 
          />
          <CategoryCard 
            title="Paper & Printing Items" 
            image="/products/printing.png" 
            href="/products/paper-printing-items" 
          />
          <CategoryCard 
            title="Cleaning & Hygiene Products" 
            image="/products/cleaning.jpeg" 
            href="/products/cleaning-hygiene-products" 
          />
          <CategoryCard 
            title="Fragrance & Freshening" 
            image="/products/toby.png" 
            href="/products/fragrance-freshening" 
          />
          <CategoryCard 
            title="Carry & box Bags" 
            image="/products/bags.jpeg" 
            href="/products/carry-box-bags" 
          />
        </div>
      </div>
    </div>
  )
}

function CategoryCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative">
            <div className="overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{title}</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
