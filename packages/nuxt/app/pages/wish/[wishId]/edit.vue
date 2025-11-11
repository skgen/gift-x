<template>
  <NuxtLayout name="default" class="sk-WishEditPage">
    <template #title>
      Editer un souhait
    </template>
    <div class="sk-WishEditPage-container">
      <WishForm
        v-if="data"
        :data="data"
        :loading="pending"
        @submit="handleSubmit"
      >
        <template #submit>
          Sauvegarder
        </template>
      </WishForm>
      <WishFormSkeleton v-else />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { WishFormData } from '#layers/wish/app/components/WishForm.vue';
import type { DeepPartial } from '@skgn/kit';
import type { AppInputImageValue } from '~/components/AppInputImage.vue';

import z from 'zod';

definePageMeta({
  middleware: [
    'auth',
  ],
});

const wishId = useRouteParam(
  'wishId',
  z.string(),
);

const submitRedirect = useRouteQuery(
  'submitRedirect',
  z.string().optional(),
);

const img = useImage();

const wish = useReadWish(reactive({
  data: {
    id: wishId,
  },
}));

const data = ref<DeepPartial<WishFormData> | null>(null);

watch(wish.data, async (newWish) => {
  if (!newWish) {
    return;
  }

  let image: AppInputImageValue = null;
  if (newWish.image?.id) {
    image = {
      id: newWish.image.id,
      file: await fileFromUrl(img(`/d6s/${newWish.image.id}`)),
    };
  }

  data.value = {
    name: newWish.name,
    url: newWish.url,
    description: newWish.description,
    image,
  };
}, {
  immediate: true,
});

const updateWish = useUpdateWish();

const deleteFile = useDeleteFile();

const pending = computed(() =>
  updateWish.pending.value
  || deleteFile.pending.value,
);

const toast = useToast();

async function handleSubmit(data: WishFormData) {
  if (!wish.data.value || !wish.data.value.wishList?.id) {
    return;
  }

  const { image, ...otherData } = data;

  const _image = image?.file && !image.id ? image.file : undefined;

  const { name } = await updateWish.execute({
    data: {
      id: wish.data.value.id,
      ...otherData,
      image: _image,
    },
  });

  // Cleaning old image
  if (wish.data.value?.image?.id && !data.image?.id) {
    await deleteFile.execute({
      data: {
        id: wish.data.value?.image?.id,
      },
    });
  }

  toast.create({
    slots: {
      title: [
        h('span', {}, { default: () => `Le souhait ` }),
        h('strong', {}, { default: () => name }),
        h('span', {}, { default: () => ' à été mis à jour.' }),
      ],
    },
  });

  if (submitRedirect.value) {
    navigateTo(submitRedirect.value);
  }
}
</script>
