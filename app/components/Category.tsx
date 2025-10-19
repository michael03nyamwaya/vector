// Category.tsx
"use client"

import { BookOpen, CreditCard, IdCard, Shirt } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const categories = [
  {
    name: "Books & Prints",
    icon: <BookOpen className="w-4 h-4" />,
    slug: "books-prints",
  },
  {
    name: "Business Cards",
    icon: <IdCard className="w-4 h-4" />,
    slug: "business-cards",
  },
  {
    name: "T-shirts & Cloths",
    icon: <Shirt className="w-4 h-4" />,
    slug: "tshirts-cloths",
  },
  {
    name: "Invitation Cards",
    icon: <CreditCard className="w-4 h-4" />,
    slug: "invitation-cards",
  },
];

export default function Category() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const selectedCategory = searchParams.get("category") || categories[0].slug // Default to first category

  // Set default category on initial load if no category is selected
  useEffect(() => {
    if (!searchParams.get("category")) {
      const params = new URLSearchParams(searchParams);
      params.set("category", categories[0].slug);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [pathname, router, searchParams]);

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("category", value)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="container mx-auto px-4 py-6 pt-4">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-amber-500 font-semibold text-lg md:text-xl tracking-wide uppercase mb-2">
          Featured Products
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Explore Our <span className="text-blue-600">Premium</span> Collection
        </h1>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleChange(category.slug)}
              className={`
                flex items-center justify-start gap-3 p-3 rounded-lg border transition-all duration-300 ease-in-out
                transform hover:scale-105 hover:shadow-md active:scale-95
                ${category.slug === selectedCategory 
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white border-blue-500 shadow-md" 
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }
              `}
            >
              {/* Icon */}
              <div className={`
                p-2 rounded-full transition-colors duration-300 flex-shrink-0
                ${category.slug === selectedCategory 
                  ? "bg-white/20" 
                  : "bg-blue-50 text-blue-600"
                }
              `}>
                {category.icon}
              </div>
              
              {/* Category Name */}
              <span className={`
                text-sm font-medium text-left leading-tight transition-colors duration-300
                ${category.slug === selectedCategory ? "text-white" : "text-gray-800"}
              `}>
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Category Display */}
      {selectedCategory && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <span>Showing:</span>
            <span className="font-semibold capitalize">
              {categories.find(cat => cat.slug === selectedCategory)?.name.toLowerCase()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}