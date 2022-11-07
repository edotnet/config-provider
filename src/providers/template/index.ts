import type { AxiosInstance } from "axios";
import { inject, provide } from "vue";
import { HTTP_PROVIDER_SYMBOL, type IAPIResponse } from "../http/types";
import type { ID } from "../types";
import {
  TEMPLATES_PROVIDER_SYMBOL,
  type CreateTemplateResponse,
  type GetAllTemplatesResponse,
  type GetTemplateResponse,
  type ITemplate,
} from "./types";

export const API_ENDPOINT = "/api/templates";

export class TemplateProvider {
  constructor(private httpAdapter: AxiosInstance) {}

  public getTemplateById(id: ID): Promise<IAPIResponse<GetTemplateResponse>> {
    return this.httpAdapter.get(`${API_ENDPOINT}/${id}`);
  }

  public getTemplates(): Promise<IAPIResponse<GetAllTemplatesResponse>> {
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
