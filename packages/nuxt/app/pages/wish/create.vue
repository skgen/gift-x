<template>
  <NuxtLayout name="default" class="sk-WishCreatePage">
    <template #title>
      Ajouter un souhait
    </template>
    <div class="sk-WishCreatePage-container">
      <WishForm
        :loading="pending"
        @submit="handleSubmit"
      >
        <template #submit>
          Ajouter
        </template>
      </WishForm>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { WishFormData } from '#layers/wish/app/components/WishForm.vue';

import z from 'zod';

definePageMeta({
  middleware: [
    'auth',
  ],
});

const wishListId = useRouteQuery(
  'wishListId',
  z.string(),
);

const submitRedirect = useRouteQuery(
  'submitRedirect',
  z.string().optional(),
);

const { execute: createWish, pending } = useCreateWish();

const toast = useToast();

async function handleSubmit(data: WishFormData) {
  const { image, ...otherData } = data;

  const { name } = await createWish({
    data: {
      ...otherData,
      image: image?.file ?? null,
      wishListId: wishListId.value,
    },
  });

  toast.create({
    slots: {
      title: [
        h('span', {}, { default: () => `Le souhait ` }),
        h('strong', {}, { default: () => name }),
        h('span', {}, { default: () => ' à été créé.' }),
      ],
    },
  });

  if (submitRedirect.value) {
    navigateTo(submitRedirect.value);
  }
}
</script>
