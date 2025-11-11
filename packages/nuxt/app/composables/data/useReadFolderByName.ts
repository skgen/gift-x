export type UseReadFolderByNameOptions = UseReadHookOptions<{
  name: string;
}>;

const createOptions = optionsFactory<UseReadFolderByNameOptions>();

export function useReadFolderByName(_options: UseReadFolderByNameOptions) {
  const options = createOptions(_options);

  const { $graphql } = useNuxtApp();
  const key = computed(() => `folder:readByName:${options.data.name}`);

  const { data, ...otherProps } = useAsyncData(
    key,
    async () => {
      const res = await $graphql.system.readFolderByName({
        folderName: options.data.name,
      });

      if (res.errors) {
        throw new Error(key.value, {
          cause: res.errors,
        });
      }

      return res.data?.folders.at(0) ?? null;
    },
    {
      ...options.asyncOptions,
      watch: [
        () => options.data,
      ],
    },
  );

  return {
    ...otherProps,
    folder: data,
  };
}
