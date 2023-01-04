import { authService } from 'fbase';
import {  StoreType } from 'types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'

const store = create<StoreType>()(
  devtools(
    persist((set) => ({
      isLoggedIn: false,
      toggleIsLogin: (isLogin) => set({ isLoggedIn: isLogin }),
      userObj: null,
      onAuthState: () => {
        authService.onAuthStateChanged((user) => {
          if (user) {  
            console.log('user?!!!!!!!!!!!!!!');
            set(()=> ({
              userObj: {
                displayName: user.displayName || '',
                photoURL: user.photoURL || '',
                uid: user.uid,
                updateProfile: (args) => user.updateProfile(args),
              },
              isLoggedIn:true
            }))
          } else {          
            set(()=>({
              userObj: null,
              isLoggedIn:false
            }))
          }
        });
       },
      refreshUser: () => { 
        const user = authService.currentUser;
        if (user) {
          set(() => ({
            userObj: {
              displayName: user.displayName || '',
              photoURL: user.photoURL || '',
              uid: user.uid,
              updateProfile: (args) => user.updateProfile(args),
            }
          }));
        }
      }
    }))
  )
)
export default store;
