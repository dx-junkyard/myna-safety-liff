import { Liff } from '@line/liff/dist/lib';
import { atom } from 'recoil';

export const liffObjectState = atom<Liff | undefined>({
  key: 'liffObject', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});

export const liffErrorState = atom<string | undefined>({
  key: 'liffError', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
