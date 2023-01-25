import { ReactElement, ReactNode } from 'react';

export interface userType {
  uid: string;
  createdAt?: string;
  displayName: string | null;
  photoURL: string | null;
  coverImgURL?: string;  
  id?: string;
  email: string | null;
}

export interface updateUserType { 
  displayName: string | null;
  photoURL?: string | null;
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
  userObj: userType | null;
  isLoading: boolean;
  toggleLoading: (isVisibleLoading:boolean) => void;
  logout: () => void;
  createUser: (userObj:userType) => void;
  getUser: (userObj:userType) => void;
  setUser: (id:string, userObj:updateUserType) => void;
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

export interface LoadingProps { 
  isLoading?: boolean;
}