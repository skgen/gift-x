<template>
  <div
    v-if="events"
    class="sk-AppEvents"
  >
    <ul class="sk-AppEvents-list">
      <li v-for="event of events" :key="event.id">
        <MkCard class="sk-AppEvents-list-item">
          <strong>{{ event.name }}</strong>
          <span class="sk-AppEvents-list-item-line" />
          <template v-if="event.wishLists?.length === 0">
            <WishListCreateCta
              :event-id="event.id"
              @created="refresh"
            />
          </template>
          <template
            v-for="(wishList, index) of event.wishLists"
            v-else
            :key="wishList?.id"
          >
            <NuxtLink v-if="index === 0 && wishList" :to="`/event/${event.id}/wish-list/self`">
              <MkButton variant="outline">
                Voir ma liste
                <MkIcon icon="lucide:clipboard-list" />
              </MkButton>
            </NuxtLink>
          </template>
        </MkCard>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { data: events, refresh } = useReadMyEvents();
</script>

<style lang="scss">
.sk-AppEvents {
  display: flex;
  flex-direction: column;
  gap: var(--mk-size-10);

  &-list {
    display: flex;
    flex-direction: column;
    gap: var(--mk-size-2);

    &-item {
      display: flex;
      gap: var(--mk-size-4);
      align-items: center;

      &-line {
        flex: 1 1 auto;
        height: 1px;
        background-color: var(--mk-border-color);
      }
    }
  }
}
</style>
