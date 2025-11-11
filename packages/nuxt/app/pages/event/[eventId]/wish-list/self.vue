<template>
  <NuxtLayout name="default" class="sk-EventWishListSelfPage">
    <template #title>
      {{ event.data.value?.name }}
    </template>
    <div class="sk-EventWishListSelfPage-container">
      <div class="sk-EventWishListSelfPage-tabs">
        <AppEventTabsNav :event-id="eventId" />
      </div>
      <template v-if="!myWishList.pending.value && myWishList.data.value">
        <div class="sk-EventWishListSelfPage-list">
          <template v-if="myWishList.data.value.wishes?.length">
            <template v-for="wish of myWishList.data.value.wishes" :key="wish?.id">
              <WishMiniature
                v-if="wish && wish.name"
                :id="wish.id"
                :name="wish.name"
                :image="wish.image ? {
                  id: wish.image.id,
                  title: wish.image.title ?? undefined,
                  alt: wish.image.title ?? undefined,
                } : undefined"
                :edit-route="{
                  path: `/wish/${wish.id}/edit`,
                  query: {
                    submitRedirect: route.fullPath,
                  },
                }"
                @delete="() => myWishList.refresh()"
              />
            </template>
          </template>
          <template v-else>
            <AppEmptyListTitle>
              Tu n'as ajouté aucun souhait pour le moment !
            </AppEmptyListTitle>
            <WishMiniaturePlaceholder />
            <WishMiniaturePlaceholder />
            <WishMiniaturePlaceholder />
          </template>
        </div>
      </template>
    </div>
    <template #fab>
      <NuxtLink
        :to="{
          path: '/wish/create',
          query: {
            submitRedirect: route.fullPath,
          },
        }"
      >
        <MkButton>
          Ajouter un souhait <MkIcon icon="lucide:gift" />
        </MkButton>
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import z from 'zod';

definePageMeta({
  middleware: [
    'auth',
  ],
});

const route = useRoute();

const eventId = useRouteParam('eventId', z.string());

const event = useReadEvent(reactive({
  data: {
    eventId,
  },
}));

const myWishList = useReadMyWishList(
  reactive({
    data: {
      eventId,
    },
  }),
);

watch([myWishList.pending, myWishList.data], ([_, __]) => {
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
.sk-EventWishListSelfPage {
  &-container {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-10);
  }

  &-tabs {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-2);
  }
}
</style>
