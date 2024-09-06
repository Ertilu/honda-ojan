export interface GlobalContextType {
  data: any;
  setData: any;
  promo: any;
  setPromo: any;
}

export const GlobalContextDefaultValues: GlobalContextType = {
  data: null,
  setData: () => null,
  promo: null,
  setPromo: () => null,
};
