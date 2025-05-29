import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CheckCircle, Clock, Shield, Phone } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const whyChooseUsFeatures = [
    {
      icon: Clock,
      title: "Always On Time",
      description: "Punctual delivery schedules with real-time tracking and proactive communication."
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage for complete protection of your valuable cargo."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support for any questions or urgent requirements."
    }
  ];

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "50k+", label: "Deliveries Made" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div>
      <HeroSection />
      
      <ServicesOverview />

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">About Jimmy Transport Ltd</h2>
              <p className="text-lg text-slate-600 mb-6">
                With over two decades of experience in the transport and logistics industry, Jimmy Transport Ltd has built a reputation for reliability, efficiency, and exceptional customer service across the UK.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our commitment to excellence drives everything we do, from our state-of-the-art fleet management to our dedicated customer support team. We understand that your cargo is more than just freight – it's your business, and we treat it with the care and urgency it deserves.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => setLocation("/about")}
                className="bg-primary text-white hover:bg-blue-800"
              >
                Learn More About Us
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional logistics team at modern warehouse facility" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Fully Licensed & Insured</div>
                    <div className="text-sm text-slate-600">Complete peace of mind</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-gradient">Jimmy Transport</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart in the transport industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <feature.icon className="w-10 h-10 text-primary group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
