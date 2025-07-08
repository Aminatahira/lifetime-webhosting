import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <a
              href="https://arzhost.com/lifetime-web-hosting/"
              className="text-primary hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lifetime Web Hosting
            </a>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            One-Time Payment. Unlimited Hosting. Forever.
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Tired of paying hosting fees every month or year? Now, host your
            website for life with our one-time payment web hosting plans.
            Whether you're launching a blog, business, agency, or portfolio
            site, our lifetime web hosting solution gives you everything you
            need without recurring costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose Your Lifetime Hosting Plan
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Instant Setup
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Lifetime Web Hosting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  One-Time Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Pay once, and you're set for life. No renewals, no extra bills
                  — ever.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  Host Unlimited Websites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Choose a plan that lets you host 1, 5, or even unlimited
                  websites with zero restrictions on bandwidth or traffic.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🆓</span>
                  Free Website Hosting for Life
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Get started with free hosting for personal or simple websites
                  — reliable, secure, and completely cost-free.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📧</span>
                  Lifetime Email Hosting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Create and manage professional email accounts linked to your
                  domain, included in all paid plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  Free SSL & Backups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Keep your data secure with free lifetime SSL certificates and
                  automated weekly backups always included.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Performance & Reliability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Built for performance, stability, and simplicity with
                  professional support when you need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Transparent Lifetime Hosting Plans
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Choose the plan that fits your goals. Simple, secure, and no renewal
            fees ever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Starter Life Host</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$69.99</span>
                  <p className="text-muted-foreground">One-Time Payment</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center mb-4">
                  <Badge variant="secondary">Host 1 Website</Badge>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Lifetime Email
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Free SSL Certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Weekly Backups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    cPanel Access
                  </li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choose Plan
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-center">Advanced Lifetime</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$98.99</span>
                  <p className="text-muted-foreground">One-Time Payment</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center mb-4">
                  <Badge variant="secondary">Host up to 5 Websites</Badge>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Free Domain
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Unlimited Email & Storage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Free SSL Certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Weekly Backups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    cPanel Access
                  </li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choose Plan
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center">Unlimited Pro</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$148.99</span>
                  <p className="text-muted-foreground">One-Time Payment</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center mb-4">
                  <Badge variant="secondary">Unlimited Websites</Badge>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Unlimited Domains
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Unlimited Email Accounts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Unlimited Bandwidth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Priority Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    All Advanced Features
                  </li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choose Plan
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                100% lifetime access
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                No hidden charges
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                Free migration
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                24/7 support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Free & Paid Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Free & Paid Lifetime Hosting Options
          </h2>
          <p className="text-center text-lg mb-12 max-w-4xl mx-auto">
            Looking for free unlimited web hosting lifetime solutions? We've got
            you covered. Start with a basic free account — perfect for students,
            hobbyists, or landing pages and upgrade anytime as your needs grow.
            Or, go pro with a{" "}
            <a
              href="https://arzhost.com/lifetime-web-hosting/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              web hosting lifetime deal
            </a>{" "}
            that unlocks unlimited potential, full control, and scalable growth.
          </p>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who Is This For?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bloggers & Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Launch once and forget about hosting fees forever.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Freelancers & Developers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Manage client websites with one-time investment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Startups & SMBs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Eliminate monthly hosting costs while scaling up.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Educational & Nonprofit Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Host long-term initiatives securely and affordably.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Lifetime Hosting Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Lifetime Hosting Is a Smarter Choice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>No renewal stress or expiring plans</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Unlimited growth potential with scalable plans</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Peace of mind with lifetime access</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Budget-friendly and future-ready</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Built for performance, stability, and simplicity</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>
                  Professional support from{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ARZ Host
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Is lifetime hosting really for life?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! You make a one-time payment and get permanent access to
                  your hosting plan. This is a genuine lifetime commitment from{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    our hosting services
                  </a>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I really host unlimited websites?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. With the Unlimited Pro plan, you can host as many
                  websites as you like — forever. No restrictions on bandwidth
                  or traffic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is there a free lifetime hosting plan?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Our basic tier allows users to host simple websites with
                  no charge — forever. Perfect for personal projects and getting
                  started.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Does it include email and SSL?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. All paid plans come with lifetime email hosting, free SSL
                  certificates, backups, and more. Everything you need for a
                  professional web presence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can I upgrade if I need more resources?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade anytime without losing your existing
                  content or setup. Our team will help you migrate seamlessly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  What about VPS hosting options?
                </AccordionTrigger>
                <AccordionContent>
                  We also offer{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VPS hosting Hong Kong
                  </a>{" "}
                  solutions for more advanced hosting needs. Contact us to learn
                  more about our enterprise solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Host for Life?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            "Don't let monthly bills slow you down. Go live once and stay live
            forever. With lifetime web hosting, you're investing in long-term
            peace of mind, reliability, and freedom."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-primary"
              asChild
            >
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose Your Lifetime Hosting Plan
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Instant Setup
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
