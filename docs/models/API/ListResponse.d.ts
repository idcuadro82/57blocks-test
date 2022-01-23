export declare type PaginationParams = {
    limit: number;
    offset: number;
};
export declare type PaginationResponse = {
    totalRecords: number;
    nextUrl?: string | null;
    previousUrl?: string | null;
};
export declare const DEFAULT_PAGINATION_RESPONSE: {
    data: never[];
    pagination: {
        totalRecords: number;
        previousUrl: null;
        nextUrl: null;
    };
};
export declare type ListResponse<T> = {
    data: T[];
    pagination: PaginationResponse;
};
