export function useLogout() {
  const { $graphql } = useNuxtApp();

  const action = useAsync(async () => {
    await $graphql.system.logout();

    await navigateTo('/auth/login');
  });

  return action;
}
