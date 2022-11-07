import type { InjectionKey } from "vue";
import type { SpecificationProvider } from ".";
import type { ID } from "../types";

export const SPECIFICATION_PROVIDER_SYMBOL = Symbol(
  "SPECIFICATION_PROVIDER"
) as InjectionKey<SpecificationProvider>;

export interface ISpecification {
  id: ID;
  attributes: Record<string, string>;
  templateId: ID;
}

export type GetSpecificationResponse = ISpecification;

export type GetAllSpecificationsResponse = {
  specifications: ISpecification[];
};

export type CreateSpecificationResponse = {};
