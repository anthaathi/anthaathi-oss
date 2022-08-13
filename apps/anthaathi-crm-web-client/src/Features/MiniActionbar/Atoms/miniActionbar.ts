import { atom } from 'recoil';

export const miniActionbarActiveItemAtom = atom<string | null>({
  key: '_miniActionbarActiveState',
  default: null,
});
