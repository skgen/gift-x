import type { CreateFileErrors, CreateFileResponses } from '@@/generated/rest/types.gen';

export type UseCreateFileOptions = UseActionHookOptions<{
  file: File;
  folderId: string | null;
}>;

const createOptions = optionsFactory<UseCreateFileOptions>();

export function useCreateFile() {
  const { $rest, $graphql } = useNuxtApp();

  const action = useAsync(async (_options: UseCreateFileOptions) => {
    const options = createOptions(_options);

    const { file, ...otherOptions } = options.data;

    // Create the file
    const formData = new FormData();
    formData.append('file', options.data.file);

    const createRes = await $rest.client.post<CreateFileResponses, CreateFileErrors>({
      responseType: 'json',
      url: '/files',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const id = createRes.data?.data?.id;

    if (createRes.error?.error || !id) {
      throw new Error('file:create', {
        cause: createRes.error?.error,
      });
    }

    // Patch the file with other infos
    const updateRes = await $graphql.system.updateFile({
      id,
      data: {
        folder: otherOptions.folderId
          ? {
              id: otherOptions.folderId,
            }
          : null,
      },
    });

    if (updateRes.errors || !updateRes.data?.file) {
      throw new Error(`file:update:${id}`, {
        cause: updateRes.errors,
      });
    }

    return updateRes.data.file;
  });

  return action;
}
