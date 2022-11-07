import type { AxiosInstance } from "axios";
import { inject, provide, type InjectionKey } from "vue";
import { HTTP_PROVIDER_SYMBOL } from "../http";
import type { IAPIResponse } from "../http/types";
import type {
  CreateTemplateResponse,
  GetTemplateResponse,
  ITemplate,
} from "./types";

export const TEMPLATES_PROVIDER_SYMBOL = Symbol(
  "TEMPLATES_PROVIDER"
) as InjectionKey<TemplateProvider>;

export const API_ENDPOINT = "/api/templates";

export class TemplateProvider {
  constructor(private httpAdapter: AxiosInstance) {}

  public getTemplate(): Promise<IAPIResponse<GetTemplateResponse>> {
    return this.httpAdapter.get(API_ENDPOINT);
  }

  public createTemplate(
    template: ITemplate
  ): Promise<IAPIResponse<CreateTemplateResponse>> {
    return this.httpAdapter.post(API_ENDPOINT, template);
  }
}

provide(
  TEMPLATES_PROVIDER_SYMBOL,
  new TemplateProvider(inject(HTTP_PROVIDER_SYMBOL)!)
);
