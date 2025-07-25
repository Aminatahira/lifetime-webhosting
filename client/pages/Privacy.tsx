import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  useEffect(() => {
    // Redirect to arzhost.com after a brief moment
    const timer = setTimeout(() => {
      window.location.href = "https://arzhost.com/privacy-policy/";
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
            Redirecting to Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Taking you to our privacy policy page...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
