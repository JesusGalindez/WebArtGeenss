import { create } from 'zustand';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  type: 'original' | 'print';
}

interface AppState {
  // Cart
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  
  // UI State
  isSideMenuOpen: boolean;
  setSideMenuOpen: (open: boolean) => void;
  
  // Gallery
  selectedGalleryYear: string | null;
  setSelectedGalleryYear: (year: string | null) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Cart
  cartItems: [],
  addToCart: (item) => set(state => {
    const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      return {
        cartItems: state.cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      };
    }
    return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
  }),
  removeFromCart: (id) => set(state => ({
    cartItems: state.cartItems.filter(item => item.id !== id)
  })),
  updateQuantity: (id, quantity) => set(state => ({
    cartItems: quantity <= 0 
      ? state.cartItems.filter(item => item.id !== id)
      : state.cartItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
  })),
  updateCartQuantity: (id, quantity) => set(state => ({
    cartItems: quantity <= 0 
      ? state.cartItems.filter(item => item.id !== id)
      : state.cartItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
  })),
  clearCart: () => set({ cartItems: [] }),
  getCartTotal: () => {
    const { cartItems } = get();
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  // UI State
  isSideMenuOpen: false,
  setSideMenuOpen: (open) => set({ isSideMenuOpen: open }),
  
  // Gallery
  selectedGalleryYear: null,
  setSelectedGalleryYear: (year) => set({ selectedGalleryYear: year }),
}));
