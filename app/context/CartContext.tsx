'use client';

import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// --- types ---
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };

// --- Reducer ---
const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) => (i.id === action.payload.id ? { ...i, quantity: i.quantity + action.payload.quantity } : i)),
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((i) => (i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i)),
      };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
};

// --- Context ---
const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

// --- Provider ---
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

// --- Custom hook ---
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
