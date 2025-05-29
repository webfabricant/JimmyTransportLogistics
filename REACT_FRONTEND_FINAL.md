# Complete React Frontend - Final Files

## File 25: src/components/Footer.tsx
```tsx
import { Link } from "react-router-dom"

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  const services = [
    "Road Haulage",
    "Pallet Delivery", 
    "Same Day Courier",
    "Freight Forwarding",
    "Warehousing"
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Jimmy Transport Ltd</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Your trusted partner for reliable transport and logistics solutions across the UK. 
              Professional, efficient, and always on time.
            </p>
            <div className="text-sm text-slate-400">
              <p>Licensed Operator: OD123456789</p>
              <p>VAT Registration: GB 123 4567 89</p>
              <p>Company Registration: 12345678</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Jimmy Transport Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

## File 26: src/pages/Home.tsx
```tsx
import HeroSection from "@/components/HeroSection"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { CheckCircle, Clock, Shield, Phone } from "lucide-react"
import { 
  Truck, 
  Package, 
  Zap, 
  Box, 
  Send, 
  Globe, 
  Ship, 
  Warehouse 
} from "lucide-react"

export default function Home() {
  const navigate = useNavigate()

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
  ]

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
  ]

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "50k+", label: "Deliveries Made" },
    { value: "99%", label: "Client Satisfaction" }
  ]

  return (
    <div>
      <HeroSection />
      
      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive transport and logistics solutions tailored to meet your business needs with reliability and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl card-hover border-0 h-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl text-slate-900 group-hover:text-primary transition-colors duration-300 font-semibold mb-3">{service.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate("/services")}
              className="bg-primary text-white hover:bg-blue-800"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

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
                onClick={() => navigate("/about")}
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
  )
}
```

## File 27: src/pages/Contact.tsx
```tsx
import ContactForm from "@/components/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

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
  ]

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
  )
}
```

## Setup Instructions

1. Create a new React project directory
2. Copy all files to their respective locations
3. Run `npm install` to install dependencies
4. Set up EmailJS account at emailjs.com
5. Update `src/lib/emailService.ts` with your EmailJS credentials
6. Run `npm run dev` to start development server

## EmailJS Setup

1. Sign up at emailjs.com
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - from_name
   - from_email  
   - phone
   - service
   - message
   - to_name
4. Get your Service ID, Template ID, and Public Key
5. Update the credentials in emailService.ts

The contact form will automatically send professional emails when customers submit inquiries.