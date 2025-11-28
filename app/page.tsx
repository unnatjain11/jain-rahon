import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";
import { CategorySection } from "@/components/category-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="container mx-auto px-4 py-12 space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Shop by Category
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Browse our wide Collection of Disposable products
          </p>
        </div>
        <CategorySection />
      </section>

      <section className="container mx-auto px-4 py-12 space-y-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Featured Products
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Check out our latest and most popular products
          </p>
        </div>

        <Tabs defaultValue="electronics" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="electronics">
              Food Packaging Essentials
            </TabsTrigger>
            <TabsTrigger value="watches">
              Hygiene & Daily Products
            </TabsTrigger>
          </TabsList>
          <TabsContent value="electronics" className="mt-6">
            <FeaturedProducts category="foodpacking" />
          </TabsContent>
          <TabsContent value="watches" className="mt-6">
            <FeaturedProducts category="hygiene" />
          </TabsContent>
        </Tabs>
      </section>

      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Choose Jain Traders?
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              We offer the best shopping experience with quality products and
              excellent service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="p-2 bg-primary/10 rounded-full">
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
                  <h3 className="text-xl font-bold">Free Shipping</h3>
                  <p className="text-muted-foreground">
                    On all orders above ₹999
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="p-2 bg-primary/10 rounded-full">
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
                  <h3 className="text-xl font-bold">Secure Payments</h3>
                  <p className="text-muted-foreground">Protected by Razorpay</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="p-2 bg-primary/10 rounded-full">
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
                  <h3 className="text-xl font-bold">Quality Guarantee</h3>
                  <p className="text-muted-foreground">15-day return policy</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
