import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useLocation } from "wouter";
import { 
  Truck, 
  Package, 
  Zap, 
  Box, 
  Send, 
  Globe, 
  Ship, 
  Warehouse 
} from "lucide-react";

export default function ServicesOverview() {
  const [, setLocation] = useLocation();

  const services = [
    {
      icon: Truck,
      name: "Road Haulage",
      description: "Reliable road transport solutions for all cargo sizes across the UK and Europe."
    },
    {
      icon: Package,
      name: "Pallet Delivery",
      description: "Secure and efficient pallet delivery services with tracking and handling care."
    },
    {
      icon: Zap,
      name: "Same Day Courier",
      description: "Urgent deliveries with same-day service for time-critical shipments."
    },
    {
      icon: Box,
      name: "Wooden Crates & Cases",
      description: "Custom wooden shipping solutions for fragile and valuable cargo protection."
    },
    {
      icon: Send,
      name: "Express Parcel",
      description: "Fast and secure parcel delivery with real-time tracking and insurance options."
    },
    {
      icon: Globe,
      name: "Freight Forwarding",
      description: "Complete freight management and coordination for international shipments."
    },
    {
      icon: Ship,
      name: "Sea Freight",
      description: "Comprehensive sea freight handling and port logistics management services."
    },
    {
      icon: Warehouse,
      name: "Warehousing",
      description: "Secure storage solutions with inventory management and distribution services."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive transport and logistics solutions tailored to meet your business needs with reliability and efficiency.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl card-hover border-0 h-full overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-purple-600 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-primary transition-colors duration-300">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-white/90 hover:bg-white shadow-lg border-0" />
          <CarouselNext className="right-0 bg-white/90 hover:bg-white shadow-lg border-0" />
        </Carousel>

        <div className="text-center mt-12">
          <Button 
            onClick={() => setLocation("/services")}
            className="bg-primary text-white hover:bg-blue-800"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
