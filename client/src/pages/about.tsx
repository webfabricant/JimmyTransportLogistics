import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  const stats = [
    { value: "20+", label: "Years Experience", icon: Clock },
    { value: "50k+", label: "Deliveries Made", icon: CheckCircle },
    { value: "99%", label: "Client Satisfaction", icon: Award },
    { value: "150+", label: "Team Members", icon: Users }
  ];

  const values = [
    {
      title: "Reliability",
      description: "We deliver on our promises, every time. Your cargo arrives when and where it's supposed to."
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in every aspect of our service delivery."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to improve our services continuously."
    },
    {
      title: "Customer Focus",
      description: "Your success is our success. We tailor our services to meet your specific needs."
    }
  ];

  return (
    <div className="py-16 lg:py-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About Jimmy Transport Ltd</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted partner in transport and logistics, serving businesses across the UK with dedication, 
            expertise, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 mb-6">
              Founded over two decades ago, Jimmy Transport Ltd began as a small family business with a simple mission: 
              to provide reliable, efficient transport services that businesses could depend on.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Today, we've grown into one of the UK's most trusted logistics providers, but our core values remain unchanged. 
              We still treat every shipment with the same care and attention that built our reputation.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Our success is built on strong relationships with our clients, a dedicated team of professionals, 
              and a relentless focus on delivering exceptional service in everything we do.
            </p>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern transport fleet" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-blue-100 text-lg">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
          <p className="text-xl text-slate-600">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Behind every successful delivery is our dedicated team of logistics professionals, 
              drivers, and support staff who make it all possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Experienced Professionals</h3>
              <p className="text-lg text-slate-600 mb-6">
                Our team brings together decades of experience in transport and logistics, 
                with specialists in every area of our business.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Certified professional drivers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Logistics coordination specialists
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Customer service experts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Safety and compliance officers
                </li>
              </ul>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional logistics team" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Work With Us?</h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Experience the Jimmy Transport difference. Get in touch today to discuss your transport 
              and logistics needs with our expert team.
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
      </section>
    </div>
  );
}
