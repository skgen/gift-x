<template>
  <NuxtLayout name="fullscreen" class="sk-LoginPage">
    <template #title>
      X-Gift
    </template>
    <div class="sk-LoginPage-container">
      <form class="sk-LoginPage-form" @submit.prevent="() => handleLogin()">
        <MkInputText v-bind="fields.username">
          <template #label>
            Username
          </template>
        </MkInputText>
        <MkInputText v-bind="fields.password">
          <template #label>
            Mot de passe
          </template>
        </MkInputText>
        <MkButton
          class="sk-LoginPage-form-submit"
          :disabled="!valid"
          type="submit"
        >
          Login <AppLoader v-if="pending" />
        </MkButton>
        <MkFieldError v-if="error">
          {{ error }}
        </MkFieldError>
      </form>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { InputTextProps } from '@skgn/melkor/nuxt/components';

import { isString } from 'lodash-es';

definePageMeta({
  middleware: [
    'auth',
  ],
});

const route = useRoute();

const redirectTo = route.query.redirectTo;

const error = ref<string | null>(null);

const { data: formData, valid, fields } = useForm({
  fields: {
    username: useInputBinding<InputTextProps>({
      value: null,
      name: 'username',
    }),
    password: useInputBinding<InputTextProps>({
      value: null,
      secure: true,
      name: 'password',
    }),
  },
});

const { execute: login, pending } = useLogin();

async function handleLogin() {
  if (!valid) {
    return;
  }

  const { errors } = await login({
    data: {
      username: formData.value.username!,
      password: formData.value.password!,
    },
  });

  if (errors) {
    error.value = 'Username ou mot de passe incorrect';
    return;
  }

  if (isString(redirectTo)) {
    return await navigateTo(redirectTo);
  }
  return await navigateTo('/');
}
</script>

<style lang="scss">
.sk-LoginPage {
  &-form {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-4);
    width: 300px;
    max-width: 100%;

    &-submit {
      margin-top: var(--mk-size-8);
    }
  }
}
</style>
