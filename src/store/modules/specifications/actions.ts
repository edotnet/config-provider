import type { ActionTree, ActionContext } from "vuex";
import type { RootState } from "@/store";

import type { State } from "./state";
import { SpecificationsMutationTypes, type Mutations } from "./mutations";
import { inject } from "vue";
import { SPECIFICATION_SERVICE_SYMBOL } from "@/services/specification";
import type { ITemplateAttribute } from "@/providers/template/types";

export enum SpecificationsActionTypes {
  FETCH_DATA = "FETCH_DATA",
  NEW_ATTRIBUTE = "NEW_ATTRIBUTE",
  NEW_SPECIFICATION = "NEW_SPECIFICATION",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [SpecificationsActionTypes.FETCH_DATA]({
    commit,
  }: AugmentedActionContext): Promise<boolean>;
  [SpecificationsActionTypes.NEW_ATTRIBUTE](
    { commit }: AugmentedActionContext,
    attr: ITemplateAttribute
  ): Promise<boolean>;
}

const specificationsService = inject(SPECIFICATION_SERVICE_SYMBOL)!;

export const actions: ActionTree<State, RootState> & Actions = {
  async [SpecificationsActionTypes.FETCH_DATA]({ commit }) {
    const data = await specificationsService.getSpecifications();

    commit(SpecificationsMutationTypes.SET_DATA, {
      template: data.template!,
      specifications: data.specifications?.specifications!,
    });

    return true;
  },

  async [SpecificationsActionTypes.NEW_ATTRIBUTE]({ commit }, attr) {
    commit(SpecificationsMutationTypes.ADD_ATTRIBUTE, {
      attribute: attr,
    });

    return true;
  },

  async [SpecificationsActionTypes.NEW_SPECIFICATION]({ commit }, spec) {
    commit(SpecificationsMutationTypes.ADD_SPECIFICATION, {
      spec,
    });

    return true;
  },
};
