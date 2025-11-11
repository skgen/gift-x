<template>
  <div
    class="sk-AppInputImage"
    v-bind="bindInteractionStateProps({
      ...props,
      focused,
    })"
  >
    <MkFieldLabel v-if="slots.label">
      <slot name="label" />
    </MkFieldLabel>
    <div class="sk-AppInputImage-input">
      <div class="sk-AppInputImage-input-actions">
        <MkButton @click="() => inputFile?.click()">
          {{ props.value ? `Changer d'image` : `Choisir une image` }}
        </MkButton>
        <MkButton v-if="props.value" variant="outline" @click="() => onChange(null)">
          Supprimer
          <MkIcon icon="lucide:trash-2" />
        </MkButton>
      </div>
      <input
        ref="inputFile"
        type="file"
        accept="images/*"
        @input="handleInput"
      >
      <div v-if="props.value?.file" class="sk-AppInputImage-input-preview">
        <MkImage
          v-if="blob"
          :src="blob"
          :alt="props.value.file.name"
          :title="props.value.file.name"
          :ratio="[1, 1]"
          fit="cover"
        />
        <div class="sk-AppInputImage-input-preview-meta">
          <span class="sk-AppInputImage-input-preview-meta-type">
            {{ props.value.file.type }}
          </span>
          <span class="sk-AppInputImage-input-preview-meta-size">
            {{ prettyBytes(props.value.file.size, { locale: 'fr' }) }}
          </span>
        </div>
      </div>
    </div>
    <MkFieldHint v-if="slots.hint">
      <slot name="hint" />
    </MkFieldHint>
    <MkFieldError v-if="errors.hasErrors">
      {{ errors.formattedErrors }}
    </MkFieldError>
  </div>
</template>

<script lang="ts">
import type { InputEmits, InputProps, InputSlots } from '@skgn/melkor/nuxt/features';

export type AppInputImageValue = {
  id: string | null;
  file: File;
} | null;

export type AppInputImageProps = InputProps<AppInputImageValue> & {

};

export type AppInputImageEmits = InputEmits<AppInputImageValue> & {

};

export type AppInputImageSlots = InputSlots & {
};
</script>

<script lang="ts" setup>
import prettyBytes from 'pretty-bytes';

const props = defineProps<AppInputImageProps>();

const emit = defineEmits<AppInputImageEmits>();

const slots = defineSlots<AppInputImageSlots>();

const inputFile = useTemplateRef('inputFile');

const { onChange, focused } = useInput({
  props,
  emit,
});

const errors = useInputErrors(computed(() => props.errors));

function handleInput(evt: Event) {
  if (!evt.target) {
    return;
  }
  const { files } = evt.target as HTMLInputElement;

  if (!files) {
    return;
  }

  const newValue = files[0] ?? null;

  onChange(newValue
    ? {
        id: null,
        file: newValue,
      }
    : null);
}

const blob = computed(() =>
  props.value?.file ? window.URL.createObjectURL(props.value.file) : null,
);
</script>

<style lang="scss">
@use '@skgn/melkor/styles/mixins' as melkor;

.sk-AppInputImage {
  display: flex;
  flex-direction: column;
  gap: var(--mk-size-2);

  input {
    @include melkor.a11y-hidden;
  }

  &-input {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-2);

    &-actions {
      display: flex;
      gap: var(--mk-size-2);
      align-items: center;
    }

    &-preview {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--mk-border-color);
      border-radius: var(--mk-border-radius-size);

      &-meta {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        gap: var(--mk-size-2);
        align-items: center;
        padding: var(--mk-size-2);
        font-size: 0.8rem;
        font-style: italic;
        background-color: var(--mk-core-background-color);
        border-top-left-radius: var(--mk-border-radius-size);
        opacity: 0.6;

        &-type {
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &-size {
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
