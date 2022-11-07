import type { IAPIResponse } from "../types";

export type IMockRequestType =
  | "onGet"
  | "onPost"
  | "onPut"
  | "onPatch"
  | "onDelete";

interface RequestDataMatcher {
  [index: string]: any;
  params?: {
    [index: string]: any;
  };
}

interface HeadersMatcher {
  [header: string]: string;
}

export interface IMockRequest<TData = unknown> {
  type: IMockRequestType;

  matcher?: string | RegExp;
  body?: RequestDataMatcher;
  headers?: HeadersMatcher;

  response: IAPIResponse<TData>;
}
