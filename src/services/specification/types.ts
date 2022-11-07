import type { ID } from "../../providers/types";

export interface ISpecification {
  id: ID;
  attributes: Record<string, string>;
  templateId: ID;
}
