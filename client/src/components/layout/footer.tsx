import { Link } from "wouter";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Road Haulage",
    "Pallet Delivery",
    "Same Day Courier",
    "Freight Forwarding",
    "Warehousing"
  ];

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
                    href={item.href} 
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
                    href="/services" 
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
  );
}
