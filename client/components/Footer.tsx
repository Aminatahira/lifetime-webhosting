import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ARZ Host</h3>
            <p className="text-gray-300 mb-4">
              Professional lifetime web hosting solutions with one-time payment.
              No renewals, no extra bills — ever.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                Website:{" "}
                <a
                  href="https://arzhost.com"
                  className="text-white hover:text-primary"
                >
                  arzhost.com
                </a>
              </p>
              <p>Phone: +1 (631) 594-8060</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a
                href="https://arzhost.com/about-us/"
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
              <a
                href="https://arzhost.com/contact-us/"
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Life Time Web Hosting
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <a
                href="https://arzhost.com/terms-conditions/"
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
              <a
                href="https://arzhost.com/privacy-policy/"
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="https://arzhost.com/disclaimer/"
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Disclaimer
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hosting Services</h4>
            <div className="space-y-2">
              <a
                href="https://arzhost.com/"
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Hosting Services
              </a>
              <a
                href="https://arzhost.com/"
                className="block text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                VPS Hosting Hong Kong
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; 2024 ARZ Host. All rights reserved. Professional lifetime web
            hosting solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
