import { IEndpointConfig } from './api.interface';

/**
 * Default base URL selection. Uses environment.apiBaseUrl if available
 */
const DEFAULT_BASE = '/api/v1';

export enum EndpointName {
  // platform endpoints
  CONFIG = 'CONFIG',
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_REFRESH = 'AUTH_REFRESH',

  USERS_LIST = 'USERS_LIST',
  USER_GET = 'USER_GET',
  USER_UPDATE = 'USER_UPDATE',

  PRODUCTS_LIST = 'PRODUCTS_LIST',
  PRODUCT_GET = 'PRODUCT_GET',

  ORDERS_LIST = 'ORDERS_LIST',
  ORDER_CREATE = 'ORDER_CREATE',

  HEALTH = 'HEALTH',
}

export const ENDPOINTS: Record<
  EndpointName,
  IEndpointConfig
> = {
  [EndpointName.CONFIG]: {
    key: EndpointName.CONFIG,
    path: `${DEFAULT_BASE}/platform/config`,
    method: 'POST',
    requiresAuth: false,
    timeoutMs: 10000,
  },
  [EndpointName.AUTH_LOGIN]: {
    key: EndpointName.AUTH_LOGIN,
    path: '/auth/login',
    method: 'POST',
    requiresAuth: false,
    timeoutMs: 10000,
  },
  [EndpointName.AUTH_REFRESH]: {
    key: EndpointName.AUTH_REFRESH,
    path: '/auth/refresh',
    method: 'POST',
    requiresAuth: false,
    timeoutMs: 10000,
  },

  [EndpointName.USERS_LIST]: {
    key: EndpointName.USERS_LIST,
    path: '/users',
    method: 'GET',
    requiresAuth: true,
  },
  [EndpointName.USER_GET]: {
    key: EndpointName.USER_GET,
    path: '/users/:id',
    method: 'GET',
    requiresAuth: true,
  },
  [EndpointName.USER_UPDATE]: {
    key: EndpointName.USER_UPDATE,
    path: '/users/:id',
    method: 'PUT',
    requiresAuth: true,
  },

  [EndpointName.PRODUCTS_LIST]: {
    key: EndpointName.PRODUCTS_LIST,
    path: '/products',
    method: 'GET',
    requiresAuth: false,
  },
  [EndpointName.PRODUCT_GET]: {
    key: EndpointName.PRODUCT_GET,
    path: '/products/:sku',
    method: 'GET',
    requiresAuth: false,
  },

  [EndpointName.ORDERS_LIST]: {
    key: EndpointName.ORDERS_LIST,
    path: '/orders',
    method: 'GET',
    requiresAuth: true,
  },
  [EndpointName.ORDER_CREATE]: {
    key: EndpointName.ORDER_CREATE,
    path: '/orders',
    method: 'POST',
    requiresAuth: true,
  },

  [EndpointName.HEALTH]: {
    key: EndpointName.HEALTH,
    path: '/health',
    method: 'GET',
    requiresAuth: false,
  },
};

/**
 * Build a full URL from an endpoint config.
 * - Replaces path params like :id from params.pathParams
 * - Appends query parameters from params.query
 */
export function getEndpointUrl(
  name: EndpointName,
  params?: {
    baseUrl?: string;
    pathParams?: Record<string, string | number>;
    query?: Record<
      string,
      string | number | boolean | undefined | null
    >;
    versionSegment?: string; // overrides endpoint.version if needed
  }
): string {
  const cfg = ENDPOINTS[name];
  const base = params?.baseUrl ?? DEFAULT_BASE;
  const version =
    params?.versionSegment ?? cfg.version ?? '';
  let path = cfg.path;

  // Replace :param placeholders
  if (params?.pathParams) {
    for (const [k, v] of Object.entries(
      params.pathParams
    )) {
      path = path.replace(
        new RegExp(`:${k}\\b`, 'g'),
        encodeURIComponent(String(v))
      );
    }
  }

  // If any unreplaced placeholders remain, leave them as-is (caller should handle)
  const segments = [
    base.replace(/\/+$/g, ''),
    version ? version.replace(/^\/+|\/+$/g, '') : '',
    path.replace(/^\/+/, ''),
  ]
    .filter(Boolean)
    .join('/');

  // Build query string
  let qs = '';
  if (params?.query) {
    const parts: string[] = [];
    for (const [k, v] of Object.entries(params.query)) {
      if (v === undefined || v === null) continue;
      parts.push(
        `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`
      );
    }
    if (parts.length) qs = `?${parts.join('&')}`;
  }

  return `${segments}${qs}`;
}
