import { atom } from 'recoil';

export const splitViewAtom = atom<Record<string, number>>({
  default: {},
  key: 'splitViewItem',
});
