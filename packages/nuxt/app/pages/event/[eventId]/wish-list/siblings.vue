<template>
  <NuxtLayout name="default" class="sk-EventWishListSiblingsPage">
    <template #title>
      {{ event.data.value?.name }}
    </template>
    <div class="sk-EventWishListSiblingsPage-container">
      <div class="sk-EventWishListSiblingsPage-tabs">
        <AppEventTabsNav :event-id="eventId" />
      </div>
      <div
        v-if="event.data.value && otherUsers.data.value"
        class="sk-EventWishListSiblingsPage-list"
      >
        <template
          v-for="user of otherUsers.data.value"
          :key="user.id"
        >
          <WishListMiniature
            v-if="user.firstName"
            :user-first-name="user.firstName"
            :read-route="getWishListReadRoute(user.id) ?? undefined"
          />
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

const event = useReadEventWithSiblingsWishList(reactive({
  data: {
    eventId,
  },
}));

const otherUsers = userReadOtherUsers();

function getWishListReadRoute(userId: string) {
  const wishList = event.data.value?.wishLists?.find(wl => wl?.user?.id === userId);
  if (!wishList) {
    return null;
  }

  return `/event/${eventId.value}/wish-list/${wishList.id}`;
}
</script>

<style lang="scss">
.sk-EventWishListSiblingsPage {
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

  // &-actions {
  //   display: flex;
  //   justify-content: flex-end;
  // }
}
</style>
