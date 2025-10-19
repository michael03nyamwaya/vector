import { z } from "zod"

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  serviceList: string[];
  images: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
}

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
}

export type CartItemsType = CartItemType[];

// Form Schemas
export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email").min(1, "Email is required"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits!")
    .max(10, "Phone number must be between 7 and 10 digits!")
    .regex(/^\d+$/, "Phone number must contain only numbers"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required")
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required"),
  cardNumber: z
    .string()
    .min(16, "Card number must be 16 digits")
    .max(16, "Card number must be 16 digits")
    .regex(/^\d+$/, "Card number must contain only numbers"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY format"),
  cvv: z
    .string()
    .min(3, "CVV must be 3 digits")
    .max(3, "CVV must be 3 digits")
    .regex(/^\d+$/, "CVV must contain only numbers")
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

// Cart Store Types
export type CartStoreType = {
  cart: CartItemsType;
  addToCart: (product: CartItemType) => void;
  removeFromCart: (id: string | number) => void;
  clearCart: () => void;
  updateQuantity: (id: string | number, quantity: number) => void;
}

// Component Prop Types
export type ShippingFormProps = {
  setShippingForm: (data: ShippingFormInputs) => void;
}

export type PaymentFormProps = {
  setPaymentForm: (data: PaymentFormInputs) => void;
}

// API Response Types
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export type OrderType = {
  id: string;
  items: CartItemsType;
  shipping: ShippingFormInputs;
  payment: PaymentFormInputs;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
}

// Utility Types
export type PaginationParams = {
  page: number;
  limit: number;
}

export type SearchParams = {
  query: string;
  category?: string;
} & PaginationParams;