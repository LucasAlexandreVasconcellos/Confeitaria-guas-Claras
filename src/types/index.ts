export type ProductCategory = 
  | 'tortas-doces' 
  | 'bolos-festas' 
  | 'sobremesas-assinatura' 
  | 'cafeteria-salgados';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  description: string;
  image: string;
  isProvisional: boolean; // Marcação técnica exigida para indicar foto em substituição
  highlights?: string[];
  servings?: string;
  isSpecialty?: boolean;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  address: {
    street: string;
    mall: string;
    unit: string;
    reference: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekdays: string;
    weekends: string;
  };
  contacts: {
    whatsappNumber: string;
    whatsappFormatted: string;
    instagramHandle: string;
    instagramUrl: string;
    ifoodUrl: string;
    mapsUrl: string;
    mapsEmbedUrl: string;
  };
}
