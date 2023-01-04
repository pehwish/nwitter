import { ReactElement, ReactNode } from 'react';

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
  displayName?:string;
};


export interface StoreType {
  isLoggedIn: boolean;
  toggleIsLogin: (isLogin: boolean) => void;  
  userObj: userType | null;
  refreshUser: () => void;
  onAuthState: () => void;
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
  button:ReactNode | ReactElement;
}

export interface NweetProps {
  nweetObj: NweetType;
  isOwner: boolean;
}


export type onSubmitData = {
  nweet: string;
};

export interface NweetFactoryProps {
  userObj?: userType;
}
export interface NweetItemProps {
  nweetObj: NweetType;
  isOwner: boolean;
  toggleEditing: () => void;
}
export interface SocialAuthProps { 
  isNewAccount?: boolean;
}

export interface HeaderProps{ 
  children?: ReactElement | ReactNode;
}