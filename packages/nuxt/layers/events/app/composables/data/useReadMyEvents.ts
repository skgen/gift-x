export function useReadMyEvents() {
  const { $graphql } = useNuxtApp();

  const sessionStore = useSessionStore();

  const { me } = storeToRefs(sessionStore);

  const key = computed(() => `read:events:user:me`);

  const res = useAsyncData(
    key,
    async () => {
      const { data, errors } = await $graphql.app.readMyEvents();
      if (errors) {
        throw new Error(key.value, {
          cause: errors,
        });
      }
      return data?.events ?? [];
    },
    {
      watch: [
        // Watcher is to ensure rerun on user change
        me,
      ],
    },
  );

  return res;
}
