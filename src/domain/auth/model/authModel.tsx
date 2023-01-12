export interface signinPayload {
  password?: string | number;
  userName?: string | number;
  email?: string | number;
  phone?: string | number;
}

export interface signupPayload {
  password?: string | number;
  userName?: string | number;
  email?: string | number;
  phone?: string | number;
  timezone?: string | number;
  dob?: string | number;
}
export interface fypPayload {
  password?: string | number;
  userName?: string | number;
  email?: string | number;
  phone?: string | number;
  resetRoute?: string;
  successMsg?: string;
  AccountDoesNotExistMsg?: string;
  signinRoute?: string;
  successType?: string[];
  errorType?: string[];
  checkNested?: (obj, ...restProps) => boolean
}

export interface resetPayload {
  userId?: string | number;
  resetToken?: string;
  password?: string | number;
  resetRoute?: string;
  resetParams?: {
    userId?: string | number;
    resetToken?: string
  }
  successType?: string[];
  errorType?: string[];
  checkNested?: (obj, ...restProps) => boolean
}

export interface signinDomainProp {
  setState?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setUserState?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  redirectTo?: string;
  successType?: string[];
  errorType?: string[];
  checkNested?: (obj, ...restProps) => boolean
}

export interface signupDomainProp {
  setState?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setUserState?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  redirectTo?: string;
  successType?: string[];
  errorType?: string[];
  timezones?: {
    label: string,
    value: string | number
  }[];
  checkNested?: (obj, ...restProps) => boolean
}