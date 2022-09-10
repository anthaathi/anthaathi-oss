import { atom } from 'recoil';

export const userTokenAtom = atom<string | null>({
  key: '_auth_userToken',
  default: null,
});
