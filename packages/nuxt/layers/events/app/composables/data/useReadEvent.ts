export type UseReadEventOptions = UseActionHookOptions<{
  eventId: string;
}>;

const createOptions = optionsFactory<UseReadEventOptions>();

export function useReadEvent(_options: UseReadEventOptions) {
  const options = createOptions(_options);
  const { $graphql } = useNuxtApp();

  const key = computed(() => `read:event:${options.data.eventId}`);

  const res = useAsyncData(
    key,
    async () => {
      const { data, errors } = await $graphql.app.readEvent({
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
