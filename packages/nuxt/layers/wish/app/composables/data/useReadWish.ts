export type UseReadWishOptions = UseActionHookOptions<{
  id: string;
}>;

const createOptions = optionsFactory<UseReadWishOptions>();

export function useReadWish(_options: UseReadWishOptions) {
  const options = createOptions(_options);
  const { $graphql } = useNuxtApp();

  const key = computed(() => `wish:read:${options.data.id}`);

  const res = useAsyncData(
    key,
    async () => {
      const { data, errors } = await $graphql.app.wish({
        id: options.data.id,
      });
      if (errors) {
        throw new Error(key.value, {
          cause: errors,
        });
      }
      return data?.wish ?? null;
    },
    {
      default: () => null,
      watch: [
        () => options.data,
      ],
    },
  );

  return res;
}
