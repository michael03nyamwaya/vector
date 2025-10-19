'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { ProductsType } from "../types";

const products: ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Comfortable cotton t-shirt for everyday wear",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    image: '/imgg.png',
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Warm zip-up jacket for cold weather",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    image: '/img8.jpg',
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Lightweight pullover for casual outings",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    image: '/img5.jpg'
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription: "Moisture-wicking t-shirt for workouts",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 29.9,
    image: '/img4.jpg'
  },
  {
    id: 5,
    name: "Under Armour StormFleece Jacket",
    shortDescription: "Fleece jacket with storm technology",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    image: '/img6.jpg'
  },
  {
    id: 6,
    name: "Under Armour StormFleece Hoodie",
    shortDescription: "Warm hoodie for outdoor activities",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    image: '/img9.jpg'
  },
  {
    id: 7,
    name: "Under Armour StormFleece Vest",
    shortDescription: "Lightweight vest for layered warmth",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    image: '/img1.jpg'
  },
  {
    id: 8,
    name: "Nike Air Max 270",
    shortDescription: "Comfortable running shoes with air cushioning",
    description: "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    image: '/img2.jpg'
  }
];

function Slider() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        modules={[Scrollbar]}
        breakpoints={{
          640: {
            slidesPerView:1,
          },
          1024: {
            slidesPerView: 3,
          },
          1170: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="pb-10">
              {/* product img */}
              <div className="bg-grey-50 h-[360px] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={240}
                  height={240}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
             {/*  text */}
           
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                </div>
              </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider