<template>
  <div class="sk-AppTabLinks">
    <template v-for="(tab, index) of tabs" :key="index">
      <span v-if="index > 0" class="sk-AppTabLinks-separator" />
      <div class="sk-AppTabLinks-link" :data-active="props.activeTab === index">
        <component :is="tab" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import type { Slot } from 'vue';

interface Props {
  activeTab: number;
}

type Slots = {
  [K in `tab-${number}`]?: Slot;
};
</script>

<script lang="ts" setup>
const props = defineProps<Props>();

const slots = defineSlots<Slots>();

const tabs = computed(() => {
  const keys = Object.keys(slots).filter(v => v.startsWith('tab-'));
  return keys.map(k => (slots[k as keyof Slots] as Slot)()).flat(1);
});

// const surface =
</script>

<style lang="scss">
@use '@skgn/melkor/styles/mixins' as melkor;

.sk-AppTabLinks {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid var(--mk-primary);
  border-radius: var(--mk-border-radius-size);

  &-separator {
    display: block;
    border-right: 1px solid var(--mk-primary);
  }

  &-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: stretch;

    // &::before {
    //   @include melkor.pseudo;

    //   inset: -1px;
    //   pointer-events: none;
    //   border: 3px solid var(--mk-text-color);
    //   opacity: 0;
    // }

    // &:last-of-type {
    //   &::before {
    //     border-top-right-radius: var(--mk-border-radius-size);
    //     border-bottom-right-radius: var(--mk-border-radius-size);
    //   }
    // }

    // &:first-of-type {
    //   &::before {
    //     border-top-left-radius: var(--mk-border-radius-size);
    //     border-bottom-left-radius: var(--mk-border-radius-size);
    //   }
    // }

    &[data-active='true'] {
      font-style: italic;
      color: var(--mk-on-primary);
      background-color: var(--mk-primary);

      // &::before {
      //   opacity: 1;
      // }
    }

    > * {
      flex: 1 1 100%;
      padding: var(--mk-size-2) var(--mk-size-4);
      text-align: center;
    }
  }
}
</style>
