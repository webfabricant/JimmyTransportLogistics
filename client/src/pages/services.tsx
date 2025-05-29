import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      icon: Truck,
      name: "Road Haulage",
      description: "Reliable road transport solutions for all cargo sizes across the UK and Europe.",
      features: [
        "Full and partial loads",
        "Temperature-controlled transport",
        "Hazardous materials handling",
        "Real-time GPS tracking",
        "Flexible scheduling"
      ]
    },
    {
      icon: Package,
      name: "Pallet Delivery",
      description: "Secure and efficient pallet delivery services with tracking and handling care.",
      features: [
        "Standard and oversized pallets",
        "Secure handling protocols",
        "Proof of delivery",
        "Insurance coverage",
        "Next-day delivery options"
      ]
    },
    {
      icon: Zap,
      name: "Same Day Courier",
      description: "Urgent deliveries with same-day service for time-critical shipments.",
      features: [
        "Emergency deliveries",
        "Medical supplies transport",
        "Legal document delivery",
        "Live tracking updates",
        "Direct point-to-point service"
      ]
    },
    {
      icon: Box,
      name: "Wooden Crates & Cases",
      description: "Custom wooden shipping solutions for fragile and valuable cargo protection.",
      features: [
        "Custom-built crates",
        "Export quality standards",
        "Fragile item protection",
        "Industrial packaging",
        "Museum-quality handling"
      ]
    },
    {
      icon: Send,
      name: "Express Parcel",
      description: "Fast and secure parcel delivery with real-time tracking and insurance options.",
      features: [
        "Overnight delivery",
        "Signature required service",
        "Insurance up to £10,000",
        "SMS and email notifications",
        "Collection from your premises"
      ]
    },
    {
      icon: Globe,
      name: "Freight Forwarding",
      description: "Complete freight management and coordination for international shipments.",
      features: [
        "Customs clearance",
        "Documentation handling",
        "Multi-modal transport",
        "International network",
        "Trade compliance"
      ]
    },
    {
      icon: Ship,
      name: "Sea Freight",
      description: "Comprehensive sea freight handling and port logistics management services.",
      features: [
        "FCL and LCL shipments",
        "Port handling",
        "Container tracking",
        "Cargo consolidation",
        "Marine insurance"
      ]
    },
    {
      icon: Warehouse,
      name: "Warehousing",
      description: "Secure storage solutions with inventory management and distribution services.",
      features: [
        "Climate-controlled storage",
        "Inventory management systems",
        "Pick and pack services",
        "Distribution logistics",
        "24/7 security monitoring"
      ]
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive transport and logistics solutions tailored to meet your business needs with reliability and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Contact us today for a free quote tailored to your specific transport and logistics needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setLocation("/contact")}
                  className="bg-yellow-500 text-slate-900 hover:bg-yellow-400"
                >
                  Get Free Quote
                </Button>
                <Button 
                  onClick={() => setLocation("/contact")}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
