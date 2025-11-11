import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 animate-fade-in">
            <Logo />
            <p className="text-sm text-muted-foreground">Connect with our social media and other sites to keep up to date</p>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-lg">Services</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Groceries
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Food
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Parcels
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold text-lg">Support</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60">© 2025 Yumyfy. All rights reserved.</p>
          <div className="flex gap-6 text-foreground/60">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
