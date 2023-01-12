export interface userDetail {
  jwt?: string;
  success?: string;
  jwtToken?: string;
  id?: number | string,
  userName?: string,
  email?: string,
  phone?: number | string,
  timezone?: string,
  dob?: string,
  isActive?: boolean,
  emailVerified?: boolean,
  mfa?: boolean,
  twitter?: string | boolean,
  facebook?: string | boolean,
  twitch?: string | boolean,
  youtube?: string | boolean,
  instagram?: string | boolean,
  createdAt?: string,
  updatedAt?: string,
  rememberMe?: boolean,
  user?: boolean | string 
}