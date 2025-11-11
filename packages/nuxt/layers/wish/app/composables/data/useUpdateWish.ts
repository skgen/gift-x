import type { Update_Wish_Input } from '@@/generated/graphql/app/sdk';

import { isUndefined } from 'lodash-es';

export type UseUpdateWishOptions = UseActionHookOptions<{
  id: string;
  name?: string;
  url?: string | null;
  description?: string | null;
  image?: File | null;
  wishListId?: string;
}>;

const createOptions = optionsFactory<UseUpdateWishOptions>();

export function useUpdateWish() {
  const { $graphql } = useNuxtApp();

  const { execute: createFile } = useCreateFile();

  const { folder } = useReadFolderByName({
    data: {
      name: 'wishes',
    },
  });

  const action = useAsync(async (_options: UseUpdateWishOptions) => {
    const options = createOptions(_options);

    const { id } = options.data;

    const reqData: Update_Wish_Input = { };

    let image: Awaited<ReturnType<typeof createFile>> | undefined;
    if (options.data.image) {
      image = await createFile({
        data: {
          file: options.data.image,
          folderId: folder.value?.id ?? null,
        },
      });
      reqData.image = {
        id: image.id,
        storage: image.storage,
        filename_download: image.fileNameDownload,
      };
    }
    if (!isUndefined(options.data.name)) {
      reqData.name = options.data.name;
    }
    if (!isUndefined(options.data.url)) {
      reqData.url = options.data.url;
    }
    if (!isUndefined(options.data.wishListId)) {
      reqData.wish_list = {
        id: options.data.wishListId,
      };
    }
    if (!isUndefined(options.data.description)) {
      reqData.description = options.data.description;
    }

    const { data, errors } = await $graphql.app.updateWish({
      id,
      data: reqData,
    });

    if (errors || !data?.wish) {
      throw new Error(`wish:update:${id}`, {
        cause: errors,
      });
    }

    return data.wish;
  });

  return action;
}
