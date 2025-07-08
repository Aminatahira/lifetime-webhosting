import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  useEffect(() => {
    // Redirect to arzhost.com after a brief moment
    const timer = setTimeout(() => {
      window.location.href = "https://www.arzhost.com/disclaimer/";
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <h1 className="text-2xl font-semibold mb-2">
            Redirecting to Disclaimer
          </h1>
          <p className="text-muted-foreground">
            Taking you to our disclaimer page...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
