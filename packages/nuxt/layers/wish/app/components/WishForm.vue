<template>
  <MkCard class="sk-WishForm">
    <form class="sk-WishForm-form" @submit.prevent="() => handleSubmit()">
      <div class="sk-WishForm-form-fields">
        <MkInputText v-bind="fields.name">
          <template #label>
            Nom*
          </template>
          <template #hint>
            Requis
          </template>
        </MkInputText>
        <MkInputText v-bind="fields.url">
          <template #label>
            Lien
          </template>
          <template #hint>
            Optionnel
          </template>
        </MkInputText>
        <AppInputImage v-bind="fields.image">
          <template #label>
            Photo
          </template>
          <template #hint>
            Une image pour aider à visualiser le souhait
            <br>
            Optionnel
          </template>
        </AppInputImage>
        <MkInputTextarea v-bind="fields.description">
          <template #label>
            Description
            <AppSmallHint v-if="fields.description.value">
              {{ `(${fields.description.value.length}/600)` }}
            </AppSmallHint>
          </template>
          <template #hint>
            Optionnel
          </template>
        </MkInputTextarea>
      </div>
      <div class="sk-WishForm-form-actions">
        <MkButton
          :disabled="!valid"
          type="submit"
        >
          <slot name="submit" /> <AppLoader v-if="props.loading" />
        </MkButton>
      </div>
    </form>
  </MkCard>
</template>

<script lang="ts" setup>
import type { DeepPartial } from '@skgn/kit';
import type { InputTextareaProps, InputTextProps } from '@skgn/melkor/nuxt/components';

import type { AppInputImageProps, AppInputImageValue } from '@/components/AppInputImage.vue';

import z from 'zod';

interface Props {
  loading?: boolean;
  data?: DeepPartial<WishFormData>;
}

interface Emits {
  submit: [data: WishFormData];
}

export interface WishFormData {
  name: string;
  url: string | null;
  description: string | null;
  image: AppInputImageValue;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    loading: false,
  },
);

const emit = defineEmits<Emits>();

const { fields, data, valid } = useForm({
  fields: {
    name: useInputBinding<InputTextProps>({
      value: props.data?.name ?? null,
      valid: false,
      validate: z
        .string({
          error: `Le nom ne doit par être vide`,
        }),
      validateOn: props.data?.name ? ['mounted', 'change'] : ['dirty'],
    }),
    url: useInputBinding<InputTextProps>({
      value: props.data?.url ?? null,
      validate: z
        .url({
          error: `Le lien n'est pas un url valide`,
        })
        .nullable(),
      validateOn: props.data?.url ? ['mounted', 'change'] : ['dirty'],
    }),
    description: useInputBinding<InputTextareaProps>({
      value: props.data?.description ?? null,
      validate: z
        .string()
        .max(
          600,
          { error: `La description ne peut pas excéder 600 caractères` },
        )
        .nullable(),
      validateOn: props.data?.description ? ['mounted', 'change'] : ['dirty'],
      rows: 6,
    }),
    image: useInputBinding<AppInputImageProps>({
      value: props.data?.image ?? null,
      validate: z.object({
        id: z.string().nullable(),
        file: z.file(),
      }).nullable(),
      validateOn: props.data?.image ? ['mounted', 'change'] : ['dirty'],
    }),
  },
});

function handleSubmit() {
  if (!valid) {
    return;
  }

  emit('submit', {
    name: data.value.name!,
    url: data.value.url,
    description: data.value.description,
    image: data.value.image,
  });
}
</script>

<style lang="scss">
.sk-WishForm {
  &-form {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-10);

    &-fields {
      display: flex;
      flex-direction: column;
      gap: var(--mk-size-6);
    }

    &-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
