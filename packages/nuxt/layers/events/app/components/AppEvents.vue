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
          <div v-for="(wishList, index) of event.wishLists" :key="wishList?.id">
            <template v-if="index === 0 && wishList">
              <NuxtLink :to="`/event/${event.id}/wish-list/self`">
                <MkButton variant="outline">
                  Voir ma liste
                  <MkIcon icon="lucide:clipboard-list" />
                </MkButton>
              </NuxtLink>
            </template>
          </div>
          <template v-if="event.wishLists?.length === 0">
            <WishListCreateCta
              :event-id="event.id"
              @created="refresh"
            />
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
