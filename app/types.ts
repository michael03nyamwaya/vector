import {z} from "zod"
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
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
  rating :number
}
export interface PricingPlan{
    id: number;
    name: string;
    price:string;
    period:string;
    features:string[];
   popular:boolean;
}
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string
  
};
export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity:number
}
export type cartItemsType =CartItemType []

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
})

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required"),
  cardNumber: z.string().min(16, "Card number is required").max(16, "Card number must be 16 digits"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV is required").max(3, "CVV must be 3 digits")
})

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>

export type CartStoreType = {
  cart: cartItemsType; // ✅ 
}

export type CartstoreAtionsType = {
  addToCart: (product: CartItemType) => void
  removeFromCart: (id: string | number) => void // ✅ 
  clearCart: () => void
}