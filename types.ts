import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServicePackage {
  title: string;
  duration?: string;
  audience?: string;
  description: string;
  features: string[];
  cta: string;
  href?: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  correctAnswer: string;
  options: string[];
  image?: string;
}

export interface QuizResult {
  title: string;
  subtitle: string;
  description: string;
  scoreRange: string;
}


export interface Dimension {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface OrderItem {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  quantity: number;
  image: string;
  type: 'physical' | 'digital' | 'service';
  downloadUrl?: string;
}

export interface OrderDetails {
  orderId: string;
  date: string;
  customerName: string;
  email: string;
  phone: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: {
    type: string;
    last4?: string;
  };
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  tax: number;
  total: number;
  status: 'confirmed' | 'processing' | 'shipped' | 'delivered';
  trackingNumber?: string;
  estimatedDelivery?: string;
}

