import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: [
        "Transport House, Industrial Estate",
        "Manchester, M1 2AB",
        "United Kingdom"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["+44 161 123 4567"],
      subtitle: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@jimmytransportltd.co.uk"],
      subtitle: "We reply within 2 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: [
        "Monday - Friday: 7:00 AM - 7:00 PM",
        "Saturday: 8:00 AM - 4:00 PM",
        "Sunday: Emergency calls only"
      ]
    }
  ];

  return (
    <div className="py-16 lg:py-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your transport needs? Contact us today for a free quote or consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Request a Quote</h3>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-slate-600">
                          {line}
                          {lineIndex < info.content.length - 1 && <br />}
                        </p>
                      ))}
                      {info.subtitle && (
                        <p className="text-sm text-slate-500 mt-1">{info.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Modern warehouse with loading docks and transport trucks" 
                className="rounded-xl shadow-lg w-full h-48 object-cover" 
              />
              <div className="absolute inset-0 bg-primary/20 rounded-xl flex items-center justify-center">
                <div className="bg-white/90 text-primary px-6 py-3 rounded-lg font-semibold">
                  Our Facility
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">Emergency Services</h4>
                <p className="text-blue-100 text-sm mb-3">
                  We provide 24/7 emergency transport services for urgent deliveries. 
                  Our dedicated emergency line is always staffed.
                </p>
                <p className="text-white font-medium">Emergency Line: +44 161 123 4567</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
