export type UseCreateWishOptions = UseActionHookOptions<{
  name: string;
  url: string | null;
  description: string | null;
  image: File | null;
  wishListId: string;
}>;

const createOptions = optionsFactory<UseCreateWishOptions>();

export function useCreateWish() {
  const { $graphql } = useNuxtApp();

  const { execute: createFile } = useCreateFile();

  const { folder } = useReadFolderByName({
    data: {
      name: 'wishes',
    },
  });

  const action = useAsync(async (_options: UseCreateWishOptions) => {
    const options = createOptions(_options);

    let image: Awaited<ReturnType<typeof createFile>> | null = null;

    if (options.data.image) {
      image = await createFile({
        data: {
          file: options.data.image,
          folderId: folder.value?.id ?? null,
        },
      });
    }

    const { data, errors } = await $graphql.app.createWish({
      data: {
        name: options.data.name,
        url: options.data.url,
        description: options.data.description,
        image: image
          ? {
              id: image.id,
              storage: image.storage,
              filename_download: image.fileNameDownload,
            }
          : null,
        wish_list: {
          id: options.data.wishListId,
        },
      },
    });

    if (errors || !data?.wish) {
      throw new Error(`wish:create`, {
        cause: errors,
      });
    }

    return data.wish;
  });

  return action;
}
