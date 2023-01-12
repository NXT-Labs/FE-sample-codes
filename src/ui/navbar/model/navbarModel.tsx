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

export interface navbarModel {
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
    avatar?: string;
    setUser?: (event: React.ChangeEvent<HTMLInputElement> | boolean) => void;
    user?: {
      user: userDetail
    } | boolean
  };
  signInRoute?: string;
  signUpRoute?: string;
}
