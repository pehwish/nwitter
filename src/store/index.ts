import { StoreType } from 'types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'

const store = create<StoreType>()(
  devtools(
    persist((set) => ({
      isLogin: false,
    toggleIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),

    isSignUpModal: false,
    toggleIsSignUpModal: () => set((state) => ({ isSignUpModal: !state.isSignUpModal })),
    }))
  )
)
export default store;
