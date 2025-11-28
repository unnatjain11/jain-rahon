import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">About Jain Traders</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Your trusted destination for premium Quality Disposable Products
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2012, Jain Traders began with a simple mission: to provide high-quality disposable Products at
              affordable prices. What started as a small online store has grown into a trusted e-commerce platform
              serving customers nationwide.
            </p>
            <p className="text-muted-foreground">
              Our team of experts carefully selects each product in our inventory, ensuring that we only offer items
              that meet our strict quality standards. We believe that everyone deserves access to premium technology
              without breaking the bank.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/products/about-team.jpg"
              alt="Jaintraders team"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every product in our catalog undergoes rigorous testing to ensure it
                meets our high standards.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Affordability</h3>
              <p className="text-muted-foreground">
                We believe that premium products should be accessible to everyone. We work directly with manufacturers
                to offer competitive prices.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                Our customers are at the heart of everything we do. We strive to provide exceptional service and support
                at every step of your shopping journey.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Promise</h2>
              <p className="text-muted-foreground">
                At Jain Traders, we stand behind every product we sell. That's why we offer a 15-day return policy and a
                minimum 1-year warranty on all items. If you're not completely satisfied with your purchase, we'll make
                it right.
              </p>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline">Shop Now</Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Secure Payments</h3>
                  <p className="text-sm text-muted-foreground">All transactions are encrypted and secure</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Quality Guarantee</h3>
                  <p className="text-sm text-muted-foreground">All products are authentic and high-quality</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Fast Shipping</h3>
                  <p className="text-sm text-muted-foreground">Quick delivery across the country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
