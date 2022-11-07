import type { ISpecification } from "@/providers/specification/types";
import type { ITemplate, ITemplateAttribute } from "@/providers/template/types";
import type { MutationTree } from "vuex";
import type { State } from "./state";

export enum SpecificationsMutationTypes {
  SET_DATA = "SET_DATA",
  ADD_ATTRIBUTE = "ADD_ATTRIBUTE",
  ADD_SPECIFICATION = "ADD_SPECIFICATION",
}

interface ISetDataPayload {
  template: ITemplate;
  specifications: ISpecification[];
}

interface IAddAttributePayload {
  attribute: ITemplateAttribute;
}

interface IAddSpecificationPayload {
  spec: ISpecification;
}

export type Mutations<S = State> = {
  [SpecificationsMutationTypes.SET_DATA](
    state: S,
    payload: ISetDataPayload
  ): void;
  [SpecificationsMutationTypes.ADD_ATTRIBUTE](
    state: S,
    payload: IAddAttributePayload
  ): void;
  [SpecificationsMutationTypes.ADD_SPECIFICATION](
    state: S,
    payload: IAddSpecificationPayload
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [SpecificationsMutationTypes.SET_DATA](
    state: State,
    payload: ISetDataPayload
  ) {
    state.template = payload.template;
    state.specifications = payload.specifications;
  },

  [SpecificationsMutationTypes.ADD_ATTRIBUTE](
    state: State,
    payload: IAddAttributePayload
  ) {
    state.template?.attributes.push(payload.attribute);
  },

  [SpecificationsMutationTypes.ADD_SPECIFICATION](
    state: State,
    payload: IAddSpecificationPayload
  ) {
    state.specifications?.push(payload.spec);
  },
};
