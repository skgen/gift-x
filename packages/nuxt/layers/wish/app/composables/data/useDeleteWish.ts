export type UseDeleteWishOptions = UseActionHookOptions<{
  id: string;
}>;

const createOptions = optionsFactory<UseDeleteWishOptions>();

export function useDeleteWish() {
  const { $graphql } = useNuxtApp();

  const { execute: deleteFile } = useDeleteFile();

  const action = useAsync(async (_options: UseDeleteWishOptions) => {
    const options = createOptions(_options);

    const { id } = options.data;

    const { data } = await $graphql.app.readWishToDeleteWish({
      id,
    });

    const imageId = data?.wish?.image?.id;

    if (imageId) {
      await deleteFile({
        data: {
          id: imageId,
        },
      });
    }

    const { errors } = await $graphql.app.deleteWish({
      id,
    });

    if (errors) {
      throw new Error(`wish:delete:${id}`, {
        cause: errors,
      });
    }
  });

  return action;
}
