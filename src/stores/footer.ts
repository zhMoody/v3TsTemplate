import { defineStore } from 'pinia';

export interface Footer {
  isShow: boolean;
}
const defaultUserInfo = {
isShow: true
};

export const useFooterStore = defineStore('Footer',{
  state: (): Footer => ({
  ...defaultUserInfo
  }),
  actions: {
    setIsShow(flag:boolean) {
     return this.isShow = flag
    }
  },
});

