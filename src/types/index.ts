import { ReactElement, ReactNode } from 'react';

export interface userType {
  uid: string;
  createdAt?: string;
  displayName: string;
  photoURL?: string;
  coverImgURL?: string;  
  id?: string;
  email: string;
}

export interface updateUserType { 
  displayName: string;
  photoURL?: string;
  coverImgURL?: string;
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
  displayName?: string;
}

export interface StoreType {
  isLoggedIn: boolean;
  toggleIsLogin: (isLogin: boolean) => void;
  userObj: userType | null;
  onAuthState: () => void;
  createUser: (userObj:userType) => void;
  getUser: (uid:string) => void;
  setUser: (id:string, uid:string, userObj:updateUserType) => void;
}

export interface AuthFormProps {
  isNewAccount?: boolean;
}

export interface EditNweetProps {
  id: string;
  originText: string;
  toggleEditing: () => void;
}

export interface FileButtonProps {
  onChange: (e: any) => void;
}

export interface ImagesBoxProps {
  attachment: string;
  onClearAttachment?: () => void;
}
export interface ModalProps {
  children: ReactNode | ReactElement;
  title?: string;
  button: ReactNode | ReactElement;
}

export interface NweetProps {
  nweetObj: NweetType;
  isOwner: boolean;
}

export type onSubmitData = {
  nweet: string;
};

export interface NweetItemProps {
  nweetObj: NweetType;
  isOwner: boolean;
  toggleEditing: () => void;
}
export interface SocialAuthProps {
  isNewAccount?: boolean;
}

export interface HeaderProps {
  children?: ReactElement | ReactNode;
  nwitterCnt?: number;
}
