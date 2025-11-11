<template>
  <MkCard class="sk-WishMiniature">
    <div class="sk-WishMiniature-content">
      <strong>{{ props.name }}</strong>
      <div v-if="props.image" class="sk-WishMiniature-content-preview">
        <NuxtImg :src="`/d6s/${props.image.id}`" />
      </div>
    </div>
    <div class="sk-WishMiniature-actions">
      <MkButton icon intent="error" variant="outline" @click="() => handleConfirmDelete()">
        <AppLoader v-if="pending" />
        <MkIcon v-else icon="lucide:trash-2" />
      </MkButton>

      <NuxtLink v-if="props.editRoute" :to="props.editRoute">
        <MkButton icon intent="neutral" variant="outline">
          <MkIcon icon="lucide:pencil-line" />
        </MkButton>
      </NuxtLink>
    </div>
  </MkCard>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';

import { Button, Icon } from '@skgn/melkor/nuxt/components';

interface Props {
  id: string;
  name: string;
  image?: {
    id: string;
    alt?: string;
    title?: string;
  };
  editRoute?: RouteLocationRaw;
}

interface Emits {
  delete: [];
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const toast = useToast();
const { execute, pending } = useDeleteWish();

function handleConfirmDelete() {
  toast.create({
    slots: {
      title: [
        h('span', {}, { default: () => 'Voulez vous vraiment supprimer : ' }),
        h('br'),
        h('strong', {}, { default: () => props.name }),
      ],
      actions: [
        h(
          Button,
          {
            variant: 'outline',
            intent: 'error',
            onClick: () => handleDelete(),
          },
          {
            default: () => [
              'Confirmer la suppression',
              h(
                Icon,
                {
                  icon: 'heroicons:trash-solid',
                },
              ),
            ],
          },
        ),
      ],
    },
  });
}

async function handleDelete() {
  await execute({
    data: {
      id: props.id,
    },
  });
  emits('delete');
}
</script>

<style lang="scss">
.sk-WishMiniature {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-content {
    display: flex;
    flex-wrap: wrap;
    gap: var(--mk-size-4);
    align-items: center;

    strong {
      font-size: 1.1rem;
    }

    &-preview {
      position: relative;
      width: 100px;
      height: 50px;
      overflow: hidden;
      border: 1px solid var(--mk-border-color);
      border-radius: var(--mk-border-radius-size);

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &-actions {
    display: flex;
    gap: var(--mk-size-4);
    align-items: center;
  }
}
</style>
