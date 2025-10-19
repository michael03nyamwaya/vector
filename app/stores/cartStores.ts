import { create } from 'zustand'
import { CartStoreType } from '../types'
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => set((state) => {
        // Check if item already exists in cart
        const existingItem = state.cart.find(item => item.id === product.id);
        
        if (existingItem) {
          // If exists, update quantity
          return {
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            )
          };
        } else {
          // If new, add to cart
          return { 
            cart: [...state.cart, product] 
          };
        }
      }),
      removeFromCart: (id) => set((state) => ({ 
        cart: state.cart.filter(item => item.id !== id) 
      })),
      clearCart: () => set({ cart: [] }),
      updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(0, quantity) } // Ensure quantity doesn't go below 0
            : item
        ).filter(item => item.quantity > 0) // Remove items with 0 quantity
      })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useCartStore