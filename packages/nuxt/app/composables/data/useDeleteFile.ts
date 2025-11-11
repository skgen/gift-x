export type UseDeleteFileOptions = UseActionHookOptions<{
  id: string;
}>;

const createOptions = optionsFactory<UseDeleteFileOptions>();

export function useDeleteFile() {
  const { $graphql } = useNuxtApp();

  const action = useAsync(async (_options: UseDeleteFileOptions) => {
    const options = createOptions(_options);

    const { id } = options.data;

    const { errors } = await $graphql.system.deleteFile({
      id,
    });

    if (errors) {
      throw new Error(`file:delete:${id}`, {
        cause: errors,
      });
    }
  });

  return action;
}
