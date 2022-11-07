import type { ID } from "../../providers/types";

export type ITemplateAttrbiuteType =
  | "text"
  | "number"
  | "select"
  | "checkbox"
  | "radio";

export interface ITemplateAttribute {
  name: string;
  default?: string;
  type: ITemplateAttrbiuteType;

  // extra contains option based attributes meta values
  extra: unknown;
}

export interface ITemplate {
  id: ID;

  attributes: ITemplateAttribute[];
}
