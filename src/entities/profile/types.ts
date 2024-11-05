export interface IProfile {
  name: string;
  email: string;
  signUpDate: Date | string;
  isAdmin: boolean;
  password?: string;
}

export interface IUpdateProfileRequest {
  name: string;
}

export interface IChangePasswordRequest {
  password: string;
  newPassword: string;
}

export interface IChangePasswordResponse {
  success: boolean;
}

export const isProfile = (profile: unknown): profile is IProfile => {
  const tempProfile = profile as IProfile;
  return (
    Object.hasOwn(tempProfile, 'name') &&
    Object.hasOwn(tempProfile, 'email') &&
    Object.hasOwn(tempProfile, 'signUpDate')
  );
};

export const isChangePasswordResponse = (response: unknown): response is IChangePasswordResponse => {
  const tempResponse = response as IChangePasswordResponse;
  return Object.hasOwn(tempResponse, 'success') && typeof tempResponse.success === 'boolean';
};
