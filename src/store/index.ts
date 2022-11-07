import { createStore, createLogger } from "vuex";
import createPersistedState from "vuex-persistedstate";

import {
  store as specifications,
  type SpecificationsStore,
  type State as SpecificationsState,
} from "@/store/modules/specifications";

export type RootState = {
  specifications: SpecificationsState;
};

export type Store = SpecificationsStore<
  Pick<RootState, "specifications" & "templates">
>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

// Plug in session storage based persistence
plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore({
  plugins,
  modules: {
    specifications,
  },
});

export function useStore(): Store {
  return store as Store;
}
