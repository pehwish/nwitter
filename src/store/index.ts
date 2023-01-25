import { dbService } from 'fbase';
import {  StoreType, userType } from 'types';
import { createAt } from 'utills/date';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'


const store = create<StoreType>()(
  devtools(
    persist((set, get) => ({
      isLoggedIn: false,
      userObj: null,
      isLoading: false,
      toggleLoading:(isVisibleLoading) => set({ isLoading: isVisibleLoading }),  
      logout: () =>
        set({
          userObj: null,
          isLoggedIn:false }),          
      createUser: async (userObj) => { 
        await dbService.collection('users').add(userObj);
      },
      getUser: async (userObj) => { 
        await dbService.collection('users').where('uid', '==', userObj.uid).onSnapshot((snapshot) => {
          const response = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          if (response.length) {
            set(() => ({
              userObj: response[0] as userType,
              isLoggedIn: true
            }));
          } else { 
            get().createUser({
              uid: userObj.uid,
              displayName: userObj.displayName || '',
              email: userObj.email || '',
              photoURL:userObj?.photoURL || '',
              createdAt:createAt(),
            });
          }        
         });
       
      },
      setUser: async (id, userObj) => { 
        await dbService.doc(`users/${id}`).update(
          userObj
        );
      }
    })))
)
export default store;
