export interface userType {
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

export interface AuthFormData {
  email: string;
  password: string;
};


export interface StoreType {
  isLoggedIn: boolean;
  toggleIsLogin: (isLogin: boolean) => void;  
  userObj: userType | null;
  refreshUser: () => void;
  onAuthState: () => void;
}
