export interface IProfile {
  name: string;
  email: string;
  signUpDate: Date | string;
  isAdmin: boolean;
  password?: string;
}

export const isProfile = (profile: unknown): profile is IProfile => {
  const tempProfile = profile as IProfile;
  return (
    Object.hasOwn(tempProfile, 'name') &&
    Object.hasOwn(tempProfile, 'email') &&
    Object.hasOwn(tempProfile, 'signUpDate')
  );
};
