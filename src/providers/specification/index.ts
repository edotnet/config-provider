import type { AxiosInstance } from "axios";
import { inject, provide, type InjectionKey } from "vue";
import { HTTP_PROVIDER_SYMBOL } from "../http";
import type { IAPIResponse } from "../http/types";
import type { ID } from "../types";
import type {
  CreateSpecificationResponse,
  GetAllSpecificationsResponse,
  GetSpecificationResponse,
  ISpecification,
} from "./types";

export const SPECIFICATION_PROVIDER_SYMBOL = Symbol(
  "SPECIFICATION_PROVIDER"
) as InjectionKey<SpecificationProvider>;

export const API_ENDPOINT = "/api/specifications";

export class SpecificationProvider {
  constructor(private httpAdapter: AxiosInstance) {}

  public getSpecificationById(
    id: ID
  ): Promise<IAPIResponse<GetSpecificationResponse>> {
    return this.httpAdapter.get(`${API_ENDPOINT}/${id}`);
  }

  public getSpecifications(): Promise<
    IAPIResponse<GetAllSpecificationsResponse>
  > {
    return this.httpAdapter.get(API_ENDPOINT);
  }

  public createSpecification(
    specification: ISpecification
  ): Promise<IAPIResponse<CreateSpecificationResponse>> {
    return this.httpAdapter.post(API_ENDPOINT, specification);
  }
}

provide(
  SPECIFICATION_PROVIDER_SYMBOL,
  new SpecificationProvider(inject(HTTP_PROVIDER_SYMBOL)!)
);
