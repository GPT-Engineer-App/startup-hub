import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Github, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">SaaSLogo</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Revolutionize Your Workflow</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Streamline your business processes with our cutting-edge SaaS solution.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
          <img src="/placeholder.svg" alt="Product illustration" className="mx-auto mt-16 max-w-full h-64 object-cover" />
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
            <p className="text-center mb-12 text-gray-600">Discover how our platform can transform your business</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <CheckCircle className="h-8 w-8 text-primary" />, title: "Automated Workflows", description: "Streamline your processes with intelligent automation" },
                { icon: <CheckCircle className="h-8 w-8 text-primary" />, title: "Real-time Analytics", description: "Gain insights with powerful data visualization tools" },
                { icon: <CheckCircle className="h-8 w-8 text-primary" />, title: "Seamless Integration", description: "Connect with your favorite tools and services" },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {feature.icon}
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Basic", price: "$9.99", description: "Perfect for small teams" },
                { title: "Pro", price: "$19.99", description: "Ideal for growing businesses" },
                { title: "Enterprise", price: "Custom", description: "Tailored solutions for large organizations" },
              ].map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{plan.price}</p>
                    <p className="text-sm text-gray-500">{plan.price === "Custom" ? "Contact us" : "per user / month"}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Choose Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-gray-600 mb-4">
                  We're a team of passionate individuals dedicated to revolutionizing the way businesses operate. 
                  Our mission is to provide innovative SaaS solutions that empower organizations to achieve their full potential.
                </p>
                <Button variant="outline">Learn More About Our Story</Button>
              </div>
              <div className="md:w-1/2">
                <img src="/placeholder.svg" alt="About us illustration" className="mx-auto max-w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <p className="text-center mb-8 text-gray-600">Have questions? We're here to help!</p>
            <form className="max-w-md mx-auto">
              <div className="grid gap-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 SaaS Company. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Github size={24} /></a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;