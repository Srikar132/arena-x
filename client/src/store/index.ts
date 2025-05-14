import axios from 'axios';
import { create } from 'zustand';
import { User } from '../types/global';
import { fetchAPI } from '../lib/fetches';

interface UserStore {
  userData: Partial<User> | null;
  loading: boolean;
  error: string | null;
  verifyUser: () => Promise<void>;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userData: null,
  loading: false,
  error: null,

  setUser: (user) => set({ userData: user }),

  logout: () => set({ userData: null, error: null }),

  verifyUser: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchAPI('api/user/verify-user', { withCredentials: true });

      set({ userData: data, loading: false });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || err.message || 'User verification failed',
        loading: false,
        userData: null,
      });
    }
  },
}));
