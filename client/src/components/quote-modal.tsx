import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [, setLocation] = useLocation();

  const handleRedirectToContact = () => {
    onClose();
    setLocation("/contact");
  };

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
  );
}
