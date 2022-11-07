import type { State } from "./state";
import type { GetterTree } from "vuex";
import type { RootState } from "@/store";
import type { ISpecification } from "@/providers/specification/types";
import type { ITemplate } from "@/providers/template/types";

export type Getters = {
  getTemplate(state: State): ITemplate | null;
  getSpecifications(state: State): ISpecification[] | null;
};

export const getters: GetterTree<State, RootState> & Getters = {
  getTemplate: (state: State) => state.template,
  getSpecifications: (state: State) => state.specifications,
};
