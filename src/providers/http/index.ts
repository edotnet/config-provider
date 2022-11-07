import type { AxiosInstance } from "axios";
import { provide, type InjectionKey } from "vue";
import axiosInstance from "./axios";
import { enableMock } from "./mock";

const API_MOCK = import.meta.env.VITE_API_MOCK;

export const HTTP_PROVIDER_SYMBOL = Symbol(
  "HTTP_PROVIDER"
) as InjectionKey<AxiosInstance>;

provide(HTTP_PROVIDER_SYMBOL, axiosInstance);

if (API_MOCK) {
  enableMock(axiosInstance);
}
