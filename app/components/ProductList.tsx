// ProductList.tsx
import { ProductsType } from "../types";
import Link from "next/link";
import Categorgy from "./Category";
import Productscard from "./ProductsCard";

// UPDATED PRODUCTS DATA WITH CATEGORIES
const products: ProductsType = [
  {
    id: 1,
    name: "Business Cards - Westminster",
    shortDescription: "Professional business cards for Westminster Consulting with elegant design.",
    description: "High-quality business cards featuring Westminster Consulting branding. Perfect for professional networking and client meetings.",
    price: 29.9,
    image: '/images/business cards.png',
    category: "business-cards"
  },
  {
    id: 2,
    name: "Annual Report - Vectex",
    shortDescription: "Corporate annual report design for Vectex company.",
    description: "Professional annual report design showcasing company performance and achievements with modern layout.",
    price: 89.9,
    image: '/images/ANNUAL REPORT.jpg',
    category: "books-prints"
  },
  {
    id: 3,
    name: "Company Profile - Vector",
    shortDescription: "Comprehensive company profile brochure for Vector printers.",
    description: "Detailed company profile showcasing services, portfolio, and contact information for Vector printing company.",
    price: 59.9,
    image: '/images/company profile.png',
    category: "books-prints"
  },
  {
    id: 4,
    name: "G-Mali T-Shirt",
    shortDescription: "Premium cotton t-shirts with G-Mali brand printing.",
    description: "Comfortable and durable t-shirts perfect for brand promotion and merchandise.",
    price: 24.9,
    image: '/images/long sleeve round neck-01.png',
    category: "tshirts-cloths"
  },
  {
    id: 5,
    name: "Vector Brand T-Shirt",
    shortDescription: "Custom Vector brand t-shirts for team wear.",
    description: "High-quality t-shirts featuring Vector company branding, ideal for staff uniforms or promotional events.",
    price: 22.9,
    image: '/images/merch-01.png',
    category: "tshirts-cloths"
  },
  {
    id: 6,
    name: "Leather Notebook - PINSSF",
    shortDescription: "Premium leather-bound notebooks with custom imprint.",
    description: "Elegant leather notebooks perfect for corporate gifting and executive use.",
    price: 35.9,
    image: '/images/leather notebook.png',
    category: "books-prints"
  },
  {
    id: 7,
    name: "Keyholder - KENCREAM",
    shortDescription: "Custom branded keyholders for KENCREAM SACCO.",
    description: "Durable and stylish keyholders featuring KENCREAM SACCO branding.",
    price: 12.9,
    image: '/images/keyholder.png',
    category: "books-prints"
  },
  {
    id: 8,
    name: "Lanyard & ID - AGMOND",
    shortDescription: "Professional lanyards with ID card holders.",
    description: "High-quality lanyards perfect for corporate events, conferences, and staff identification.",
    price: 8.9,
    image: '/images/lanyard & id.png',
    category: "books-prints"
  },
  {
    id: 9,
    name: "Wedding Invitation Card",
    shortDescription: "Elegant wedding invitation cards with custom design.",
    description: "Beautifully designed wedding invitation cards that make your special day memorable.",
    price: 45.9,
    image: '/iimages/nvitation card.jpg',
    category: "invitation-cards"
  },
  {
    id: 10,
    name: "Event Invitation Card",
    shortDescription: "Professional event invitation cards for corporate functions.",
    description: "Sophisticated invitation cards suitable for corporate events, launches, and special occasions.",
    price: 39.9,
    image: '/images/Wristbands 1.pngg',
    category: "invitation-cards"
  },
  {
    id: 11,
    name: "Billboard Design - Rexona",
    shortDescription: "Large format billboard design and printing services.",
    description: "Eye-catching billboard designs that capture attention and deliver your message effectively.",
    price: 299.9,
    image: '/images/billboard.jpg',
    category: "books-prints"
  },
  {
    id: 12,
    name: "Booklet - Vector Annual",
    shortDescription: "Multi-page booklet design for annual reports.",
    description: "Comprehensive booklet design services perfect for annual reports, catalogs, and brochures.",
    price: 79.9,
    image: '/images/booklet.png',
    category: "books-prints"
  }
];

interface ProductListProps {
  category: string;
  showHeader?: boolean;
}

export default function ProductList({ category, showHeader = true }: ProductListProps) {
  // Filter products based on category
  const filteredProducts = category && category !== 'all' 
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div id="shop" className="">
      {showHeader && <Categorgy />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-4 lg:mx-20">
        {filteredProducts.map(product => (
          <Productscard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Only show on homepage */}
     
    </div>
  );
}