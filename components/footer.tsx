import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-bold">Jain Traders</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Your one-stop shop for disposable and hygiene daily use products . Quality products at affordable prices.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/jaintradersrahon.in?igsh=MXE2cmIxbGxnem50Yw=="
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/products/food-beverage-containers" className="text-muted-foreground hover:text-foreground">
                  Food & Beverage Containers
                </Link>
              </li>
              <li>
                <Link href="/products/party-items" className="text-muted-foreground hover:text-foreground">
                  Party Items
                </Link>
              </li>
              <li>
                <Link href="/products/paper-printing-items" className="text-muted-foreground hover:text-foreground">
                  Paper & Printing Items
                </Link>
              </li>
              <li>
                <Link href="/products/cleaning-hygiene-products" className="text-muted-foreground hover:text-foreground">
                  Cleaning & Hygiene Products
                </Link>
              </li>
              <li>
                <Link href="/products/fragrance-freshening" className="text-muted-foreground hover:text-foreground">
                  Fragrance & Freshening
                </Link>
              </li>
              <li>
                <Link href="/products/carry-box-bags" className="text-muted-foreground hover:text-foreground">
                  Carry Bags & Box 
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-muted-foreground hover:text-foreground">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jain Traders. All rights reserved by Unnat Jain. 
          </p>
        </div>
      </div>
    </footer>
  )
}
