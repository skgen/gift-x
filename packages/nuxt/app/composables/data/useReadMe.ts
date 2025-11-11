export function useReadMe() {
  const { $graphql } = useNuxtApp();

  const key = computed(() => 'user:read:me');

  const res = useAsyncData(
    key,
    async () => {
      const { data, errors } = await $graphql.system.readMe();

      if (errors) {
        throw new Error(key.value, {
          cause: errors,
        });
      }

      return data ?? null;
    },
  );

  return res;
}
