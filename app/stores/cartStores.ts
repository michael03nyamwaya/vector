import { create } from 'zustand'
import { CartstoreAtionsType, CartStoreType } from '../types'
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = create<CartStoreType & CartstoreAtionsType>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => ({ 
        cart: [...state.cart, product] 
      })),
      removeFromCart: (id) => set((state) => ({ 
        cart: state.cart.filter(p => p.id !== id) 
      })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useCartStore