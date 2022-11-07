import { provide } from "vue";
import axiosInstance from "./axios";
import { enableMock } from "./mock";
import { HTTP_PROVIDER_SYMBOL } from "./types";

const API_MOCK = import.meta.env.VITE_API_MOCK;

if (API_MOCK) {
  enableMock(axiosInstance);
}

provide(HTTP_PROVIDER_SYMBOL, axiosInstance);
