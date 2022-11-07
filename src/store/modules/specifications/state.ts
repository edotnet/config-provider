import type { ITemplate } from "@/providers/template/types";
import type { ISpecification } from "@/providers/specification/types";

export type State = {
  template: ITemplate | null;
  specifications: ISpecification[] | null;
};

export const state: State = {
  template: null,
  specifications: null,
};
