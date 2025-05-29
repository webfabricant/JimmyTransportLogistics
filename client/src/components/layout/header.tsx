import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import QuoteModal from "@/components/quote-modal";

export default function Header() {
  const [location] = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">Jimmy Transport Ltd</h1>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-yellow-500 text-slate-900 hover:bg-yellow-400"
                >
                  Get Quote
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsSheetOpen(false)}
                        className={`block px-3 py-2 font-medium transition-colors ${
                          isActive(item.href)
                            ? "text-slate-900"
                            : "text-slate-600 hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Button
                      onClick={() => {
                        setIsSheetOpen(false);
                        setIsQuoteModalOpen(true);
                      }}
                      className="mx-3 bg-yellow-500 text-slate-900 hover:bg-yellow-400"
                    >
                      Get Quote
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
}
