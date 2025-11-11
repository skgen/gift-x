export type UseReadEventWithSiblingsWishListOptions = UseActionHookOptions<{
  eventId: string;
}>;

const createOptions = optionsFactory<UseReadEventWithSiblingsWishListOptions>();

export function useReadEventWithSiblingsWishList(_options: UseReadEventWithSiblingsWishListOptions) {
  const options = createOptions(_options);
  const { $graphql } = useNuxtApp();

  const key = computed(() => `read:event:${options.data.eventId}:wishList:siblings`);

  const res = useAsyncData(
    key,
    async () => {
      const { data, errors } = await $graphql.app.readEventWithSiblingsWishList({
        id: options.data.eventId,
      });
      if (errors) {
        throw new Error(key.value, {
          cause: errors,
        });
      }
      return data?.event ?? null;
    },
    {
      watch: [
        () => options,
      ],
    },
  );

  return res;
}
