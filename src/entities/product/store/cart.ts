import { create } from 'zustand';
import { ICartState } from './types';
import { ICartProduct, IProduct } from '../types';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [] as ICartProduct[],
      addToCart: (item: IProduct) => {
        const { cart } = get();
        const itemInCart = cart.find((i) => i.id === item.id);
        const newCart = itemInCart
          ? cart.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
          : [...cart, { ...item, quantity: 1 }];
        set({ cart: newCart });
      },
      removeItem: (id: string) => {
        const newCart = get().cart.filter((i) => i.id !== id);
        set({ cart: newCart });
      },
      incrementQuantity: (id: string) => {
        const newCart = get().cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
        set({ cart: newCart });
      },
      decrementQuantity: (id: string) => {
        const newCart = get()
          .cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
          .filter((i) => i.quantity > 0);
        set({ cart: newCart });
      },
      clearCart: () => {
        set({ cart: [] });
      },
      getProductQuantity: (id: string) => get().cart.find((p) => p.id === id)?.quantity ?? 0,
      getTotalItems: () => get().cart.length,
      getTotalQuantity: () => get().cart.reduce((x: number, y) => x + y.quantity, 0),
      getTotalPrice: () => get().cart.reduce((x: number, y) => x + y.price * y.quantity, 0),
      getOrderItems: () =>
        get().cart.map((i) => ({
          id: i.id,
          quantity: i.quantity,
        })),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
