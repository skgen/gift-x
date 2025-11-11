export interface UseReadHookOptions<TData> {
  asyncOptions?: {
    immediate: boolean;
  };
  data: TData;
}

export interface UseActionHookOptions<TData> {
  data: TData;
}
