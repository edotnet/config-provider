export interface IAPIResponse<TData = unknown> {
  status: number;
  data?: TData;

  errors?: string[];
}
