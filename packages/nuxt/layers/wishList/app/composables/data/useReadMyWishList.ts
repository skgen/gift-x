export type UseReadMyWishListOptions = UseActionHookOptions<{
  eventId: string;
}>;

const createOptions = optionsFactory<UseReadMyWishListOptions>();

export function useReadMyWishList(_options: UseReadMyWishListOptions) {
  const options = createOptions(_options);
  const { $graphql } = useNuxtApp();

  const key = computed(() => `myWishList:read:event:${options.data.eventId}`);

  const res = useAsyncData(
    key,
    async () => {
      const { data, errors } = await $graphql.app.readMyWishList({
        eventId: options.data.eventId,
      });
      if (errors) {
        throw new Error(key.value, {
          cause: errors,
        });
      }
      return data?.wishList.at(0) ?? null;
    },
    {
      watch: [
        () => options.data,
      ],
    },
  );

  return res;
}
