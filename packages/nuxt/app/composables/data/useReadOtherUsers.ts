export function userReadOtherUsers() {
  const { $graphql } = useNuxtApp();

  const key = computed(() => 'user:read:others');

  const res = useAsyncData(
    key,
    async () => {
      const { data, errors } = await $graphql.system.readOtherUsers();

      if (errors) {
        throw new Error(key.value, {
          cause: errors,
        });
      }

      return data?.users ?? [];
    },
  );

  return res;
}
