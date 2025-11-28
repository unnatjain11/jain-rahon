"use client"

import React, { useState, use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/components/cart-provider"
import { ShoppingCart } from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { productData } from "@/lib/product-data"
import ReviewSection from './../../../components/ReviewSection';
import ReviewForm from './../../../components/ReviewForm';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductPageProps {
  params: Promise<{ id: string }>
}

type FeaturedProductsProps = {
  category: "food-beverage-containers" | "party-items" | "paper-printing-items" | "cleaning-hygiene-products" | "fragrance-freshening" | "carry-box-bags"
}

export function CategoryProducts({ category }: FeaturedProductsProps) {
  const { addToCart } = useCart();
  let products: typeof productData.foodBeverageContainers = []

  if (category === "food-beverage-containers") {
    products = [
      ...(productData.foodBeverageContainers ?? []),
    ]
  } else if (category === "party-items") {
    products = [
      ...(productData.partyItems ?? []),
    ]
  } else if (category === "paper-printing-items") {
    products = [
      ...(productData.paperPrintingItems ?? []),
    ]
  } else if (category === "cleaning-hygiene-products") {
    products = [
      ...(productData.cleaningHygieneProducts ?? []),
    ]
  } else if (category === "fragrance-freshening") {
    products = [
      ...(productData.fragranceFreshening ?? []),
    ]
  } else if (category === "carry-box-bags") {
    products = [
      ...(productData.carryGiftBags ?? []),
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
              <ReviewSection reviews={product.reviews} />
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button
              className="w-full"
              size="sm"
              onClick={() => {
                addToCart({ ...product, image: product.images[0], quantity: 1 }); // Add product to cart
              }}
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

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const [quantity, setQuantity] = useState<number>(1)
  const { toast } = useToast()
  const { addToCart } = useCart()

  const newProductNames: Record<string, string> = {
    "food-beverage-containers": "Food & Beverage Containers",
    "party-items": "Party Items ",
    "paper-printing-items": "Paper & Printing Items",
    "cleaning-hygiene-products": "Cleaning & Hygiene Products",
    "fragrance-freshening": "Fragrance & Freshening",
    "carry-box-bags": "Carry Bags & Boxes",
  }

  const product = Object.values(productData)
    .flat()
    .find((product) => product.id === id)

  if (!product) {
    if (Object.keys(newProductNames).includes(id)) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 capitalize">{newProductNames[id]}</h1>
          <CategoryProducts category={id as FeaturedProductsProps["category"]} />
        </div>
      )
    }

    return notFound()
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: newProductNames[product.id] || product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    })

    toast({
      title: "Added to cart",
      description: `${newProductNames[product.id] || product.name} (Qty: ${quantity}) has been added to your cart.`,
    })
  }

 const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current: number, next: number) => setCurrentImageIndex(next),
  };
  
  const handleReviewSubmit = (review: { rating: number; comment: string }) => {
    const newReview = {
      id: `rev-${Date.now()}`,
      userId: 'current-user-id', // Replace with actual user ID
      userName: 'Current User', // Replace with actual user name
      rating: review.rating,
      comment: review.comment,
      date: new Date().toISOString(),
    };
    product.reviews = [...(product.reviews || []), newReview];
    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback.",
    });
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const [selectedCategory, setSelectedCategory] = useState<string>("food-beverage-containers")
  const productsInCategory = productData[selectedCategory] || []

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images Slider */}
        <div className="space-y-4">
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <ImageWithFallback
                  src={image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer"
                onClick={() => setCurrentImageIndex(index)} // Change main image on click
              >
                <ImageWithFallback
                  src={image}
                  alt={product.name}
                  fill
                  className={`object-cover rounded-lg hover:opacity-75 ${index === currentImageIndex ? 'opacity-100' : 'opacity-50'}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <br>
            
            </br>
            <h1 className="text-3xl font-bold">
              {newProductNames[product.id] || product.name}
            </h1>
            <p className="text-2xl font-semibold text-primary mt-2">
              ₹{product.price.toLocaleString()}
            </p>
            <ReviewSection reviews={product.reviews} />
          </div>

          <p className="text-muted-foreground">{product.description || "No description available"}</p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features?.map((feature, index) => (
                <li key={index} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>

          <Card className="p-4">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Brand: {product.brand || "Jain Traders"}</p>
              <p>• Model: {product.model || "JTR-2024"}</p>
              <p>• Warranty: {product.warranty || "Mention on pack"}</p>
              <p>• Country of Origin: India</p>
            </div>
          </Card>
        </div>
      </div>
              
      <ReviewForm productId={product.id} onSubmit={handleReviewSubmit} />

      {/* Display Products in Selected Category */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Products in {newProductNames[selectedCategory]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsInCategory.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="p-0">
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
                    <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs rounded shadow">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-medium hover:underline">
                      {newProductNames[product.id] || product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <ReviewSection reviews={product.reviews} />
                </div>
                <div className="p-4 pt-0">
                  <Button
                    className="w-full"
                    size="sm"
                    onClick={() => {
                      addToCart({ ...product, image: product.images[0], quantity: 1 })
                      toast({
                        title: "Added to cart",
                        description: `${newProductNames[product.id] || product.name} has been added to your cart.`,
                      })
                    }}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
