import type { InjectionKey } from "vue";
import type { TemplateProvider } from ".";
import type { ID } from "../types";

export const TEMPLATES_PROVIDER_SYMBOL = Symbol(
  "TEMPLATES_PROVIDER"
) as InjectionKey<TemplateProvider>;

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
  extra?: unknown;
}

export interface ITemplate {
  id: ID;
  name: string;

  attributes: ITemplateAttribute[];
}

export type GetTemplateResponse = ITemplate;

export type GetAllTemplatesResponse = {
  templates: ITemplate[];
};

export type CreateTemplateResponse = {};
