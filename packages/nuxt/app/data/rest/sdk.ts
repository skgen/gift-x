import type { InternalAxiosRequestConfig } from 'axios';

import { client } from '@@/generated/rest/client.gen';
import * as requests from '@@/generated/rest/sdk.gen';

export interface RestSdk {
  client: typeof client;
  exec: typeof requests;
}

interface restSdkOptions {
  url: string;
  onBeforeRequest?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
}

export async function createRestSdk(options: restSdkOptions) {
  client.setConfig({
    baseURL: options.url,
  });

  client.instance.interceptors.request.use((config) => {
    if (options.onBeforeRequest) {
      return options.onBeforeRequest(config);
    }
    return config;
  });

  const sdk: RestSdk = {
    client,
    exec: requests,
  };

  return sdk;
}
