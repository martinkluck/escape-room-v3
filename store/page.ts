export const usePageStore = defineStore('page', {
  state: () => ({
    partOneKeyFound: false,
    partTwoKeyFound: false,
    seenShed: false,
    arranca: false,
    faltaCombustible: false,
    averia: false,
  }),
  getters: {},
  actions: {
    havePassword(): boolean {
      return this.partOneKeyFound && this.partTwoKeyFound;
    },
  },
});
