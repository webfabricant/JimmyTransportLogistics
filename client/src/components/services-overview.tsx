import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-200">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-slate-900">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
