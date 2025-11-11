<template>
  <NuxtLayout name="default" class="sk-EventWishPage">
    <template #title>
      {{ event.data.value?.name }}
    </template>
    <MkCard
      v-if="wish.data.value"
      class="sk-EventWishPage-container"
    >
      <h2 class="sk-EventWishPage-title">
        {{ wish.data.value.name }}
      </h2>

      <NuxtLink
        v-if="wish.data.value.url"
        :to="wish.data.value.url"
        target="_blank"
      >
        <MkButton variant="outline">
          Voir le lien
        </MkButton>
      </NuxtLink>

      <NuxtImg
        :src="`/d6s/${wish.data.value.image?.id}`"
        class="sk-EventWishPage-image"
      />

      <MkCard v-if="wish.data.value.description" class="sk-EventWishPage-description">
        <span class="sk-EventWishPage-description-label">Note :</span>
        <p class="sk-EventWishPage-description-content">
          {{ wish.data.value.description }}
        </p>
      </MkCard>
    </MkCard>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import z from 'zod';

definePageMeta({
  middleware: [
    'auth',
  ],
});

const eventId = useRouteParam('eventId', z.string());

const wishId = useRouteParam('wishId', z.string());

const event = useReadEvent(reactive({
  data: {
    eventId,
  },
}));

const wish = useReadWish(
  reactive({
    data: {
      id: wishId,
    },
  }),
);

watch([wish.pending, wish.data], ([_, __]) => {
  if (!_ && !__) {
    throw createError({
      statusCode: 404,
      fatal: true,
    });
  }
}, {
  immediate: true,
});
</script>

<style lang="scss">
.sk-EventWishPage {
  &-container {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-4);
  }

  &-title {
    font-size: 1.4rem;
    text-align: center;
  }

  &-image {
    margin: var(--mk-size-4) 0;
    border: 1px solid var(--mk-border-color);
    border-radius: var(--mk-border-radius-size);
  }

  &-description {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-2);

    &-label {
      font-style: italic;
      color: var(--mk-text-soft-color);
    }
  }
}
</style>
