interface userDetail {
  userName?: string;
  email?: string;
  phone?: number | string;
  timezone?: string;
  dob?: string;
  isActive?: boolean;
  emailVerified?: boolean;
  mfa?: boolean;
  twitter?: string | boolean;
  facebook?: string | boolean;
  twitch?: string | boolean;
  youtube?: string | boolean;
  instagram?: string | boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface profileMenuModel {
  showProfileMenu?: boolean | string;
  setShowProfileMenu?: (event: React.ChangeEvent<HTMLInputElement> | boolean) => void;
  profileState?: {
    showProfileMenu?: boolean | string;
    setShowProfileMenu?: (event: React.ChangeEvent<HTMLInputElement> | boolean) => void;
  };
  userState?: {
    jwt?: string;
    success?: string;
    jwtToken?: string;
    id?: number | string;
    userName?: string;
    email?: string;
    phone?: number | string;
    timezone?: string;
    dob?: string;
    isActive?: boolean;
    emailVerified?: boolean;
    mfa?: boolean;
    twitter?: string | boolean;
    facebook?: string | boolean;
    twitch?: string | boolean;
    youtube?: string | boolean;
    instagram?: string | boolean;
    createdAt?: string;
    updatedAt?: string;
    setUser?: (event: React.ChangeEvent<HTMLInputElement> | boolean) => void;
    user?: {
      user: userDetail
    } | boolean
  };
  signInRoute?: string;
  signUpRoute?: string;
  profileTabs?: {
    label: string;
    route: string
  }[];
  userSignout?: () => void;
}