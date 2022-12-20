export interface userObjType {
  displayName?: string;
  photoURL?: string;
  uid: string;
  updateProfile: (data: any) => any;
}

export interface NweetType {
  id: string;
  creatorId: string;
  photoURL: string;
  displayName: string;
  createdAt: Date;
  text: string;
  attachmentUrl: string;
}

export interface StoreType {
  isLogin: boolean;
  toggleIsLogin: () => void;
  isSignUpModal: boolean;
  toggleIsSignUpModal: () => void;
}
