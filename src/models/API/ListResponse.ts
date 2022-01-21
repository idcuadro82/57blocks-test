export type PaginationParams = { limit: number; offset: number };

export type PaginationResponse = {
  totalRecords: number;
  nextUrl?: string | null;
  previousUrl?: string | null;
};

export const DEFAULT_PAGINATION_RESPONSE = {
  data: [],
  pagination: {
    totalRecords: 0,
    previousUrl: null,
    nextUrl: null,
  },
};

export type ListResponse<T> = {
  data: T[];
  pagination: PaginationResponse;
};
