<template>
  <NuxtLayout name="default" class="sk-EventWishListPage">
    <template #title>
      {{ event.data.value?.name }}
    </template>
    <div
      v-if="wishList.data.value"
      class="sk-EventWishListPage-container"
    >
      <h2 class="sk-EventWishListPage-title">
        Liste de {{ wishList.data.value.user?.firstName }}
      </h2>

      <div class="sk-EventWishListPage-list">
        <template v-if="wishList.data.value.wishes?.length">
          <template v-for="wish of wishList.data.value.wishes" :key="wish?.id">
            <WishMiniature
              v-if="wish"
              :id="wish.id"
              :name="wish.name"
              :image="wish.image ? {
                id: wish.image?.id,
                title: wish.image.title ?? undefined,
                alt: wish.image.title ?? undefined,
              } : undefined"
            >
              <template #actions>
                <NuxtLink :to="`/event/${eventId}/wish/${wish.id}`">
                  <MkButton variant="outline">
                    Voir le souhait
                  </MkButton>
                </NuxtLink>
              </template>
            </WishMiniature>
          </template>
        </template>
        <template v-else>
          <AppEmptyListTitle>
            {{ wishList.data.value.user?.firstName }} n'a ajouté aucun souhait pour le moment !
          </AppEmptyListTitle>
          <WishMiniaturePlaceholder />
          <WishMiniaturePlaceholder />
          <WishMiniaturePlaceholder />
        </template>
      </div>
    </div>
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

const wishListId = useRouteParam('wishListId', z.string());

const event = useReadEvent(reactive({
  data: {
    eventId,
  },
}));

const wishList = useReadWishList(
  reactive({
    data: {
      id: wishListId,
    },
  }),
);

watch([wishList.pending, wishList.data], ([_, __]) => {
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
.sk-EventWishListPage {
  &-container {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-10);
  }

  &-title {
    font-size: 2rem;
    text-align: center;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-2);
  }

  &-actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
