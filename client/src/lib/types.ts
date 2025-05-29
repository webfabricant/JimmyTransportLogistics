export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  address: string[];
  phone: string;
  email: string;
  businessHours: string[];
}

export interface CompanyStats {
  experience: string;
  deliveries: string;
  satisfaction: string;
  teamMembers?: string;
}
