import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import QuoteModal from "./quote-modal";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const scrollToServices = () => {
    setLocation("/services");
  };

  return (
    <>
      <section className="relative bg-white overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/80"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Transport & Logistics Partner
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Professional road haulage, freight forwarding, and logistics solutions across the UK. 
              Fast, reliable, and efficient service you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsQuoteModalOpen(true)}
                size="lg"
                className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 transform hover:scale-105 transition-all"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={scrollToServices}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
}
