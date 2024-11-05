import { ICartProduct, IProduct } from '../types';

export interface IOrderItem {
  id: string;
  quantity: number;
}

export interface ICartState {
  cart: ICartProduct[];
  removeItem: (id: string) => void;
  addToCart: (item: IProduct) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  getTotalItems: () => number;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  getOrderItems: () => IOrderItem[];
}
