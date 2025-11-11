export type UseCreateWishListOptions = UseActionHookOptions<{
  id: string;
}>;

const createOptions = optionsFactory<UseCreateWishListOptions>();

export function useCreateWishList() {
  const { $graphql } = useNuxtApp();

  const action = useAsync(async (_options: UseCreateWishListOptions) => {
    const options = createOptions(_options);

    const { errors } = await $graphql.app.createWishList({
      eventId: options.data.id,
    });

    if (errors) {
      throw new Error('wishList:create', {
        cause: errors,
      });
    }
  });

  return action;
}
