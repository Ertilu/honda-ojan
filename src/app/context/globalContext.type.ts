export interface GlobalContextType {
  data: any;
  setData: any;
}

export const GlobalContextDefaultValues: GlobalContextType = {
  data: null,
  setData: () => null,
};
