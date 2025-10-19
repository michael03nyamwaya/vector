import { ProductType } from "@/app/types";
import Image from "next/image";
import { Star, Shield, Truck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock function to get product by ID - replace with actual API call
async function getProductById(id: string): Promise<ProductType | null> {
  // This should match your products data structure from ProductList
  const products: ProductType[] = [
    {
      id: 1,
      name: "Adidas CoreFit T-Shirt",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 39.9,
      image: '/imgg.png',
      category: "Clothing" // Added category
    },
    {
      id: 2,
      name: "Puma Ultra Warm Zip",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      image: '/img8.jpg',
      category: "Clothing" // Added category
    },
    {
      id: 3,
      name: "Nike Air Essentials Pullover",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      image: '/img5.jpg',
      category: "Clothing" // Added category
    },
    {
      id: 4,
      name: "Nike Dri Flex T-Shirt",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 29.9,
      image: '/img4.jpg',
      category: "Clothing" // Added category
    },
    {
      id: 5,
      name: "Under Armour StormFleece",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 49.9,
      image: '/img6.jpg',
      category: "Clothing" // Added category
    },
    {
      id: 6,
      name: "Under Armour StormFleece",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 49.9,
      image: '/img9.jpg',
      category: "Clothing" // Added category
    },
    {
      id: 7,
      name: "Under Armour StormFleece",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 49.9,
      image: '/img 1.jpg',
      category: "Clothing" // Added category
    },
    {
      id: 8,
      name: "Nike Air Max 270",
      shortDescription: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      image: '/img2.jpg',
      category: "Footwear" // Added category
    }
  ];
  
  const product = products.find(p => p.id === parseInt(id));
  return product || null;
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { id } = await params;
  const { size, color } = await searchParams;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  // Mock data for features and reviews
  const features = [
    "100% Premium Cotton",
    "Moisture-Wicking Technology",
    "Breathable Fabric",
    "Eco-Friendly Material",
    "Machine Washable"
  ];

  const reviews = {
    average: 4.5,
    totalCount: 128
  };

  return (
    <div className="min-h-[70%] mx-20px bg-white mt-20">
      {/* Back Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/products" className="flex items-center gap-2 text-[#227e1a] hover:text-[#0e2b0b] transition-colors w-max">
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* IMAGE SECTION - Enhanced */}
          <div className="w-full lg:w-[40%]">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
           
            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Truck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-500">On orders over $50</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-sm font-medium">2-Year Warranty</p>
                <p className="text-xs text-gray-500">Quality guaranteed</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <span className="text-lg">↻</span>
                </div>
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-gray-500">30-day policy</p>
              </div>
            </div>
          </div>

          {/* DETAILS SECTION - Enhanced */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-8">
              {/* Brand & Category */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium text-gray-500">Brand</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">Category: {product.category}</span>
              </div>

              {/* Product Name */}
              <h1 className="text-2xl font-bold text-[#2a1ceb] mb-2">
                {product.name}
              </h1>

              {/* Reviews */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center ">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={
                        star <= Math.floor(reviews.average)
                          ? "text-yellow-400 fill-current text-md"
                          : star === Math.ceil(reviews.average) && reviews.average % 1 !== 0
                          ? "text-yellow-400 fill-current opacity-50"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {reviews.average} • {reviews.totalCount} reviews
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-600">
                  ${product.price.toFixed(2)}
                </h2>
                <p className="text-sm text-green-600 font-medium mt-1">
                  In stock • Ready to ship
                </p>
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-700 mb-8 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-md font-semibold mb-4">Product Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border rounded-lg">
                    <button className="px-4 py-3 text-gray-600 hover:text-gray-800">
                      -
                    </button>
                    <span className="px-4 py-3 border-x">1</span>
                    <button className="px-4 py-3 text-gray-600 hover:text-gray-800">
                      +
                    </button>
                  </div>
                  <button className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Full Description */}
              <div className="border-t pt-8">
                <h3 className="text-md font-semibold mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>

              {/* Policy Notice */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-sm">
                  By clicking Pay Now, you agree to our{" "}
                  <span className="underline hover:text-black cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="underline hover:text-black cursor-pointer">
                    Privacy Policy
                  </span>
                  . You authorize us to charge your selected payment method for the
                  total amount shown. All sales are subject to our return and{" "}
                  <span className="underline hover:text-black cursor-pointer">
                    Refund Policies
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;