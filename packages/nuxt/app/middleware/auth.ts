export default defineNuxtRouteMiddleware(async (to, from) => {
  const sessionStore = useSessionStore();
  const { $graphql } = useNuxtApp();

  const { data, errors } = await $graphql.system.readMe();

  if (errors || !data?.user) {
    sessionStore.me = null;
  }
  else {
    const { id, firstName, lastName } = data.user;
    sessionStore.me = {
      id,
      firstName,
      lastName,
    };
  }

  if (sessionStore.me && to.path === '/auth/login') {
    return navigateTo('/');
  }
  if (!sessionStore.me && to.path !== '/auth/login') {
    const redirectTo = from.fullPath !== '/auth/login' ? from.fullPath : undefined;
    return navigateTo({
      path: `/auth/login`,
      query: {
        redirectTo,
      },
    });
  }
});
