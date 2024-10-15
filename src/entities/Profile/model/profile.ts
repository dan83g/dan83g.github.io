export interface IProfile {
  id: string;
  name: string;
  email: string;
  signUpDate: Date | string;
  isAdmin: boolean;
  password?: string;
}

export const adminProfile: IProfile = {
  id: '1',
  name: 'admin',
  email: 'admin@example.com',
  signUpDate: new Date().toISOString(),
  isAdmin: true,
};

export const isProfile = (profile: unknown): profile is IProfile => {
  const tempProfile = profile as IProfile;
  return (
    Object.hasOwn(tempProfile, 'id') &&
    Object.hasOwn(tempProfile, 'name') &&
    Object.hasOwn(tempProfile, 'email') &&
    Object.hasOwn(tempProfile, 'signUpDate')
  );
};
