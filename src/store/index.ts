import { authService, dbService } from 'fbase';
import {  StoreType, userType } from 'types';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'


const store = create<StoreType>()(
  devtools(
    persist((set, get) => ({
      isLoggedIn: false,
      toggleIsLogin: (isLogin) => set({ isLoggedIn: isLogin }),
      userObj: null,
      onAuthState: () => {
        authService.onAuthStateChanged(async (user) => {          
          if (user) {            
            await get().getUser(user.uid);            
            set(() => ({
              isLoggedIn: true
            }))
          } else {
            set(() => ({
              userObj: null,
              isLoggedIn: false
            }))
          }
        });
      },
      createUser: async (userObj) => { 
        await dbService.collection('users').add(userObj);
      },
      getUser: async (uid) => { 
        await dbService.collection('users').where('uid', '==', uid).onSnapshot((snapshot) => {
          const response = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          if (response.length) {
            set(() => ({
              userObj: response[0] as userType
            }));        
          }         
         });
       
      },
      setUser: async (id, uid, userObj) => { 
        console.log('setUser...');
        await dbService.doc(`users/${id}`).update(
          userObj
        );
        await get().getUser(uid);
      }
    })))
)
export default store;
