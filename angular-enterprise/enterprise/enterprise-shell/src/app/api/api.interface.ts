export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface IEndpointConfig {
    key: string;                     // unique key
    path: string;                    // path template, e.g. /users/:id
    method: HttpMethod;              // HTTP method
    version?: string;                // optional API version segment
    requiresAuth?: boolean;          // auth required
    timeoutMs?: number;
}