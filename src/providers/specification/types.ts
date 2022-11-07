import type { ID } from "../types";

export interface ISpecification {
  id: ID;
  name: string;
  attributes: Record<string, string>;
  templateId: ID;
}

export type GetSpecificationResponse = ISpecification;

export type GetAllSpecificationsResponse = {
  specifications: ISpecification[];
};

export type CreateSpecificationResponse = {};
