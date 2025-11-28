import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function CategorySection() {
  const categories = [
    {
      name: "Food & Beverage Containers",
      image: "/products/containername.jpeg",
      href: "/products/food-beverage-containers", // Updated href
    },
    {
      name: "Paper & Printing Items",
      image: "/products/printing.png",
      href: "/products/paper-printing-items", // Updated href
    },
    {
      name: "Cleaning & Hygiene Products",
      image: "/products/cleaning.jpeg",
      href: "/products/cleaning-hygiene-products", // Updated href
    },
    {
      name: "Fragrance & Freshening",
      image: "/products/toby.png",
      href: "/products/fragrance-freshening", // Updated href
    },
    {
      name: "Party Items",
      image: "/products/partyitems.png",
      href: "/products/party-items", // Updated href
    },
    {
      name: "Carry & Gift Bags",
      image: "/products/bags.jpeg",
      href: "/products/carry-box-bags", // Updated href
    },
    
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">{category.name}</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
