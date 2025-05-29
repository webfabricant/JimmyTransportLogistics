import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import QuoteModal from "./quote-modal";

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const scrollToServices = () => {
    setLocation("/services");
  };

  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
        {/* Animated background pattern */}
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-300 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-white/90 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                UK's Leading Transport Solutions
                <Star className="w-4 h-4" />
              </div>

              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Your <span className="text-gradient">Trusted</span> Transport Partner
                </h1>
                <p className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed">
                  Professional road haulage, freight forwarding, and logistics solutions across the UK. 
                  Fast, reliable, and efficient service you can count on.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group px-8 py-4 text-lg font-semibold"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={scrollToServices}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 glass-effect backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  View Services
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">20+</div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50k+</div>
                  <div className="text-white/70 text-sm">Deliveries Made</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99%</div>
                  <div className="text-white/70 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern transport fleet" 
                  className="relative rounded-3xl shadow-2xl animate-float"
                />
                
                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-white text-sm font-semibold">Real-time Tracking</div>
                  <div className="text-white/70 text-xs">Always know where your cargo is</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 animate-float" style={{ animationDelay: '3s' }}>
                  <div className="text-white text-sm font-semibold">24/7 Support</div>
                  <div className="text-white/70 text-xs">We're here when you need us</div>
                </div>
              </div>
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
