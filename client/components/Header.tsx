import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">ARZ Host</div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="https://arzhost.com/about-us/"
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Us
            </a>
            <a
              href="https://arzhost.com/contact-us/"
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
            <a
              href="https://arzhost.com/terms-conditions/"
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
            <a
              href="https://arzhost.com/privacy-policy/"
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://arzhost.com/disclaimer/"
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disclaimer
            </a>
            <a
              href="https://arzhost.com/lifetime-web-hosting/"
              className="text-primary font-medium hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Life Time Web Hosting
            </a>
          </nav>

          <Button asChild className="hidden md:inline-flex">
            <a
              href="https://arzhost.com/lifetime-web-hosting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
