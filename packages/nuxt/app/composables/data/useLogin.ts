export type UseLoginOptions = UseActionHookOptions<{
  username: string;
  password: string;
}>;

const createOptions = optionsFactory<UseLoginOptions>();

export function useLogin() {
  const { $graphql } = useNuxtApp();

  const action = useAsync(async (_options: UseLoginOptions) => {
    const options = createOptions(_options);

    const res = await $graphql.system.login({
      email: options.data.username,
      password: options.data.password,
    });

    return res;
  });

  return action;
}
