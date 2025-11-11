import type { DeepPartial } from '@skgn/kit';
import type { ZodError } from 'zod';

import type { RestSdk } from '@/data/rest/sdk';

import { AxiosError } from 'axios';
import defu from 'defu';
import { isFunction, isObject } from 'lodash-es';

type SdkResponse = Awaited<ReturnType<RestSdk['client']['request']>>;

export function unwrapResponse<TResponse extends SdkResponse>(response: TResponse) {
  let error: AxiosError | ZodError | null = null;

  if (response instanceof AxiosError) {
    const { error: _error, data, ...otherProps } = response;
    error = otherProps;
  }
  if (isZodError(response)) {
    error = response;
  }
  const { data, status } = response;

  if (error) {
    return {
      data: null,
      error,
      status: status!,
    };
  }

  type TR = NonNullable<TResponse['data']>;
  type TData = TR extends { data?: infer TU } ? TU : TR;

  const _data = (isObject(data) && 'data' in data ? data.data : data) as TData;

  return {
    data: _data,
    error,
    status: status!,
  };
}

export function optionsFactory<TOptions extends object>(defaultOptions?: (() => DeepPartial<TOptions>) | DeepPartial<TOptions>) {
  return (options: TOptions) => {
    if (defaultOptions) {
      return defu(options, isFunction(defaultOptions) ? defaultOptions() : defaultOptions);
    }
    return options;
  };
}
