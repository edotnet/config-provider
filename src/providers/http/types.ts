import type { AxiosInstance } from "axios";
import type { InjectionKey } from "vue";

export interface IAPIResponse<TData = unknown> {
  status: number;
  data?: TData;

  errors?: string[];
}

export const HTTP_PROVIDER_SYMBOL = Symbol(
  "HTTP_PROVIDER"
) as InjectionKey<AxiosInstance>;
