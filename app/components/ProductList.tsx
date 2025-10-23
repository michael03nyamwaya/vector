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
    name: "Corporate Polo Shirt",
    shortDescription: "Premium embroidered polo shirts for corporate branding",
    description: "Professional polo shirts with custom embroidery for team uniforms",
    price: 22.9,
    image:  '/pl7.jpg',
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
    image: '/wedding.jpg',
    category: "invitation-cards"
  },
  {
    id: 10,
    name: "Event Invitation Card",
    shortDescription: "Professional event invitation cards for corporate functions.",
    description: "Sophisticated invitation cards suitable for corporate events, launches, and special occasions.",
    price: 39.9,
    image: '/images/Wristbands 1.png',
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
  },
  // NEWLY ADDED PRODUCTS
  {
    id: 13,
    name: "Executive Polo Shirt",
    shortDescription: "Professional polo shirts with company logo embroidery",
    description: "Quality polo shirts perfect for staff uniforms and corporate events.",
    price: 49.9,
    image: '/pl8.jpg',
    category: "tshirts-cloths"
  },
  {
    id: 14,
    name: "3D-2D Plane Design",
    shortDescription: "Technical plane design and documentation services.",
    description: "Professional 3D-2D plane design services for technical documentation, engineering projects, and architectural presentations.",
    price: 199.9,
    image: '/images/plane.jpg',
    category: "books-prints"
  },
  {
    id: 15,
    name: "3D Plane Model Design",
    shortDescription: "Advanced 3D plane modeling and design services.",
    description: "High-quality 3D plane modeling services for presentations, simulations, and technical documentation.",
    price: 249.9,
    image: '/images/plane.png',
    category: "books-prints"
  },
  {
    id: 16,
    name: "Custom Branded Polo",
    shortDescription: "Custom embroidered polo shirts for company branding.",
    description: "Branded polo shirts ideal for team wear and promotional merchandise.",
    price: 34.9,
    image: '/pl1.jpg',
    category: "tshirts-cloths"
  },
  {
    id: 17,
    name: "Classic Fit Polo",
    shortDescription:  "Comfortable classic fit polo with custom branding.",
    description: "Traditional polo shirt with embroidered company logo.",
    price: 34.9,
    image: '/pl2.jpg',
    category: "tshirts-cloths"
  },
  {
    id: 18,
    name: "Performance Polo",
    shortDescription: "Moisture-wicking polo for active work environments.",
    description:  "Breathable polo shirt with moisture management fabric.",
    price: 34.9,
    image: '/pl3.jpg',
    category: "tshirts-cloths"
  },
  {
    id: 19,
    name: "Premium Cotton Polo",
    shortDescription: "100% cotton polo with premium embroidery.",
    description: "Soft cotton polo shirt with high-quality logo stitching.",
    price: 34.9,
    image: '/pl4.jpg',
    category: "tshirts-cloths"
  },
  {
    id: 20,
    name: "Team Uniform Polo",
    shortDescription: "Custom polo shirts for team uniforms.",
    description: "Matching polo shirts for corporate teams and staff.",
    price: 34.9,
    image: '/pl5.jpg',
    category: "tshirts-cloths"
  },
  {
    id: 21,
    name: "Reflector Jacket - Boma Yangu",
    shortDescription: "Safety reflector jacket with Boma Yangu branding.",
    description: "High-visibility reflector jacket featuring Boma Yangu branding, perfect for safety and visibility in various environments.",
    price: 34.9,
    image: '/pl6.jpg',
    category: "tshirts-cloths"
  },
  {
    id: 22,
    name: "Reflector Jacket - Boma Yangu",
    shortDescription: "Safety reflector jacket with Boma Yangu branding.",
    description: "High-visibility reflector jacket featuring Boma Yangu branding, perfect for safety and visibility in various environments.",
    price: 34.9,
    image:  '/images/overall back.png',
    category: "tshirts-cloths"
  },
  {
    id: 23,
    name: "Reflector Jacket - Boma Yangu",
    shortDescription: "Safety reflector jacket with Boma Yangu branding.",
    description: "High-visibility reflector jacket featuring Boma Yangu branding, perfect for safety and visibility in various environments.",
    price: 34.9,
    image: '/images/merch-01.png',
    category: "tshirts-cloths"
  },
  {
    id: 24,
    name: "Reflector Jacket - CTL Convoy",
    shortDescription: "Professional reflector jacket for CTL Convoy Trucking.",
    description: "Durable safety reflector jacket with CTL Convoy Trucking branding, ideal for trucking and logistics personnel.",
    price: 39.9,
    image: '/images/Reflector Jacket CTL Convoy.png',
    category: "tshirts-cloths"
  },
  {
    id: 25,
    name: "Security Uniform - Reliance",
    shortDescription: "Professional security uniform for Reliance Protection Services.",
    description: "High-quality security uniform featuring Reliance Protection Services branding, designed for professional security personnel.",
    price: 54.9,
    image: '/images/Security uniform front.png',
    category: "tshirts-cloths"
  },
  {
    id: 26,
    name: "SAFINA Brand T-Shirt",
    shortDescription: "Custom SAFINA brand t-shirts in round neck design.",
    description: "Comfortable short sleeve round neck t-shirts featuring SAFINA branding, perfect for team uniforms and brand promotion.",
    price: 21.9,
    image: '/images/short sleeve roundneck-01.png',
    category: "tshirts-cloths"
  },
  {
    id: 27,
    name: "Spiral Notebook - AGMOND",
    shortDescription: "Professional spiral notebooks with AGMOND branding.",
    description: "High-quality spiral notebooks featuring AGMOND International branding, perfect for corporate use and promotional items.",
    price: 15.9,
    image: '/images/spiral notebook 2.png',
    category: "books-prints"
  },
  {
    id: 28,
    name: "Executive Notebook - AGMOND",
    shortDescription: "Executive spiral notebooks for AGMOND International.",
    description: "Premium spiral notebooks with AGMOND International branding, ideal for corporate gifts and executive use.",
    price: 18.9,
    image: '/images/spiral notebook.png',
    category: "books-prints"
  },
  {
    id: 29,
    name: "Staff ID Card Design",
    shortDescription: "Professional staff ID card design and printing.",
    description: "Custom staff ID card design services with professional layout for employee identification and security purposes.",
    price: 12.9,
    image: '/images/staff ID.jpg',
    category: "business-cards"
  },
  {
    id: 30,
    name: "Corporate ID Card",
    shortDescription: "Corporate staff ID card with modern design.",
    description: "Modern corporate ID card design featuring professional layout for staff identification and access control.",
    price: 14.9,
    image: '/images/staff ID.png',
    category: "business-cards"
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