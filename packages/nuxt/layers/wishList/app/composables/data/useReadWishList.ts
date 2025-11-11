export type UseReadWishListOptions = UseActionHookOptions<{
  id: string;
}>;

const createOptions = optionsFactory<UseReadWishListOptions>();

export function useReadWishList(_options: UseReadWishListOptions) {
  const options = createOptions(_options);
  const { $graphql } = useNuxtApp();

  const key = computed(() => `wishList:read:${options.data.id}`);

  const res = useAsyncData(
    key,
    async () => {
      const { data, errors } = await $graphql.app.readWishList({
        id: options.data.id,
      });
      if (errors) {
        throw new Error(key.value, {
          cause: errors,
        });
      }
      return data?.wishList;
    },
    {
      watch: [
        () => options.data,
      ],
    },
  );

  return res;
}
