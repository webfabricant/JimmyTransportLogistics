# React Frontend Main Components - Part 3

## File 21: src/components/ContactForm.tsx
```tsx
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { sendContactEmail, emailSchema, type EmailFormData } from "@/lib/emailService"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const watchedService = watch("service")

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true)
    
    try {
      const success = await sendContactEmail(data)
      
      if (success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 2 hours.",
        })
        reset()
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    { value: "road-haulage", label: "Road Haulage" },
    { value: "pallet-delivery", label: "Pallet Delivery" },
    { value: "same-day-courier", label: "Same Day Courier" },
    { value: "wooden-crates", label: "Wooden Crates & Cases" },
    { value: "express-parcel", label: "Express Parcel" },
    { value: "freight-forwarding", label: "Freight Forwarding" },
    { value: "sea-freight", label: "Sea Freight" },
    { value: "warehousing", label: "Warehousing" },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            {...register("firstName")}
            className="focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.firstName && (
            <p className="text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            {...register("lastName")}
            className="focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {errors.lastName && (
            <p className="text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          {...register("email")}
          className="focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          {...register("phone")}
          className="focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {errors.phone && (
          <p className="text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Required *</Label>
        <Select value={watchedService} onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger className="focus:ring-2 focus:ring-primary focus:border-transparent">
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-sm text-red-600">{errors.service.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Please provide details about your requirements..."
          rows={4}
          {...register("message")}
          className="focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-purple-600 text-white hover:from-purple-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Quote Request"}
      </Button>
    </form>
  )
}
```

## File 22: src/components/Header.tsx
```tsx
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import QuoteModal from "./QuoteModal"

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/"
    }
    return location.pathname.startsWith(href)
  }

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-primary transition-all duration-300">
                  Jimmy Transport Ltd
                </h1>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-slate-600 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Quote
                </Button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-slate-200/50">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 font-medium transition-all duration-200 rounded-lg ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-slate-600 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsQuoteModalOpen(true)
                  }}
                  className="w-full mt-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-500 hover:to-yellow-600"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  )
}
```

## File 23: src/components/QuoteModal.tsx
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const navigate = useNavigate()

  const handleRedirectToContact = () => {
    onClose()
    navigate("/contact")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-slate-900">
            Quick Quote Request
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            Get a personalized quote for your transport needs. We'll respond within 2 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Button 
            onClick={handleRedirectToContact}
            className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400"
          >
            Continue to Full Form
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

## File 24: src/components/HeroSection.tsx
```tsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import QuoteModal from "./QuoteModal"

export default function HeroSection() {
  const navigate = useNavigate()
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const scrollToServices = () => {
    navigate("/services")
  }

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
  )
}
```

## Continue to Part 4 for pages and remaining components...