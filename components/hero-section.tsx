import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Welcome to</h1>
               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Jain Traders</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Your Source for Premium Disposable Products and Supplying Smart solutions for Every Occasion
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center space-y-4">
                  <h2 className="text-2xl md:text-4xl font-bold">Festival season Sale</h2>
                  <p className="text-lg md:text-xl">Up to 50% off on selected items</p>
                  <Link href="/products/cleaning-hygiene-products">
                    <Button variant="secondary" size="lg">
                      View Offers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
