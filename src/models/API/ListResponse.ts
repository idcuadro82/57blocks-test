export type PaginationParams = { limit: number; offset: number };

export type PaginationResponse = {
  totalRecords: number;
  nextUrl?: string | null;
  previousUrl?: string | null;
};

export type ListResponse<T> = {
  data: T[];
  pagination: PaginationResponse;
};
